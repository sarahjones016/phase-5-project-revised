import React from 'react'
import "./DetailContainer.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { IconContext } from "react-icons";
import DetailInfo from './DetailInfo';


function DetailContainer({closeDetails, drinks, day}) {

    console.log(drinks)
    console.log(day)

  return (
    <div className='detail-container'>
        <div className='detail-inner'>
            <div className='close-btn-div'>
            <IconContext.Provider className='close-btn' value={{ size: "25px", color: "#011325"}}>
                <AiFillCloseSquare onClick={closeDetails}/>
            </IconContext.Provider>
            </div>

          <h1>Breakdown of Drinks</h1>  
          {/* <h2>{day.consumption_goal}</h2> */}
          
            {drinks.map((drink) =>  {
                return <DetailInfo key={drink.id} drink={drink} />  
            })}
        </div>
    </div>
  )
}

export default DetailContainer