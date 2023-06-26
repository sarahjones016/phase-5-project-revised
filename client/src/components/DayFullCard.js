import React, {useEffect} from 'react'
import "./DayFullCard.css";
import ModalContainer from './ModalContainer';
import waterInCup from '../water-in-cup.mp4'

function DayFullCard({day, handleAddDrinkClick, handleCloseClick, showModal, onUpdateDay, cupHeight, setCupHeight}) {

  useEffect(() => {

    if (Math.round((day.ounces_consumed / day.consumption_goal)*100) === 0) {
      setCupHeight("filler-0")
    } else if (Math.round((day.ounces_consumed / day.consumption_goal)*100) >= 1 && Math.round((day.ounces_consumed / day.consumption_goal)*100) <= 10) {
      setCupHeight("filler-10")
    } else if (Math.round((day.ounces_consumed / day.consumption_goal)*100) >= 11 && Math.round((day.ounces_consumed / day.consumption_goal)*100) <= 20){
      setCupHeight("filler-20")
    } else if (Math.round((day.ounces_consumed / day.consumption_goal)*100) >= 21 && Math.round((day.ounces_consumed / day.consumption_goal)*100) <= 30){
      setCupHeight("filler-30")
    } else if (Math.round((day.ounces_consumed / day.consumption_goal)*100) >= 31 && Math.round((day.ounces_consumed / day.consumption_goal)*100) <= 40){
      setCupHeight("filler-40")
    } else if (Math.round((day.ounces_consumed / day.consumption_goal)*100) >= 41 && Math.round((day.ounces_consumed / day.consumption_goal)*100) <= 50){
      setCupHeight("filler-50")
    } else if (Math.round((day.ounces_consumed / day.consumption_goal)*100) >= 51 && Math.round((day.ounces_consumed / day.consumption_goal)*100) <= 60){
      setCupHeight("filler-60")
    } else if (Math.round((day.ounces_consumed / day.consumption_goal)*100) >= 61 && Math.round((day.ounces_consumed / day.consumption_goal)*100) <= 70){
      setCupHeight("filler-70")
    } else if (Math.round((day.ounces_consumed / day.consumption_goal)*100) >= 71 && Math.round((day.ounces_consumed / day.consumption_goal)*100) <= 84){
      setCupHeight("filler-80")
    } else if (Math.round((day.ounces_consumed / day.consumption_goal)*100) >= 85 && Math.round((day.ounces_consumed / day.consumption_goal)*100) <= 99){
      setCupHeight("filler-90")
    } else if (Math.round((day.ounces_consumed / day.consumption_goal)*100) >= 100){
      setCupHeight("filler-100")
    }     
  }, [day])
  
  return (
    <div className='height-div'>
      <div className='full-card'>
        <div className='date-line'>
          <p>{day.date}</p>
          <button className='add-new-drink-btn' onClick={handleAddDrinkClick}>Add A New Drink</button>
        </div>
        <div className='primary-content-div'>
          <div className='primary-content'>
          <div className='cup-div'>
            <div className='cup'>
              {/* <video src={waterInCup} className={cupHeight} autoPlay loop muted /> */}
              <div className={cupHeight}></div>
            </div>
          </div>
          <div className='content-div'>
            <h1>{Math.round((day.ounces_consumed / day.consumption_goal)*100)}%</h1>
            <p>of daily goal completed</p>
          </div>
        </div>
        </div>
        
        <div className='secondary-content'>
          <p>Daily Goal: {day.consumption_goal}oz</p>
          <p>Currently Consumed: {day.ounces_consumed}oz</p>
        </div>
      </div>
      {showModal ? <ModalContainer onUpdateDay={onUpdateDay} day={day} handleCloseClick={handleCloseClick}/> : null}
    </div>
  )
}

export default DayFullCard