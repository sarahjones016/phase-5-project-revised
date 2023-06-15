import React, {useState, useEffect} from 'react'
import "./Portal.css";
import NewDayForm from './NewDayForm'
import MostRecentDay from './MostRecentDay'
import DaysList from './DaysList'
import water from '../water.mp4'

function Portal({user}) {

  const [userDailyConsumptions, setUserDailyConsumptions] = useState([])

  useEffect(() => {
    fetch(`/daily_consumptions/user/${user.id}`)
    .then(r => r.json())
    .then(data => {
      setUserDailyConsumptions(data)
      // console.log(data)
      })
  }, [])

  function handleNewDayFormSubmit(newDay) {
    setUserDailyConsumptions([newDay, ...userDailyConsumptions])
  }

  return (
    <div className='portal'>
      <div className='overlay'></div>
      <video src={water} autoPlay loop muted />
      <div className='main'>
        <div className='panels'> 
            <div className='left-panel'>
              <NewDayForm onFormSubmit={handleNewDayFormSubmit} user={user}/>
            </div>
            <div className='right-panel'>
              <div className='right-top'>
                <MostRecentDay days={userDailyConsumptions}/>
              </div>
              <h2>All Days</h2>
              <div className='right-bottom'>
                <DaysList days={userDailyConsumptions}/>
              </div>
        </div>
      </div>
     
      </div>
    </div>
    
  )
}

export default Portal