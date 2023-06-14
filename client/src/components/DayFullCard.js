import React from 'react'
import "./DayFullCard.css";

function DayFullCard({day}) {
  return (
    <div>
      <div className='full-card'>
        <div className='date-line'>
          <p>{day.date}</p>
          <button>Add A New Drink</button>
        </div>
        <div className='primary-content'>
          <h1>{Math.round((day.ounces_consumed / day.consumption_goal)*100)}%</h1>
          <p>of daily goal completed</p>
        </div>
        <div className='secondary-content'>
          <p>Daily Goal: {day.consumption_goal}oz</p>
          <p>Currently Consumed: {day.ounces_consumed}oz</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default DayFullCard