import React, {useState} from 'react'
import "./ModalContainer.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { IconContext } from "react-icons";

function ModalContainer({handleCloseClick, day, onUpdateDay}) {

  const [drinkType, setDrinkType] = useState("")
  const [amount, setAmount] = useState("")
  

  function handleNewDrinkSubmit(e) {
    e.preventDefault();
    console.log("submit button clicked")

    fetch("/drinks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        daily_consumption_id: day.id,
        drink_type_id: drinkType,
        ounces: amount,
      }),
    })
    .then((res) => res.json())
    .then((data) => onUpdateDay(data))

  
    fetch(`/daily_consumptions/${day.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        ounces_consumed: parseInt(day.ounces_consumed) + parseInt(amount)
      })
    })
    .then((res) => res.json())
    .then(onUpdateDay)
  }

  return (
    <div className='popup'>
      <div className='popup-inner'>
        <div className='close-btn-div'>
          <IconContext.Provider className='close-btn' value={{ size: "25px", color: "#011325"}}>
              <AiFillCloseSquare onClick={handleCloseClick}/>
          </IconContext.Provider>
        </div>
       
        <h2>New Drink</h2>
        <form onSubmit={handleNewDrinkSubmit}>
          <label>Drink Type</label>
          <select 
            type="option"
            id="drinkType" 
            required
            value={drinkType}
            onChange={(e) => setDrinkType(e.target.value)}
          >
              <option value="default">Select Drink</option>
              <option value="1">Water</option>
              <option value="2">Sports Drink</option>
              <option value="3">Milk</option>
              <option value="4">Juice</option>
              <option value="5">Herbal Tea</option>
              <option value="6">Other Water-Based Drink</option>
          </select>
          <label>Amount (oz)</label>
          <input
            type="integer"
            id="amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className='new-drink-btn'>Add Drink</button>
        </form>
      </div>
      
    </div>
  )
}

export default ModalContainer