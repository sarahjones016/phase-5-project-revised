import React, {useState, useEffect} from 'react'
import "./DetailContainer.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { IconContext } from "react-icons";

function DetailContainer({closeDetails, drinks, day}) {

    const [waterPercentageHeight, setWaterPercentageHeight] = useState("")
    const [sportsDrinkPercentageHeight, setSportsDrinkPercentageHeight] = useState("")

    useEffect(() => {
        if (Math.round((waterOuncesSum / day.ounces_consumed)*100) === 0) {
            setWaterPercentageHeight("water-filler-0")
        } else if (Math.round((waterOuncesSum / day.ounces_consumed)*100) >= 1 && Math.round((waterOuncesSum / day.ounces_consumed)*100) <= 10) {
            setWaterPercentageHeight("water-filler-10")
        } else if (Math.round((waterOuncesSum / day.ounces_consumed)*100) >= 11 && Math.round((waterOuncesSum / day.ounces_consumed)*100) <= 20){
            setWaterPercentageHeight("water-filler-20")
        } else if (Math.round((waterOuncesSum / day.ounces_consumed)*100) >= 21 && Math.round((waterOuncesSum / day.ounces_consumed)*100) <= 30){
            setWaterPercentageHeight("water-filler-30")
        } else if (Math.round((waterOuncesSum / day.ounces_consumed)*100) >= 31 && Math.round((waterOuncesSum / day.ounces_consumed)*100) <= 40){
            setWaterPercentageHeight("water-filler-40")
        } else if (Math.round((waterOuncesSum / day.ounces_consumed)*100) >= 41 && Math.round((waterOuncesSum / day.ounces_consumed)*100) <= 50){
            setWaterPercentageHeight("water-filler-50")
        } else if (Math.round((waterOuncesSum / day.ounces_consumed)*100) >= 51 && Math.round((waterOuncesSum / day.ounces_consumed)*100) <= 60){
            setWaterPercentageHeight("water-filler-60")
        } else if (Math.round((waterOuncesSum / day.ounces_consumed)*100) >= 61 && Math.round((waterOuncesSum / day.ounces_consumed)*100) <= 70){
            setWaterPercentageHeight("water-filler-70")
        } else if (Math.round((waterOuncesSum / day.ounces_consumed)*100) >= 71 && Math.round((waterOuncesSum / day.ounces_consumed)*100) <= 84){
            setWaterPercentageHeight("water-filler-80")
        } else if (Math.round((waterOuncesSum / day.ounces_consumed)*100) >= 85 && Math.round((waterOuncesSum / day.ounces_consumed)*100) <= 99){
            setWaterPercentageHeight("water-filler-90")
        } else if (Math.round((waterOuncesSum / day.ounces_consumed)*100) >= 100){
            setWaterPercentageHeight("water-filler-100")
        }     
      }, [day])

      useEffect(() => {
        if (Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) === 0) {
            setSportsDrinkPercentageHeight("sports-drink-filler-0")
        } else if (Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) >= 1 && Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) <= 10) {
            setSportsDrinkPercentageHeight("sports-drink-filler-10")
        } else if (Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) >= 11 && Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) <= 20){
            setSportsDrinkPercentageHeight("sports-drink-filler-20")
        } else if (Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) >= 21 && Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) <= 30){
            setSportsDrinkPercentageHeight("sports-drink-filler-30")
        } else if (Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) >= 31 && Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) <= 40){
            setSportsDrinkPercentageHeight("sports-drink-filler-40")
        } else if (Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) >= 41 && Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) <= 50){
            setSportsDrinkPercentageHeight("sports-drink-filler-50")
        } else if (Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) >= 51 && Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) <= 60){
            setWaterPercentageHeight("sports-drink-filler-60")
        } else if (Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) >= 61 && Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) <= 70){
            setSportsDrinkPercentageHeight("sports-drink-filler-70")
        } else if (Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) >= 71 && Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) <= 84){
            setSportsDrinkPercentageHeight("sports-drink-filler-80")
        } else if (Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) >= 85 && Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) <= 99){
            setSportsDrinkPercentageHeight("sports-drink-filler-90")
        } else if (Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100) >= 100){
            setSportsDrinkPercentageHeight("sports-drink-filler-100")
        }     
      }, [day])

    let waters = drinks.map(drink => {
        if (drink.drink_type_id === 1) {
            return drink.ounces
        } else {
            return 0
        }
    })
    // console.log(waters)
    
    let waterOuncesSum = waters.reduce(function(a, b){
        return a + b;
      });
    // console.log(waterOuncesSum)

    const sportsDrinks = drinks.map(drink => {
        if (drink.drink_type_id === 2) {
            return drink.ounces
        } else {
            return 0
        }
    })
    // console.log(sportsDrinks)
    
    let sportsDrinkOuncesSum = sportsDrinks.reduce(function(a, b){
        return a + b;
      });
    // console.log(sportsDrinkOuncesSum)

    const milks = drinks.map(drink => {
        if (drink.drink_type_id === 3) {
            return drink.ounces
        } else {
            return 0
        }
    })
    // console.log(milks)
    
    let milkOuncesSum = milks.reduce(function(a, b){
        return a + b;
      });
    // console.log(milkOuncesSum)

    const juices = drinks.map(drink => {
        if (drink.drink_type_id === 4) {
            return drink.ounces
        } else {
            return 0
        }
    })
    // console.log(juices)
    
    let juiceOuncesSum = juices.reduce(function(a, b){
        return a + b;
      });
    // console.log(juiceOuncesSum)

    const teas = drinks.map(drink => {
        if (drink.drink_type_id === 5) {
            return drink.ounces
        } else {
            return 0
        }
    })
    // console.log(teas)
    
    let teaOuncesSum = teas.reduce(function(a, b){
        return a + b;
      });
    // console.log(teaOuncesSum)

    const others = drinks.map(drink => {
        if (drink.drink_type_id === 6) {
            return drink.ounces
        } else {
            return 0
        }
    })
    // console.log(others)
    
    let otherOuncesSum = others.reduce(function(a, b){
        return a + b;
      });
    // console.log(otherOuncesSum)

  return (
    <div className='detail-container'>
        <div className='detail-inner'>
            <div className='close-btn-div'>
            <IconContext.Provider className='close-btn' value={{ size: "25px", color: "#011325"}}>
                <AiFillCloseSquare onClick={closeDetails}/>
            </IconContext.Provider>
            </div>

          <h1>Breakdown of Drinks</h1>  
          <div className='content-holder'>
            <div className='percentage-bar'>
                <div className={waterPercentageHeight}>
                    <p>Water: {Math.round((waterOuncesSum / day.ounces_consumed)*100)}%</p>
                </div>
                <div className={sportsDrinkPercentageHeight}>
                    <p>Sports Drink: {Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100)}%</p>
                </div>
                <div>
                    <p>Milk: {Math.round((milkOuncesSum / day.ounces_consumed)*100)}%</p>
                </div>
                <div>
                    <p>Juice: {Math.round((juiceOuncesSum / day.ounces_consumed)*100)}%</p>
                </div>
                <div>
                    <p>Herbal Tea: {Math.round((teaOuncesSum / day.ounces_consumed)*100)}%</p>
                </div>
                <div>
                    <p>Other Water-Based Drinks: {Math.round((otherOuncesSum / day.ounces_consumed)*100)}%</p>
                </div>
            </div>
            {/* <div className='details'>
                <p>Water: {Math.round((waterOuncesSum / day.ounces_consumed)*100)}%</p>
                <p>Sports Drink: {Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100)}%</p>
                <p>Milk: {Math.round((milkOuncesSum / day.ounces_consumed)*100)}%</p>
                <p>Juice: {Math.round((juiceOuncesSum / day.ounces_consumed)*100)}%</p>
                <p>Herbal Tea: {Math.round((teaOuncesSum / day.ounces_consumed)*100)}%</p>
                <p>Other Water-Based Drinks: {Math.round((otherOuncesSum / day.ounces_consumed)*100)}%</p>
            </div> */}
            
          
          </div>
        
        </div>
    </div>
  )
}

export default DetailContainer