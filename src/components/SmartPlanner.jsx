import { useState } from "react"

function SmartPlanner() {

  const [destination, setDestination] = useState("")
  const [days, setDays] = useState(1)
  const [budget, setBudget] = useState("")
  const [plan, setPlan] = useState(null)

  const generatePlan = () => {

    const itinerary = []

    for (let i = 1; i <= days; i++) {
      itinerary.push(`Day ${i}: Explore local attractions in ${destination}`)
    }

    setPlan(itinerary)
  }

  return (

    <section className="planner">

      <h2>Smart Travel Planner</h2>

      <div className="planner-form">

        <input
          type="text"
          placeholder="Destination"
          onChange={(e) => setDestination(e.target.value)}
        />

        <input
          type="number"
          placeholder="Days"
          onChange={(e) => setDays(e.target.value)}
        />

        <input
          type="number"
          placeholder="Budget (₹)"
          onChange={(e) => setBudget(e.target.value)}
        />

        <button className="btn" onClick={generatePlan}>
          Generate Plan
        </button>

      </div>

      {plan && (
        <div className="plan-result">

          <h3>Your Itinerary</h3>

          {plan.map((day, index) => (
            <p key={index}>{day}</p>
          ))}

        </div>
      )}

    </section>
  )
}

export default SmartPlanner