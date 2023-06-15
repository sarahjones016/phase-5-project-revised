import React, {useState} from 'react'
import "./ModalContainer.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { IconContext } from "react-icons";

function ModalContainer({handleCloseClick}) {

  const [drinkType, setDrinkType] = useState("")
  const [amount, setAmount] = useState("")

  function handleNewDrinkSubmit(e) {
    e.preventDefault();
    console.log("submit button clicked")
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
              <option value="water">Water</option>
              <option value="sports-drink">Sports Drink</option>
              <option value="milk">Milk</option>
              <option value="juice">Juice</option>
              <option value="herbal-tea">Herbal Tea</option>
              <option value="other">Other Water-Based Drink</option>
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