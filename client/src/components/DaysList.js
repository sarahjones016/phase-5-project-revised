import React from 'react'
import "./DaysList.css";
import DayHalfCard from './DayHalfCard'

function DaysList({days, handleDelete}) {

  return (
    <div>
      <div className='card-holder'>
        {days.map((day) => {
            return <DayHalfCard key={day.date} day={day} handleDelete={handleDelete}/>
          })}
      </div>
    </div>
  )
}

export default DaysList