import React, {useState, useEffect} from 'react'
import "./DetailInfo.css";

function DetailInfo({drink}) {

const [drinkName, setDrinkName] = useState("")
// const [waterTotal, setWaterTotal] = useState("")

// console.log(drink.id)

useEffect(() => {
    if (drink.drink_type_id === 1) {
        setDrinkName("Water")
    } else if (drink.drink_type_id === 2) {
        setDrinkName("Sports Drink")
    }  else if (drink.drink_type_id === 3) {
        setDrinkName("Milk")
    }  else if (drink.drink_type_id === 4) {
        setDrinkName("Juice")
    }  else if (drink.drink_type_id === 5) {
        setDrinkName("Herbal Tea")
    }  else if (drink.drink_type_id === 6) {
        setDrinkName("Other Water-Based Drink")
    }
}, [])

  return (
    <div>
        <div className='detail-info'>
            <h3>{drinkName}</h3>
            <p>{drink.ounces} oz</p>
        </div>
    </div>
  )
}

export default DetailInfo