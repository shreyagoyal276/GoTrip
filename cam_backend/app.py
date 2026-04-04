from flask import Flask, render_template, jsonify, request, Response
import cv2
import numpy as np
import time
import json
import os
from geopy.distance import geodesic

app = Flask(__name__)

# 🎥 OpenCV edge detection pipeline (60fps!)
def process_frame(frame):
    """Apply Canny edge detection + green glow overlay"""
    # Resize for mobile speed
    height, width = frame.shape[:2]
    frame_small = cv2.resize(frame, (640, 480))
    
    # 🔥 PROFESSIONAL CANNY EDGE DETECTION
    gray = cv2.cvtColor(frame_small, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    edges = cv2.Canny(blurred, 75, 200)  # Industry standard
    
    # 🔵 BLUE GLOWING EDGES (CHANNEL 2 = BLUE)
    edges_colored = cv2.cvtColor(edges, cv2.COLOR_GRAY2BGR)
    edges_colored[:, :, 0] = 255  # BLUE channel max (BGR format!)
    edges_colored[:, :, 2] = 10  # Add cyan tint for glow
    overlay = cv2.addWeighted(frame_small, 0.7, edges_colored, 0.5, 0)
    
    # Encode for streaming (85% quality = smooth)
    ret, buffer = cv2.imencode('.jpg', overlay, [cv2.IMWRITE_JPEG_QUALITY, 85])
    return buffer.tobytes()

# Load landmarks from JSON (YOUR existing code)
def load_landmarks():
    try:
        json_path = 'data/gwalior_landmarks.json'
        if os.path.exists(json_path):
            with open(json_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                print(f"✅ Loaded {len(data['landmarks'])} Gwalior landmarks")
                return data['landmarks']
        else:
            print(f"⚠️ {json_path} not found - using fallback")
    except Exception as e:
        print(f"❌ JSON error: {e}")
    
    # Fallback landmarks
    return [
        {"name": "Gwalior Fort", "lat": 26.1939, "lng": 78.1644, "type": "fort", "intro": "Massive hilltop fort with palaces & temples"},
        {"name": "Teli ka Mandir", "lat": 26.1950, "lng": 78.1650, "type": "temple", "intro": "Tallest temple in Gwalior Fort"},
        {"name": "Jai Vilas Palace", "lat": 26.2271, "lng": 78.1764, "type": "palace", "intro": "Scindia royal palace with giant chandelier"},
        {"name": "Gujari Mahal", "lat": 26.2197, "lng": 78.1697, "type": "museum", "intro": "Archaeological museum in former palace"},
        {"name": "Saas Bahu Temple", "lat": 26.1942, "lng": 78.1661, "type": "temple", "intro": "Twin temples with intricate carvings"},
        {"name": "Gopachal Monuments", "lat": 26.1900, "lng": 78.1622, "type": "monument", "intro": "Giant Jain rock-cut statues"}
    ]

LANDMARKS = load_landmarks()

def find_nearest_gps(lat, lng, max_radius_km=20):
    """Match GPS with nearest landmarks from JSON"""
    nearby = []
    user_coords = (float(lat), float(lng))
    
    for landmark in LANDMARKS:
        try:
            lm_coords = (landmark['lat'], landmark['lng'])
            distance_m = geodesic(user_coords, lm_coords).meters
            
            if distance_m <= (float(max_radius_km) * 1000):
                nearby.append({
                    'name': landmark['name'],
                    'type': landmark['type'],
                    'intro': landmark['intro'],
                    'distance_m': int(distance_m),
                    'distance_km': round(distance_m/1000, 1)
                })
        except:
            continue
    
    return sorted(nearby, key=lambda x: x['distance_m'])[:6]

@app.route('/')
def index():
    return render_template('index.html')

# 🎥 LIVE OPENCV VIDEO STREAM (NEW!)
@app.route('/video_feed')
def video_feed():
    """Stream OpenCV-processed video (60fps edge detection)"""
    cap = cv2.VideoCapture(0)
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
    cap.set(cv2.CAP_PROP_FPS, 30)
    
    def generate():
        while True:
            ret, frame = cap.read()
            if not ret:
                break
            
            frame = cv2.flip(frame, 1)  # Mirror for selfie view
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + process_frame(frame) + b'\r\n')
    
    return Response(generate(), mimetype='multipart/x-mixed-replace; boundary=frame')

# 🗺️ YOUR EXISTING GPS ENDPOINT (UNCHANGED)
@app.route('/history_demo', methods=['POST'])
def history_demo():
    try:
        data = request.get_json(force=True)
        if not data or 'lat' not in data or 'lon' not in data:
            return jsonify({'error': 'Missing GPS data'}), 400
        
        lat, lon = float(data['lat']), float(data['lon'])
        radius_km = float(data.get('radius_km', 20))
        print(f"🌍 Live GPS: {lat:.4f}, {lon:.4f}")
        
        nearest_places = find_nearest_gps(lat, lon, max_radius_km=radius_km)
        
        return jsonify({
            'status': 'success',
            'gps': f"{lat:.4f}, {lon:.4f}",
            'timestamp': time.strftime("%H:%M:%S"),
            'nearby_places': nearest_places,
            'total_found': len(nearest_places),
            'current_radius_km': radius_km
        })
        
    except Exception as e:
        print(f"❌ Error: {e}")
        return jsonify({'error': str(e), 'status': 'Retry GPS'}), 500

if __name__ == '__main__':
    print("🚀 Gwalior AR Landmarks - OpenCV Python Edition")
    print(f"📍 {len(LANDMARKS)} landmarks loaded")
    print("🎥 LIVE edge detection at http://localhost:5001")
    print("📱 Mobile: http://YOUR_IP:5001")
    app.run(debug=True, host='0.0.0.0', port=5001, threaded=True)
