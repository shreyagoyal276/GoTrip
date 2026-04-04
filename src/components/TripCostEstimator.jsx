import { useState } from "react"

function TripCostEstimator(){

const [destination,setDestination] = useState("")
const [days,setDays] = useState("")
const [hotel,setHotel] = useState("")
const [food,setFood] = useState("")
const [transport,setTransport] = useState("")
const [activities,setActivities] = useState("")

const hotelCost = days * hotel
const foodCost = days * food

const totalCost =
Number(hotelCost) +
Number(foodCost) +
Number(transport) +
Number(activities)

return(

<div className="estimator-container">

<h2>Trip Cost Estimator</h2>

<div className="estimator-grid">

<input
type="text"
placeholder="Destination (Goa, Manali...)"
value={destination}
onChange={(e)=>setDestination(e.target.value)}
/>

<input
type="number"
placeholder="Number of Days"
value={days}
onChange={(e)=>setDays(e.target.value)}
/>

<input
type="number"
placeholder="Hotel Cost per Night"
value={hotel}
onChange={(e)=>setHotel(e.target.value)}
/>

<input
type="number"
placeholder="Food Cost per Day"
value={food}
onChange={(e)=>setFood(e.target.value)}
/>

<input
type="number"
placeholder="Transport Budget"
value={transport}
onChange={(e)=>setTransport(e.target.value)}
/>

<input
type="number"
placeholder="Activities Budget"
value={activities}
onChange={(e)=>setActivities(e.target.value)}
/>

</div>


<div className="estimator-results">

<div className="result-card">
<h3>Estimated Trip Cost</h3>
<p>₹{totalCost}</p>
</div>

<div className="result-card">
<h3>Hotel Total</h3>
<p>₹{hotelCost}</p>
</div>

<div className="result-card">
<h3>Food Total</h3>
<p>₹{foodCost}</p>
</div>

<div className="result-card">
<h3>Transport Total</h3>
<p>₹{transport}</p>
</div>

</div>

</div>

)

}

export default TripCostEstimator
