import React, { useState } from "react";
import "./Login.css";
import { auth } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

export default function Login({ setUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  //  EMAIL/PASSWORD LOGIN
  const handleAuth = async () => {
    try {
      let userCredential;

      if (isSignup) {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        //  Save name
        await updateProfile(userCredential.user, {
          displayName: name
        });

      } else {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      setUser(userCredential.user);

    } catch (error) {
      alert(error.message);
    }
  };

  //  GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      setUser(result.user);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">

      {/* LEFT SIDE */}
      <div className="login-left">
        <h1>GoTrip ✈️</h1>
        <p>Plan smarter. Travel better.</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>

        {/* NAME (only signup) */}
        {isSignup && (
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* EMAIL LOGIN BUTTON */}
        <button onClick={handleAuth}>
          {isSignup ? "Sign Up" : "Login"}
        </button>

        {/* GOOGLE LOGIN BUTTON */}
        <button className="google-btn" onClick={handleGoogleLogin}>
          Sign in with Google
        </button>

        {/* TOGGLE */}
        <p
          className="toggle-text"
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? "Already have an account? Login"
            : "New user? Create account"}
        </p>
      </div>
    </div>
  );
}