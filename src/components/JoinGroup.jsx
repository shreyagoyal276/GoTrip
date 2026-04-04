// import { useState } from "react";
// import Chat from "./Chat";

// export default function JoinGroup({ autoCode }) {
//   const [code, setCode] = useState(autoCode || "");
//   const [name, setName] = useState("");
//   const [group, setGroup] = useState(null);
//   const [error, setError] = useState("");

//   const joinGroup = async () => {
//     try {
//       const res = await fetch("http://localhost:5000/join-group", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ code, user: name })
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message);
//         setGroup(null);
//         return;
//       }

//       setError("");
//       setGroup(data);

//     } catch (err) {
//       console.error(err);
//       setError("Server not running");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Join Group</h2>

//       <input 
//         placeholder="Name" 
//         onChange={e => setName(e.target.value)} 
//       />
//       <br /><br />

//       <input 
//         value={code} 
//         onChange={e => setCode(e.target.value)} 
//         placeholder="Enter Code"
//       />
//       <br /><br />

//       <button onClick={joinGroup}>Join</button>

//       {/* ❌ ERROR MESSAGE */}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* ✅ MEMBERS */}
//       {group && group.members && (
//         <div>
//           <h3>Members:</h3>

//           {group.members.map((m, i) => (
//             <p key={i}>{m}</p>
//           ))}

//           <Chat code={code} name={name} />
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import Chat from "./Chat";

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
    <div className="join-group-container">
      <div className="join-group-card">
        <h2>Join Group</h2>

        <input 
          className="join-input"
          placeholder="Name" 
          onChange={e => setName(e.target.value)} 
        />

        <input 
          className="join-input"
          value={code} 
          onChange={e => setCode(e.target.value)} 
          placeholder="Enter Code"
        />

        <button className="join-btn" onClick={joinGroup}>
          Join
        </button>

        {/* ❌ ERROR MESSAGE */}
        {error && <p className="join-error">{error}</p>}

        {/* ✅ MEMBERS */}
        {group && group.members && (
          <div className="members-box">
            <h3>Members:</h3>

            {group.members.map((m, i) => (
              <div className="member" key={i}>{m}</div>
            ))}

            <div className="chat-box">
              <Chat code={code} name={name} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}