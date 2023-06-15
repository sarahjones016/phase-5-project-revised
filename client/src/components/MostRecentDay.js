import React from 'react'
import "./MostRecentDay.css";
import DayFullCard from './DayFullCard';

function MostRecentDay({days, handleAddDrinkClick, handleCloseClick, showModal, onUpdateDay}) {

  // const recentDay = days[0]

  // console.log(days)
  // console.log(recentDay)

  return (
    <div>
      <div className='card-holder'>
      <h2>Most Recent Day</h2>
        {days.map((day, index) => {
            if (index < 1) {
              return <DayFullCard onUpdateDay={onUpdateDay} showModal={showModal} handleCloseClick={handleCloseClick} handleAddDrinkClick={handleAddDrinkClick} key={day.date} day={day}/>
            }
          })}
      </div>
    </div>
  )
}

export default MostRecentDay