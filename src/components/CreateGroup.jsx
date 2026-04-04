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
    <div className="create-group-container">
      <div className="create-group-card">
        <h2>Create Group</h2>

        <button className="generate-btn" onClick={createGroup}>
          Generate Group
        </button>

        {code && (
          <div className="group-result">
            <h3 className="group-code">Code: {code}</h3>
            <p className="group-link">{link}</p>

            <button className="copy-btn" onClick={copyLink}>
               Copy Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}