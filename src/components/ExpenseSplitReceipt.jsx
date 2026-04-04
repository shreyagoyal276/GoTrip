import { useState, useEffect } from "react"

function ExpenseSplitReceipt(){

const [expenseName,setExpenseName] = useState("")
const [amount,setAmount] = useState("")
const [category,setCategory] = useState("")
const [friends,setFriends] = useState([])
const [friendName,setFriendName] = useState("")
const [friendEmail,setFriendEmail] = useState("")
const [showFriendBox,setShowFriendBox] = useState(false)

const [receipts,setReceipts] = useState([])



/* LOAD LOCAL STORAGE DATA */

useEffect(()=>{

const storedFriends = JSON.parse(localStorage.getItem("friends"))
const storedExpense = JSON.parse(localStorage.getItem("expense"))
const storedReceipts = JSON.parse(localStorage.getItem("receipts"))

if(storedFriends){
setFriends(storedFriends)
}

if(storedExpense){
setExpenseName(storedExpense.expenseName)
setAmount(storedExpense.amount)
setCategory(storedExpense.category)
}

if(storedReceipts){
setReceipts(storedReceipts)
}

},[])



/* SAVE FRIENDS */

useEffect(()=>{
localStorage.setItem("friends",JSON.stringify(friends))
},[friends])



/* SAVE EXPENSE */

useEffect(()=>{

const data={
expenseName,
amount,
category
}

localStorage.setItem("expense",JSON.stringify(data))

},[expenseName,amount,category])



/* SAVE RECEIPTS */

useEffect(()=>{
localStorage.setItem("receipts",JSON.stringify(receipts))
},[receipts])



/* ADD FRIEND */

const addFriend = ()=>{

if(!friendName || !friendEmail) return

setFriends([...friends,{name:friendName,email:friendEmail}])

setFriendName("")
setFriendEmail("")
setShowFriendBox(false)

}



/* RECEIPT UPLOAD */

const handleReceipt = (e)=>{

const files = Array.from(e.target.files)

files.forEach(file=>{

const reader = new FileReader()

reader.onloadend = ()=>{
setReceipts(prev => [...prev,reader.result])
}

reader.readAsDataURL(file)

})

}



/* DELETE RECEIPT */

const deleteReceipt = (index)=>{

const updated = receipts.filter((_,i)=> i !== index)
setReceipts(updated)

}



/* SPLIT CALCULATION */

const splitAmount = friends.length
? Math.round(amount/(friends.length+1))
: amount



return(

<div className="split-container">

<h2>Expense Split & Receipt Upload</h2>


<div className="split-grid">

<input
type="text"
placeholder="Expense Name"
value={expenseName}
onChange={(e)=>setExpenseName(e.target.value)}
/>

<input
type="number"
placeholder="Total Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>
<option value="">Category</option>
<option>Food</option>
<option>Hotel</option>
<option>Transport</option>
<option>Shopping</option>
<option>Activities</option>
</select>

<input
type="file"
multiple
onChange={handleReceipt}
/>

</div>



{/* ADD FRIEND */}

<div className="friend-section">

<button
className="add-friend-btn"
onClick={()=>setShowFriendBox(true)}
>
+ Add Friend
</button>


{showFriendBox &&(

<div className="friend-box">

<input
type="text"
placeholder="Friend Name"
value={friendName}
onChange={(e)=>setFriendName(e.target.value)}
/>

<input
type="email"
placeholder="Friend Email"
value={friendEmail}
onChange={(e)=>setFriendEmail(e.target.value)}
/>

<button onClick={addFriend}>
Add
</button>

</div>

)}

</div>



{/* FRIEND LIST */}

{friends.length>0 &&(

<div className="friend-list">

<h3>Friends</h3>

{friends.map((f,i)=>(
<p key={i}>
{f.name} ({f.email})
</p>
))}

</div>

)}



{/* SPLIT RESULT */}

{amount &&(

<div className="split-result">

<h3>Split Amount</h3>

<p>
Each Person Pays: ₹{splitAmount}
</p>

</div>

)}



{/* RECEIPT PREVIEW */}

{receipts.length>0 &&(

<div className="receipt-preview">

<h3>Receipts</h3>

<div className="receipt-grid">

{receipts.map((r,i)=>(

<div key={i} className="receipt-card">

<img src={r} alt="receipt"/>

<button
className="delete-btn"
onClick={()=>deleteReceipt(i)}
>
✕
</button>

</div>

))}

</div>

</div>

)}

</div>

)

}

export default ExpenseSplitReceipt

