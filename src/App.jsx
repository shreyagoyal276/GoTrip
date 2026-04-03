import './App.css'
import { useState, useEffect } from "react"

//  Firebase
import { auth } from "./firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"

//  Login Component
import Login from "./components/Login"

// Your Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LocationSearch from './components/LocationSearch'
import DestinationInfo from './components/DestinationInfo'
import TravelDashboard from './components/TravelDashboard'
import TourismMap from './components/TourismMap'
import TourismInsights from './components/TourismInsights'
import Recommendations from "./components/Recommendations"
import Footer from "./components/Footer"
import BudgetTracker from "./components/BudgetTracker"
import DailyExpenseTimeline from "./components/DailyExpenseTimeline"
import TripCostEstimator from "./components/TripCostEstimator"
import ExpenseSplitReceipt from "./components/ExpenseSplitReceipt"
import FriendsFamilyPass from "./components/FriendsFamilyPass";
import Profile from "./components/Profile";
import GroupPage from "./components/GroupPage";
import CreateGroup from "./components/CreateGroup";
import JoinGroup from "./components/JoinGroup";
import { useParams } from "react-router-dom";


function App() {

  //  USER STATE
  const [user, setUser] = useState(null)

  // EXISTING STATES
  const [page, setPage] = useState("home")
  const [showAR, setShowAR] = useState(false)

  const AR_URL = import.meta.env.VITE_AR_URL || 'http://localhost:5001';

  //  CHECK LOGIN STATUS
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => unsubscribe()
  }, [])

  //  IF NOT LOGGED IN → SHOW LOGIN PAGE
  if (!user) {
    return <Login setUser={setUser} />
  }

  //  LOGOUT BUTTON (you can move it to Navbar later)
  const LogoutButton = () => (
    <button 
      onClick={() => signOut(auth)} 
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        padding: "8px 12px",
        background: "red",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        zIndex: 1000
      }}
    >
      Logout
    </button>
  )

  //  PAGE ROUTES
  if (page === "budget") {
    return (
      <>
        <LogoutButton />
        <Navbar setPage={setPage} />
        <TripCostEstimator />
        <BudgetTracker />
        <DailyExpenseTimeline />
        <ExpenseSplitReceipt />
      </>
    )
  }

  if (page === "friend-family-pass") {
    return (
      <>
        <LogoutButton />
        <Navbar setPage={setPage} />
        <FriendsFamilyPass />
      </>
    );
  }

if (page.startsWith("join/")) {
  const code = page.split("/")[1];

  return (
    <>
      <Navbar setPage={setPage} currentPage={page} />
      <JoinGroup autoCode={code} />
    </>
  );
}




if (page === "groups") {
  return (
    <>
      <Navbar setPage={setPage} currentPage={page} />
      <GroupPage setPage={setPage} />
    </>
  )
}


  if (page === "insights") {
    return (
      <>
        <LogoutButton />
        <Navbar setPage={setPage} />
        <TourismInsights />
      </>
    )
  }


  if (page === "create-group") {
  return (
    <>
      <Navbar setPage={setPage} currentPage={page} />
      <CreateGroup />
    </>
  )
}

if (page === "join-group") {
  return (
    <>
      <Navbar setPage={setPage} currentPage={page} />
      <JoinGroup />
    </>
  )
}

  if (page === "profile") {
  return (
    <>
      <Navbar setPage={setPage} />
      <Profile />
    </>
  );
}

  //  MAIN HOME PAGE
  return (
    <div className="app-container"> 

      <LogoutButton />

      <Navbar setPage={setPage} />
      <Hero />
      <LocationSearch />
      <Recommendations />
      <DestinationInfo />
      <TourismInsights />
      <TourismMap />
      <TravelDashboard />
      <Footer />

      {/* 🔥 AR BUTTON */}
      <div 
        className={`floating-ar-btn ${showAR ? 'ar-open' : ''}`}
        onClick={() => setShowAR(!showAR)}
        title={showAR ? "Close AR" : "🗺️ AR Landmarks Scanner"}
      >
        {showAR ? (
          <div style={{fontSize: '28px', color: 'white'}}>✕</div>
        ) : (
          <>
            <img 
              src="https://img.icons8.com/fluency/48/camera.png" 
              alt="AR Scanner"
              style={{width: '28px', height: '28px'}}
            />
            <span style={{fontSize: '10px', fontWeight: '700', color: 'white'}}>AR</span>
          </>
        )}
      </div>

      {/* 🔥 AR OVERLAY */}
      {showAR && (
        <div className="ar-overlay">
          <iframe
            src={AR_URL}
            width="100%"
            height="100%"
            allow="camera; geolocation"
            style={{border: 'none'}}
          />
        </div>
      )}
    </div>
  )
}

export default App




