import React, { useState } from "react";
import QRCode from "qrcode";
import { jsPDF } from "jspdf";

const FriendsFamilyPass = () => {
  const [passList, setPassList] = useState([]);
  const [currentPass, setCurrentPass] = useState({
    name: "",
    trip: "",
    days: "",
    budget: "",
  });

  // Handle input change for current passenger
  const handleChange = (e) => {
    setCurrentPass({ ...currentPass, [e.target.name]: e.target.value });
  };

  // Add current passenger to list
  const addPass = () => {
    if (!currentPass.name || !currentPass.trip) {
      alert("Please enter at least Name and Trip");
      return;
    }
    setPassList([...passList, { ...currentPass }]);
    setCurrentPass({ name: "", trip: "", days: "", budget: "" });
  };

  // Generate PDF for all passengers
  const generateAllTicketsPDF = async () => {
    if (passList.length === 0) {
      alert("Please add at least one passenger");
      return;
    }

    try {
      const pdf = new jsPDF("p", "mm", "a4");

      for (let i = 0; i < passList.length; i++) {
        const pass = passList[i];
        const qrUrl = await QRCode.toDataURL(JSON.stringify(pass));
        const startX = 15;
        const startY = 20;
        const boxWidth = 180;
        const boxHeight = 130;

        // Draw border
        pdf.setDrawColor(0);
        pdf.setLineWidth(1.5);
        pdf.rect(startX, startY, boxWidth, boxHeight, "S");

        // Header
        pdf.setFillColor(0, 123, 255);
        pdf.rect(startX, startY, boxWidth, 20, "F");
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(18);
        pdf.text("GoTrip Pass", startX + boxWidth / 2, startY + 14, { align: "center" });

        // Ticket details
        pdf.setTextColor(0, 0, 0);
        pdf.setFontSize(12);
        const lineStartY = startY + 35;
        const lineHeight = 10;

        pdf.text(`Passenger : ${pass.name}`, startX + 10, lineStartY);
        pdf.text(`Trip      : ${pass.trip}`, startX + 10, lineStartY + lineHeight);
        pdf.text(`Days      : ${pass.days || "-"}`, startX + 10, lineStartY + 2 * lineHeight);
        pdf.text(`Budget    : ₹${pass.budget || "-"}`, startX + 10, lineStartY + 3 * lineHeight);
        const date = new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
        pdf.text(`Date      : ${date}`, startX + 10, lineStartY + 4 * lineHeight);

        // QR code
        pdf.addImage(qrUrl, "PNG", startX + boxWidth - 60 - 10, startY + 30, 60, 60);

        // Ticket ID
        const ticketId = "GT" + Math.floor(10000 + Math.random() * 90000);
        pdf.setFontSize(10);
        pdf.text(`Ticket ID : ${ticketId}`, startX + 10, startY + boxHeight - 10);

        // Add new page if not last
        if (i < passList.length - 1) {
          pdf.addPage();
        }
      }

      pdf.save(`GoTrip_Pass_Batch.pdf`);
    } catch (err) {
      console.error("Error generating tickets PDF:", err);
    }
  };

  return (
    <div className="pass-container">
      <h1>Friend & Family Pass</h1>

      <input
        type="text"
        name="name"
        placeholder="Passenger Name"
        value={currentPass.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="trip"
        placeholder="Trip Name"
        value={currentPass.trip}
        onChange={handleChange}
      />
      <input
        type="number"
        name="days"
        placeholder="Number of Days"
        value={currentPass.days}
        onChange={handleChange}
      />
      <input
        type="number"
        name="budget"
        placeholder="Budget"
        value={currentPass.budget}
        onChange={handleChange}
      />

      <button onClick={addPass}>Add Passenger</button>
      <button onClick={generateAllTicketsPDF} style={{ marginLeft: "10px" }}>
        Download All Passes PDF
      </button>

      {passList.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Passengers Added:</h3>
          <ul>
            {passList.map((p, idx) => (
              <li key={idx}>
                {p.name} - {p.trip} ({p.days || "-"} days, ₹{p.budget || "-"})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FriendsFamilyPass;