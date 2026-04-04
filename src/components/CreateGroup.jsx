import { useState } from "react";
import bgImage from "../assets/1976998.jpg";

export default function CreateGroup({ setPage, setGroupData }) {
  const [code, setCode] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  const createGroup = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/create-group", {
        method: "POST"
      });

      const data = await res.json();
      
      if (!res.ok) {
        alert(data.message || "Failed to create group");
        return;
      }

      setCode(data.code);
      setLink(data.link);
      
      // Pass data to parent and navigate
      if (setGroupData && setPage) {
        setGroupData({ code: data.code, link: data.link });
        setPage("group-created");
      }
    } catch (err) {
      alert("Server not running");
    } finally {
      setLoading(false);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      alert("Link copied!");
    } catch {
      alert("Copy failed");
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

      {/* Dark overlay */}
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
          padding: "36px",
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
            marginBottom: "28px",
            color: "#1e3a8a",
            fontSize: "2.1rem",
            fontWeight: "700"
          }}
        >
          Create Group
        </h2>

        <button
          onClick={createGroup}
          disabled={loading}
          style={{
            width: "100%",
            padding: "16px 20px",
            borderRadius: "999px",
            border: "none",
            background: loading 
              ? "#9ca3af" 
              : "linear-gradient(135deg, #3b82f6, #60a5fa)",
            color: "white",
            fontSize: "1.1rem",
            fontWeight: "600",
            cursor: loading ? "not-allowed" : "pointer",
            marginBottom: "24px",
            boxShadow: "0 12px 28px rgba(59,130,246,0.32)",
            transition: "all 0.2s"
          }}
        >
          {loading ? "Creating..." : "Generate Group"}
        </button>

        {code && (
          <div
            style={{
              padding: "24px",
              background: "rgba(255,255,255,0.75)",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.5)"
            }}
          >
            <h3
              style={{
                marginBottom: "12px",
                color: "#2563eb",
                fontSize: "1.4rem"
              }}
            >
              Group Code: <span style={{ fontWeight: "800", color: "#1e40af" }}>{code}</span>
            </h3>
            
            <p
              style={{
                marginBottom: "20px",
                color: "#374151",
                fontSize: "0.95rem",
                wordBreak: "break-all",
                padding: "12px 16px",
                background: "rgba(219,234,254,0.4)",
                borderRadius: "12px"
              }}
            >
              {link}
            </p>

            <button
              onClick={copyLink}
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "999px",
                border: "none",
                background: "linear-gradient(135deg, #10b981, #34d399)",
                color: "white",
                fontSize: "1rem",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 8px 20px rgba(16,185,129,0.3)"
              }}
            >
              📋 Copy Invite Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
