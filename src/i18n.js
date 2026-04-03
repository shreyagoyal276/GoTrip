import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navbar
          home: "Home",
          insights: "Insights",
          budget: "Budget Tracker",
          family: "Friend & Family Pass",
          dashboard: "Dashboard",
          about: "About",
          profile: "Profile",

          // General
          welcome: "Welcome to GoTrip",
          explore: "Explore",
          search: "Search",
          recommendations: "Recommendations",

          // Hero
          hero_title: "Explore Tourism Insights Across India",
          hero_desc:
            "Data-driven tourism analytics platform helping travelers and policymakers understand tourism trends.",
          hero_button: "Explore Insights",

          // Footer
          footer_desc:
            "Smart travel planning platform helping tourists explore destinations and plan better trips.",
          quick_links: "Quick Links",
          destinations: "Destinations",
          planner: "Travel Planner",
          popular_destinations: "Popular Destinations",
          goa: "Goa",
          manali: "Manali",
          jaipur: "Jaipur",
          kerala: "Kerala",
          contact: "Contact",
          email: "Email",
          phone: "Phone",
          country: "India",
          copyright:
            "© 2026 GoTrip | Smart Travel Planning Platform",

          //  Recommendations
          ai_title: "AI Recommendations",
          popular_desc: "Popular destinations across India",
          ai_desc: "AI-powered destination predictions",
          any_region: "🌍 Any Region",
          any_category: "📂 Any Category",
          any_state: "🗺️ Any State",
          north: "North India",
          south: "South India",
          east: "East India",
          west: "West India",
          nature: "Nature",
          beach: "Beach",
          heritage: "Heritage",
          religious: "Religious",
          get_ai: "🚀 Get AI Recommendations",
          predicting: "🔮 Predicting...",
          ml_loading: "🤖 ML Model predicting destinations...",
          ml_error: "ML service unavailable - showing top destinations",
          select_pref: "Please select at least one preference!",
          no_results: "🎯 Select preferences and click button!"
        }
      },

      hi: {
        translation: {
          home: "होम",
          insights: "जानकारी",
          budget: "बजट ट्रैकर",
          family: "दोस्त और परिवार पास",
          dashboard: "डैशबोर्ड",
          about: "हमारे बारे में",
          profile: "प्रोफ़ाइल", 

          welcome: "गो ट्रिप में आपका स्वागत है",
          explore: "एक्सप्लोर",
          search: "खोजें",
          recommendations: "सिफारिशें",

          hero_title: "भारत भर में पर्यटन जानकारी खोजें",
          hero_desc:
            "डेटा-आधारित पर्यटन एनालिटिक्स प्लेटफॉर्म जो यात्रियों और नीति निर्माताओं को रुझानों को समझने में मदद करता है।",
          hero_button: "जानकारी देखें",

          footer_desc:
            "स्मार्ट ट्रैवल प्लानिंग प्लेटफॉर्म जो पर्यटकों को गंतव्यों की खोज और बेहतर यात्रा योजना बनाने में मदद करता है।",
          quick_links: "त्वरित लिंक",
          destinations: "गंतव्य",
          planner: "ट्रैवल प्लानर",
          popular_destinations: "लोकप्रिय गंतव्य",
          goa: "गोवा",
          manali: "मनाली",
          jaipur: "जयपुर",
          kerala: "केरल",
          contact: "संपर्क",
          email: "ईमेल",
          phone: "फोन",
          country: "भारत",
          copyright:
            "© 2026 GoTrip | स्मार्ट ट्रैवल प्लानिंग प्लेटफॉर्म",

          // Recommendations
          ai_title: "AI सिफारिशें",
          popular_desc: "लोकप्रिय स्थान",
          ai_desc: "AI द्वारा सुझाए गए स्थान",
          any_region: "कोई भी क्षेत्र",
          any_category: "कोई भी श्रेणी",
          any_state: "कोई भी राज्य",
          get_ai: "🚀 सिफारिश प्राप्त करें",
          predicting: "🔮 अनुमान लगाया जा रहा है...",
          ml_loading: "🤖 मॉडल काम कर रहा है...",
          ml_error: "सेवा उपलब्ध नहीं है",
          select_pref: "कृपया विकल्प चुनें",
          no_results: "कोई परिणाम नहीं"
        }
      },

      gu: {
        translation: {
          home: "હોમ",
          insights: "માહિતી",
          budget: "બજેટ ટ્રેકર",
          family: "મિત્ર અને પરિવાર પાસ",
          dashboard: "ડેશબોર્ડ",
          about: "અમારા વિશે",
          profile: "પ્રોફાઇલ",

          welcome: "GoTrip માં આપનું સ્વાગત છે",
          explore: "એક્સપ્લોર",
          search: "શોધો",
          recommendations: "ભલામણો",

          hero_title: "ભારતભરમાં પ્રવાસન માહિતી શોધો",
          hero_desc:
            "ડેટા આધારિત પ્રવાસન પ્લેટફોર્મ જે પ્રવાસીઓ અને નીતિનિર્માતાઓને ટ્રેન્ડ સમજવામાં મદદ કરે છે.",
          hero_button: "માહિતી જુઓ",

          footer_desc:
            "સ્માર્ટ ટ્રાવેલ પ્લાનિંગ પ્લેટફોર્મ જે પ્રવાસીઓને સ્થળોની શોધ અને સારી યોજના બનાવવા મદદ કરે છે.",
          quick_links: "ઝડપી લિંક્સ",
          destinations: "સ્થળો",
          planner: "ટ્રાવેલ પ્લાનર",
          popular_destinations: "લોકપ્રિય સ્થળો",
          goa: "ગોવા",
          manali: "મનાલી",
          jaipur: "જયપુર",
          kerala: "કેરળ",
          contact: "સંપર્ક",
          email: "ઇમેઇલ",
          phone: "ફોન",
          country: "ભારત",
          copyright:
            "© 2026 GoTrip | સ્માર્ટ ટ્રાવેલ પ્લાનિંગ પ્લેટફોર્મ",

            ai_title: "AI ભલામણો",
popular_desc: "ભારતના લોકપ્રિય સ્થળો",
ai_desc: "AI દ્વારા સૂચવેલ સ્થળો",
any_region: "કોઈપણ વિસ્તાર",
any_category: "કોઈપણ શ્રેણી",
any_state: "કોઈપણ રાજ્ય",
get_ai: "🚀 ભલામણ મેળવો",
predicting: "🔮 અનુમાન કરવામાં આવી રહ્યું છે...",
ml_loading: "🤖 મોડેલ સ્થળ શોધી રહ્યું છે...",
ml_error: "સેવા ઉપલબ્ધ નથી",
select_pref: "કૃપા કરીને વિકલ્પ પસંદ કરો",
no_results: "કોઈ પરિણામ નથી"
        }
      },

      ta: {
        translation: {
          home: "முகப்பு",
          insights: "தகவல்",
          budget: "பட்ஜெட் டிராக்கர்",
          family: "நண்பர்கள் & குடும்ப பாஸ்",
          dashboard: "டாஷ்போர்டு",
          about: "எங்களை பற்றி",
          profile: "சுயவிவரம்",

          welcome: "GoTripக்கு வரவேற்கிறோம்",
          explore: "ஆராயுங்கள்",
          search: "தேடல்",
          recommendations: "பரிந்துரைகள்",

          hero_title:
            "இந்தியா முழுவதும் சுற்றுலா தகவல்களை ஆராயுங்கள்",
          hero_desc:
            "பயணிகள் மற்றும் கொள்கை நிர்ணயர்களுக்கு உதவும் தரவுசார்ந்த சுற்றுலா பகுப்பாய்வு தளம்.",
          hero_button: "தகவல்களை பார்க்க",

          footer_desc:
            "சுற்றுலா இடங்களை ஆராய மற்றும் சிறந்த திட்டமிட உதவும் ஸ்மார்ட் டிராவல் தளம்.",
          quick_links: "விரைவு இணைப்புகள்",
          destinations: "இடங்கள்",
          planner: "பயண திட்டம்",
          popular_destinations: "பிரபல இடங்கள்",
          goa: "கோவா",
          manali: "மனாலி",
          jaipur: "ஜெய்ப்பூர்",
          kerala: "கேரளா",
          contact: "தொடர்பு",
          email: "மின்னஞ்சல்",
          phone: "தொலைபேசி",
          country: "இந்தியா",
          copyright:
            "© 2026 GoTrip | ஸ்மார்ட் டிராவல் தளம்",
//recommendations
            ai_title: "AI பரிந்துரைகள்",
popular_desc: "இந்தியாவின் பிரபல இடங்கள்",
ai_desc: "AI மூலம் பரிந்துரைக்கப்பட்ட இடங்கள்",
any_region: "எந்த பகுதியும்",
any_category: "எந்த வகையும்",
any_state: "எந்த மாநிலமும்",
get_ai: "🚀 பரிந்துரைகள் பெறுங்கள்",
predicting: "🔮 கணிக்கப்படுகிறது...",
ml_loading: "🤖 மாதிரி செயல்படுகிறது...",
ml_error: "சேவை கிடைக்கவில்லை",
select_pref: "தயவுசெய்து தேர்வு செய்யவும்",
no_results: "முடிவுகள் இல்லை"


        }
      },

      mr: {
        translation: {
          home: "मुख्यपृष्ठ",
          insights: "माहिती",
          budget: "बजेट ट्रॅकर",
          family: "मित्र आणि कुटुंब पास",
          dashboard: "डॅशबोर्ड",
          about: "आमच्याबद्दल",
          profile: "प्रोफ़ाइल",

          welcome: "GoTrip मध्ये आपले स्वागत आहे",
          explore: "एक्सप्लोर",
          search: "शोधा",
          recommendations: "शिफारसी",

          hero_title: "भारतभर पर्यटन माहिती शोधा",
          hero_desc:
            "डेटा-आधारित पर्यटन विश्लेषण प्लॅटफॉर्म जो प्रवासी आणि धोरणकर्त्यांना ट्रेंड समजून घेण्यास मदत करतो.",
          hero_button: "माहिती पहा",

          footer_desc:
            "पर्यटकांना ठिकाणे शोधण्यास आणि उत्तम प्रवास नियोजन करण्यात मदत करणारे स्मार्ट प्लॅटफॉर्म.",
          quick_links: "जलद दुवे",
          destinations: "गंतव्ये",
          planner: "प्रवास नियोजक",
          popular_destinations: "लोकप्रिय ठिकाणे",
          goa: "गोवा",
          manali: "मनाली",
          jaipur: "जयपूर",
          kerala: "केरळ",
          contact: "संपर्क",
          email: "ईमेल",
          phone: "फोन",
          country: "भारत",
          copyright:
            "© 2026 GoTrip | स्मार्ट ट्रॅव्हल प्लॅटफॉर्म",

            ai_title: "AI शिफारसी",
popular_desc: "भारतामधील लोकप्रिय ठिकाणे",
ai_desc: "AI द्वारे सुचवलेली ठिकाणे",
any_region: "कोणताही प्रदेश",
any_category: "कोणतीही श्रेणी",
any_state: "कोणतेही राज्य",
get_ai: "🚀 शिफारस मिळवा",
predicting: "🔮 अंदाज लावला जात आहे...",
ml_loading: "🤖 मॉडेल कार्यरत आहे...",
ml_error: "सेवा उपलब्ध नाही",
select_pref: "कृपया पर्याय निवडा",
no_results: "कोणतेही परिणाम नाहीत"



        }
      }
    },

    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;