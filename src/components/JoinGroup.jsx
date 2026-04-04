import { useState } from "react";
import Chat from "./Chat";
import bgImage from "../assets/1976998.jpg";

export default function JoinGroup({ autoCode }) {
  const [code, setCode] = useState(autoCode || "");
  const [name, setName] = useState("");
  const [group, setGroup] = useState(null);
  const [error, setError] = useState("");
  const [selectedVote, setSelectedVote] = useState("");
  const [voteMessage, setVoteMessage] = useState("");

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

  const handleVote = (place) => {
    setSelectedVote(place.title);
    setVoteMessage(`You voted for ${place.title}`);
  };

  const destinations = [
    {
      title: "Goa",
      desc: "Best for beaches, nightlife, and fun group activities."
    },
    {
      title: "Manali",
      desc: "Perfect for mountain views, adventure sports, and cool weather."
    },
    {
      title: "Jaipur",
      desc: "Great for heritage trips, local food, and cultural experiences."
    }
  ];

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

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.25)",
          zIndex: 1
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1000px",
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
                display: "flex",
                gap: "20px",
                marginTop: "24px",
                alignItems: "flex-start",
                flexWrap: "wrap"
              }}
            >
              <div
                style={{
                  flex: "1",
                  minWidth: "280px"
                }}
              >
                <h3
                  style={{
                    color: "#1e40af",
                    marginBottom: "14px"
                  }}
                >
                  Suggested Destinations
                </h3>

                {voteMessage && (
                  <p
                    style={{
                      color: "#065f46",
                      background: "#d1fae5",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      marginBottom: "14px",
                      fontWeight: "600"
                    }}
                  >
                    {voteMessage}
                  </p>
                )}

                {destinations.map((place, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "16px",
                      marginBottom: "14px",
                      borderRadius: "16px",
                      background:
                        selectedVote === place.title
                          ? "rgba(191,219,254,0.95)"
                          : "rgba(255,255,255,0.78)",
                      border:
                        selectedVote === place.title
                          ? "2px solid #2563eb"
                          : "1px solid rgba(0,0,0,0.05)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.08)"
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 0 8px 0",
                        color: "#1d4ed8",
                        fontSize: "1.1rem"
                      }}
                    >
                      {place.title}
                    </h4>

                    <p
                      style={{
                        margin: "0 0 14px 0",
                        color: "#374151",
                        fontSize: "0.95rem",
                        lineHeight: "1.5"
                      }}
                    >
                      {place.desc}
                    </p>

                    <button
                      onClick={() => handleVote(place)}
                      style={{
                        padding: "10px 18px",
                        borderRadius: "999px",
                        border: "none",
                        background:
                          selectedVote === place.title
                            ? "#1d4ed8"
                            : "linear-gradient(135deg, #3b82f6, #60a5fa)",
                        color: "white",
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        cursor: "pointer"
                      }}
                    >
                      {selectedVote === place.title ? "Selected" : "Select"}
                    </button>
                  </div>
                ))}
              </div>

              <div
                style={{
                  flex: "1",
                  minWidth: "280px",
                  padding: "16px",
                  borderRadius: "18px",
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)"
                }}
              >
                <Chat code={code} name={name} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
