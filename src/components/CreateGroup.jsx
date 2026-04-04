// import { useState } from "react";

// export default function CreateGroup() {
//   const [code, setCode] = useState("");

//   const createGroup = async () => {
//     const res = await fetch("http://localhost:5000/create-group", {
//       method: "POST"
//     });

//     const data = await res.json();
//     setCode(data.code);
//   };

//   return (
//     <div style={{textAlign: "center", marginTop: "50px"}}>
//       <h2>Create Group</h2>
//       <button onClick={createGroup}>Generate Code</button>

//       {code && (
//         <div>
//           <p>Invite Code: {code}</p>
//         </div>
//       )}
//     </div>
//   );
// }


import { useState } from "react";

export default function CreateGroup() {
  const [code, setCode] = useState("");
  const [link, setLink] = useState("");

  const createGroup = async () => {
    const res = await fetch("http://localhost:5000/create-group", {
      method: "POST"
    });

    const data = await res.json();
    setCode(data.code);
    setLink(data.link);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Create Group</h2>

      <button onClick={createGroup}>Generate Group</button>

      {code && (
        <>
          <h3>Code: {code}</h3>
          <p>{link}</p>
          <button onClick={copyLink}>📋 Copy Link</button>
        </>
      )}
    </div>
  );
}