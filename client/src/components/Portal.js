import React, {useState, useEffect} from 'react'
import "./Portal.css";
import NewDayForm from './NewDayForm'
import MostRecentDay from './MostRecentDay'
import DaysList from './DaysList'
import water from '../water.mp4'

function Portal({user}) {

  const [userDailyConsumptions, setUserDailyConsumptions] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [cupHeight, setCupHeight] = useState("filler-0")
  const [toggle, setToggle] = useState("Select Month")
  const [search, setSearch] = useState("")
  const [drinks, setDrinks] = useState([])


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

  function handleAddDrinkClick() {
    console.log("add new drink has been clicked")
    setShowModal(!showModal)
  }

  function handleCloseClick() {
    setShowModal(!showModal)
  }

  function onUpdateDay(updatedDay) {
    const updatedDays = userDailyConsumptions.map((day) =>
      day.id === updatedDay.id ? updatedDay : day
    );
    setUserDailyConsumptions(updatedDays);
    // setCupHeight(cupHeight)
    handleCloseClick()
  }

  function handleDelete(id) {
    const deletedDays = userDailyConsumptions.filter((day) => {
      return day.id !== id
    })
    setUserDailyConsumptions(deletedDays);
  }

  function handleToggle(newToggle) {
    setToggle(newToggle)
  }
  
  const toggledDays = userDailyConsumptions.filter((day) => {
    if (toggle === "January") {
      return day.date.slice(5, 7) === "01"
    } else if (toggle === "February") {
      return day.date.slice(5, 7) === "02"
    } else if (toggle === "March") {
      return day.date.slice(5, 7) === "03"
    } else if (toggle === "April") {
      return day.date.slice(5, 7) === "04"
    } else if (toggle === "May") {
      return day.date.slice(5, 7) === "05"
    } else if (toggle === "June") {
      return day.date.slice(5, 7) === "06"
    } else if (toggle === "July") {
      return day.date.slice(5, 7) === "07"
    } else if (toggle === "August") {
      return day.date.slice(5, 7) === "08"
    } else if (toggle === "September") {
      return day.date.slice(5, 7) === "09"
    } else if (toggle === "October") {
      return day.date.slice(5, 7) === "10"
    } else if (toggle === "November") {
      return day.date.slice(5, 7) === "11"
    } else if (toggle === "December") {
      return day.date.slice(5, 7) === "12"
    } else {
      return true;
    }
  })

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  const searchAndToggledDays = toggledDays.filter((day) => {
    if (search === "") {
      return true;
    } else {
      return day.consumption_goal.toString() === search
    }
    
  })

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
                <MostRecentDay drinks={drinks} setDrinks={setDrinks} cupHeight={cupHeight} setCupHeight={setCupHeight} onUpdateDay={onUpdateDay} showModal={showModal} handleCloseClick={handleCloseClick} handleAddDrinkClick={handleAddDrinkClick} days={searchAndToggledDays}/>
              </div>
              <h2>All Days</h2>
                <div className="dropdown-div">
                    
                    <select
                      value={toggle}
                      onChange={(e) => handleToggle(e.target.value)}
                    >
                        <option>Filter By Month</option>
                        <option>January</option>
                        <option>February</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>
                    <input 
                      value={search}
                      onChange={(e) => handleSearch(e.target.value)}
                      type="text"
                      placeholder="Search by goal (in oz)..."
                    ></input>
                  </div>
              <div className='right-bottom'>
                <DaysList toggle={toggle} onToggle={handleToggle} handleDelete={handleDelete} days={searchAndToggledDays}/>
              </div>
        </div>
        
      </div>
     
      </div>
    </div>
    
  )
}

export default Portal