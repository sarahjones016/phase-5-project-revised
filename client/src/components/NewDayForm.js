import React, {useState} from 'react'
import "./NewDayForm.css";

function NewDayForm({user, onFormSubmit}) {

  const [date, setDate] = useState("");
  const [consumptionGoal, setConsumptionGoal] = useState("");

  function handleNewDaySubmit(e) {
    e.preventDefault();
    console.log("submit button clicked")

    fetch("/daily_consumptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: date,
        consumption_goal: consumptionGoal,
        ounces_consumed: 0,
        user_id: user.id
      }),
    })
    // .then((res) => console.log(res))
    .then((res) => res.json())
    .then((data) => onFormSubmit(data))
  }

  return (
    <div className='div'>
       <h2>Add New Day</h2>
       <div className='form-holder'>
        <form className='form' onSubmit={handleNewDaySubmit}>
        <label>Date</label>
          <input
            type="date"
            id="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Consumption Goal (in oz)</label>
            <input
              type="integer"
              id="consumptionGoal"
              required
              value={consumptionGoal}
              onChange={(e) => setConsumptionGoal(e.target.value)}
            />
          <button className='form-submit-btn'>Submit</button>
        </form>
       </div>
        
     </div>
  )
}

export default NewDayForm