import { useState } from "react";
import Chat from "./Chat";
import bgImage from "../assets/1976998.jpg";

export default function JoinGroup({ autoCode }) {
  const [code, setCode] = useState(autoCode || "");
  const [name, setName] = useState("");
  const [group, setGroup] = useState(null);
  const [error, setError] = useState("");

  const joinGroup = async () => {
    try {
      const res = await fetch("http://localhost:5000/join-group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code, user: name })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        setGroup(null);
        return;
      }

      setError("");
      setGroup(data);
    } catch (err) {
      console.error(err);
      setError("Server not running");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px"
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.65)",
          zIndex: 0
        }}
      />

      {/* Optional dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: 1
        }}
      />

      {/* Main card */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "520px",
          padding: "32px",
          borderRadius: "24px",
          background: "rgba(255, 255, 255, 0.88)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.22)",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            color: "#1e3a8a",
            fontSize: "2rem"
          }}
        >
          Join Group
        </h2>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: "100%",
            padding: "14px 16px",
            marginBottom: "14px",
            borderRadius: "12px",
            border: "1px solid #dbeafe",
            fontSize: "1rem",
            background: "rgba(255,255,255,0.95)",
            outline: "none",
            boxSizing: "border-box"
          }}
        />

        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Code"
          style={{
            width: "100%",
            padding: "14px 16px",
            marginBottom: "14px",
            borderRadius: "12px",
            border: "1px solid #dbeafe",
            fontSize: "1rem",
            background: "rgba(255,255,255,0.95)",
            outline: "none",
            boxSizing: "border-box"
          }}
        />

        <button
          onClick={joinGroup}
          style={{
            width: "100%",
            padding: "14px 18px",
            borderRadius: "999px",
            border: "none",
            background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
            color: "white",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "6px",
            boxShadow: "0 10px 24px rgba(59,130,246,0.28)"
          }}
        >
          Join
        </button>

        {error && (
          <p
            style={{
              color: "#dc2626",
              marginTop: "14px",
              fontWeight: "500"
            }}
          >
            {error}
          </p>
        )}

        {group && group.members && (
          <div
            style={{
              marginTop: "26px",
              textAlign: "left"
            }}
          >
            <h3
              style={{
                color: "#1e40af",
                marginBottom: "14px",
                textAlign: "center"
              }}
            >
              Members
            </h3>

            {group.members.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: "10px 14px",
                  marginBottom: "10px",
                  borderRadius: "12px",
                  background: "rgba(219,234,254,0.75)",
                  color: "#1f2937",
                  fontWeight: "500"
                }}
              >
                {m}
              </div>
            ))}

            <div
              style={{
                marginTop: "22px",
                padding: "16px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)"
              }}
            >
              <Chat code={code} name={name} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
