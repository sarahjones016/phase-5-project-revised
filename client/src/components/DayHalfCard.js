import React from 'react'
import "./DayHalfCard.css";

function DayHalfCard({day}) {

  return (
    <div className='half-card'>
        <p className='detail'>{day.date}</p>
        <p className='detail'>·</p>
        <p className='detail'>Water Consumed: {day.ounces_consumed}oz</p>
        <p className='detail'>·</p>
        <p className='detail'>Daily Goal: {day.consumption_goal}oz</p>
        {/* <p className='detail'>Percentage of Goal Achieved: {Math.round((day.ounces_consumed / day.consumption_goal)*100)}%</p> */}
    </div>
  )
}

export default DayHalfCard  