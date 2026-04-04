import { useState } from "react"
import { Line } from "react-chartjs-2"
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend
} from "chart.js"

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend
)

function DailyExpenseTimeline(){

const [day,setDay] = useState("")
const [category,setCategory] = useState("")
const [amount,setAmount] = useState("")
const [daysData,setDaysData] = useState({})


const addExpense = () => {

if(!day || !category || !amount) return

const newData = {...daysData}

if(!newData[day]){
newData[day] = []
}

newData[day].push({
category:category,
amount:Number(amount)
})

setDaysData(newData)

setCategory("")
setAmount("")
}


/* CHART DATA */

const labels = Object.keys(daysData)

const values = labels.map(day =>
daysData[day].reduce((sum,e)=>sum + e.amount,0)
)

const chartData = {
labels:labels,
datasets:[
{
label:"Daily Spending",
data:values,
borderColor:"#ff6384",
backgroundColor:"#ff6384",
fill:false
}
]
}


return(

<div className="timeline-container">

<h2>Daily Expense Timeline</h2>

<div className="timeline-inputs">

<select
value={day}
onChange={(e)=>setDay(e.target.value)}
>
<option value="">Select Day</option>
<option>Day 1</option>
<option>Day 2</option>
<option>Day 3</option>
<option>Day 4</option>
<option>Day 5</option>
<option>Day 6</option>
<option>Day 7</option>
</select>

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>
<option value="">Category</option>
<option>Food</option>
<option>Taxi</option>
<option>Hotel</option>
<option>Shopping</option>
<option>Transport</option>
</select>

<input
type="number"
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<button onClick={addExpense}>
Add Expense
</button>

</div>


{/* DAY CARDS */}

<div className="timeline-cards">

{Object.keys(daysData).map((day,index)=>(
<div className="day-card-large" key={index}>

<h3>{day}</h3>

{daysData[day].map((exp,i)=>(
<p key={i}>
{exp.category} ₹{exp.amount}
</p>
))}

</div>
))}

</div>


{/* LINE CHART */}

{labels.length > 0 && (
<div className="timeline-chart">
<Line data={chartData} height={250}/>
</div>
)}

</div>

)

}

export default DailyExpenseTimeline

