


import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

let groups = {};

app.post("/create-group", (req, res) => {
  const groupId = Math.random().toString(36).substring(2, 8);

  groups[groupId] = {
    id: groupId,
    members: [],
    messages: []
  };

  res.json({
    code: groupId,
    link: `http://localhost:5173/join/${groupId}`
  });
});

// ✅ JOIN GROUP
app.post("/join-group", (req, res) => {
  const { code, user } = req.body;

  if (!groups[code]) {
    return res.status(404).json({ message: "Group not found" });
  }

  if (!groups[code].members.includes(user)) {
    groups[code].members.push(user);
  }

  res.json(groups[code]);
});

// ✅ GET GROUP
app.get("/group/:code", (req, res) => {
  res.json(groups[req.params.code]);
});

// ✅ SEND MESSAGE
app.post("/send-message", (req, res) => {
  const { code, user, text } = req.body;

  groups[code].messages.push({
    user,
    text
  });

  res.json({ success: true });
});




// app.post("/recommend", async (req, res) => {
//   const { budget, weather, type, date } = req.body;

//   try {
//     const prompt = `
// Suggest best travel destination for:
// Budget: ${budget}
// Weather: ${weather}
// Travel Type: ${type}
// Date: ${date}

// Give short answer with place + why
// `;

//     const response = await axios.post(
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAu0czJVSaqesAmuD5C75aQ8ceQ5cmviwY",
//       {
//         contents: [
//           {
//             parts: [{ text: prompt }]
//           }
//         ]
//       }
//     );

//     const result =
//       response.data.candidates[0].content.parts[0].text;

//     res.json({ result });

//   } catch (err) {
//     console.error(err);
//     res.json({ result: "Error generating recommendation" });
//   }
// });






app.post("/recommend", async (req, res) => {
  const { budget, weather, type, date } = req.body;

  try {
    const prompt = `
Suggest best travel destination for:
Budget: ${budget}
Weather: ${weather}
Travel Type: ${type}
Date: ${date}

Give short answer with place + why
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YOUR_GEMINI_API_KEY`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      }
    );

    const result =
      response.data.candidates[0].content.parts[0].text;

    res.json({ result });

  } catch (err) {
    console.error("Gemini Error:", err.response?.data || err.message);
    res.json({ result: "AI not working, try again" });
  }
});




app.post("/quick-plan", async (req, res) => {
  const { city, time, interest } = req.body;

  try {
    const prompt = `
Create a short travel itinerary for:

City: ${city}
Available Time: ${time}
Interest: ${interest}

Give step-by-step plan with timings.
Keep it short and practical.
`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDM7zRsITWTPObeq3gQfWcjtfQqEaPsNxE`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      }
    );

    const result =
      response.data.candidates?.[0]?.content?.parts?.[0]?.text;

    res.json({ result });

  } catch (err) {
    console.error("ERROR:", err.response?.data || err.message);
    res.json({ result: "AI not working" });
  }
});


app.listen(5000, () => console.log("Server running on 5000"));