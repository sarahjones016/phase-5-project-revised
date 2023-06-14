import React from 'react'
import "./Portal.css";
import NewDayForm from './NewDayForm'
import MostRecentDay from './MostRecentDay'
import DaysList from './DaysList'

function Portal() {
  return (
    <div className='portal'>
      {/* <h1 className='h1'>Portal</h1> */}
      <div className='left-panel'>
        <NewDayForm />
      </div>
      <div className='right-panel'>
        <div className='right-top'>
           <MostRecentDay />
        </div>
        <div className='right-bottom'>
          <DaysList />
        </div>
      </div>
    </div>
  )
}

export default Portal