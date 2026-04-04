import { useState } from "react"

function CrowdPredictor() {

  const [place, setPlace] = useState("")
  const [month, setMonth] = useState("")
  const [result, setResult] = useState("")

  const predictCrowd = () => {

    let crowd = ""

    if (month === "December" || month === "November") {
      crowd = "High Crowd 🔴"
    }
    else if (month === "June" || month === "July") {
      crowd = "Low Crowd 🟢"
    }
    else {
      crowd = "Moderate Crowd 🟡"
    }

    setResult(`${place}: ${crowd}`)
  }

  return (

    <section className="crowd container">

      <h2>Crowd Prediction</h2>

      <div className="crowd-form">

        <input
          type="text"
          placeholder="Destination"
          onChange={(e) => setPlace(e.target.value)}
        />

        <select onChange={(e) => setMonth(e.target.value)}>
          <option>Select Month</option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>

        <button className="btn" onClick={predictCrowd}>
          Predict Crowd
        </button>

      </div>

      {result && (
        <div className="crowd-result">
          <h3>{result}</h3>
          <p>Best Visiting Time: Early Morning</p>
        </div>
      )}

    </section>
  )
}

export default CrowdPredictor