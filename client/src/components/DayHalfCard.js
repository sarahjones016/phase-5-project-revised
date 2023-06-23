import React from 'react'
import "./DayHalfCard.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { IconContext } from "react-icons";

function DayHalfCard({day, handleDelete}) {

  function handleDeleteClick() {
    console.log("day has been deleted")

    fetch(`/daily_consumptions/${day.id}`, { 
      method: "DELETE" 
    })
      // .then(res => res.json())
      // .then((data) => console.log(data))
      .then((data) => handleDelete(day.id))
  }

  return (
    <div className='half-card'>
        <p className='detail'>{day.date}</p>
        <p className='detail'>·</p>
        <p className='detail'>Water Consumed: {day.ounces_consumed}oz</p>
        <p className='detail'>·</p>
        <p className='detail'>Daily Goal: {day.consumption_goal}oz</p>
        <div className='detail'>
          <IconContext.Provider value={{color: "#1B95E0"}}>
              <AiFillCloseSquare onClick={handleDeleteClick}/>
        </IconContext.Provider>
        </div>
        
        {/* <p className='detail'>Percentage of Goal Achieved: {Math.round((day.ounces_consumed / day.consumption_goal)*100)}%</p> */}
    </div>
  )
}

export default DayHalfCard  