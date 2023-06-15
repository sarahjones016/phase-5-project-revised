import React from 'react'
import "./DaysList.css";
import DayHalfCard from './DayHalfCard'

function DaysList({days}) {

  // console.log(days)

  return (
    <div>
      <div className='card-holder'>
        {days.map((day) => {
            return <DayHalfCard key={day.date} day={day}/>
          })}
      </div>
    </div>
  )
}

export default DaysList