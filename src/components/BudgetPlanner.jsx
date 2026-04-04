import { useState } from "react"

function BudgetPlanner() {

  const [days, setDays] = useState(1)
  const [transport, setTransport] = useState("train")
  const [hotel, setHotel] = useState("budget")

  const calculateCost = () => {

    let transportCost = 0
    let hotelCost = 0

    if (transport === "train") transportCost = 800
    if (transport === "bus") transportCost = 500
    if (transport === "flight") transportCost = 4000

    if (hotel === "budget") hotelCost = 1000
    if (hotel === "standard") hotelCost = 2500
    if (hotel === "luxury") hotelCost = 6000

    return transportCost + (hotelCost * days)
  }

  return (

    <section className="budget">

      <h2>Travel Budget Planner</h2>

      <div className="budget-container">

        <div className="budget-inputs">

          <label>Days of Travel</label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />

          <label>Transport</label>
          <select
            onChange={(e) => setTransport(e.target.value)}
          >
            <option value="train">Train</option>
            <option value="bus">Bus</option>
            <option value="flight">Flight</option>
          </select>

          <label>Hotel Type</label>
          <select
            onChange={(e) => setHotel(e.target.value)}
          >
            <option value="budget">Budget</option>
            <option value="standard">Standard</option>
            <option value="luxury">Luxury</option>
          </select>

        </div>

        <div className="budget-result">

          <h3>Estimated Cost</h3>

          <p className="cost">
            ₹ {calculateCost()}
          </p>

        </div>

      </div>

    </section>
  )
}

export default BudgetPlanner