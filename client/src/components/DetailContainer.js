import React, {useState, useEffect} from 'react'
import "./DetailContainer.css";
import { AiFillCloseSquare } from "react-icons/ai";
import { IconContext } from "react-icons";

function DetailContainer({closeDetails, drinks, day}) {

    const [waterPercentageHeight, setWaterPercentageHeight] = useState("")
    const [sportsDrinkPercentageHeight, setSportsDrinkPercentageHeight] = useState("")
    const [milkPercentageHeight, setMilkPercentageHeight] = useState("")
    const [juicePercentageHeight, setJuicePercentageHeight] = useState("")
    const [teaPercentageHeight, setTeaPercentageHeight] = useState("")
    const [otherPercentageHeight, setOtherPercentageHeight] = useState("")
    

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
      }, [])

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
      }, [])

      useEffect(() => {
        if (Math.round((milkOuncesSum / day.ounces_consumed)*100) === 0) {
            setMilkPercentageHeight("milk-filler-0")
        } else if (Math.round((milkOuncesSum / day.ounces_consumed)*100) >= 1 && Math.round((milkOuncesSum / day.ounces_consumed)*100) <= 10) {
            setMilkPercentageHeight("milk-filler-10")
        } else if (Math.round((milkOuncesSum / day.ounces_consumed)*100) >= 11 && Math.round((milkOuncesSum / day.ounces_consumed)*100) <= 20){
            setMilkPercentageHeight("milk-filler-20")
        } else if (Math.round((milkOuncesSum / day.ounces_consumed)*100) >= 21 && Math.round((milkOuncesSum / day.ounces_consumed)*100) <= 30){
            setMilkPercentageHeight("milk-filler-30")
        } else if (Math.round((milkOuncesSum / day.ounces_consumed)*100) >= 31 && Math.round((milkOuncesSum / day.ounces_consumed)*100) <= 40){
            setMilkPercentageHeight("milk-filler-40")
        } else if (Math.round((milkOuncesSum / day.ounces_consumed)*100) >= 41 && Math.round((milkOuncesSum / day.ounces_consumed)*100) <= 50){
            setMilkPercentageHeight("milk-filler-50")
        } else if (Math.round((milkOuncesSum / day.ounces_consumed)*100) >= 51 && Math.round((milkOuncesSum / day.ounces_consumed)*100) <= 60){
            setMilkPercentageHeight("milk-filler-60")
        } else if (Math.round((milkOuncesSum / day.ounces_consumed)*100) >= 61 && Math.round((milkOuncesSum / day.ounces_consumed)*100) <= 70){
            setMilkPercentageHeight("milk-filler-70")
        } else if (Math.round((milkOuncesSum / day.ounces_consumed)*100) >= 71 && Math.round((milkOuncesSum / day.ounces_consumed)*100) <= 84){
            setMilkPercentageHeight("milk-filler-80")
        } else if (Math.round((milkOuncesSum / day.ounces_consumed)*100) >= 85 && Math.round((milkOuncesSum / day.ounces_consumed)*100) <= 99){
            setMilkPercentageHeight("milk-filler-90")
        } else if (Math.round((milkOuncesSum / day.ounces_consumed)*100) >= 100){
            setMilkPercentageHeight("milk-filler-100")
        }     
      }, [])

      useEffect(() => {
        if (Math.round((juiceOuncesSum / day.ounces_consumed)*100) === 0) {
            setJuicePercentageHeight("juice-filler-0")
        } else if (Math.round((juiceOuncesSum / day.ounces_consumed)*100) >= 1 && Math.round((juiceOuncesSum / day.ounces_consumed)*100) <= 10) {
            setJuicePercentageHeight("juice-filler-10")
        } else if (Math.round((juiceOuncesSum / day.ounces_consumed)*100) >= 11 && Math.round((juiceOuncesSum / day.ounces_consumed)*100) <= 20){
            setJuicePercentageHeight("juice-filler-20")
        } else if (Math.round((juiceOuncesSum / day.ounces_consumed)*100) >= 21 && Math.round((juiceOuncesSum / day.ounces_consumed)*100) <= 30){
            setJuicePercentageHeight("juice-filler-30")
        } else if (Math.round((juiceOuncesSum / day.ounces_consumed)*100) >= 31 && Math.round((juiceOuncesSum / day.ounces_consumed)*100) <= 40){
            setJuicePercentageHeight("juice-filler-40")
        } else if (Math.round((juiceOuncesSum / day.ounces_consumed)*100) >= 41 && Math.round((juiceOuncesSum / day.ounces_consumed)*100) <= 50){
            setJuicePercentageHeight("juice-filler-50")
        } else if (Math.round((juiceOuncesSum / day.ounces_consumed)*100) >= 51 && Math.round((juiceOuncesSum / day.ounces_consumed)*100) <= 60){
            setJuicePercentageHeight("juice-filler-60")
        } else if (Math.round((juiceOuncesSum / day.ounces_consumed)*100) >= 61 && Math.round((juiceOuncesSum / day.ounces_consumed)*100) <= 70){
            setJuicePercentageHeight("juice-filler-70")
        } else if (Math.round((juiceOuncesSum / day.ounces_consumed)*100) >= 71 && Math.round((juiceOuncesSum / day.ounces_consumed)*100) <= 84){
            setJuicePercentageHeight("juice-filler-80")
        } else if (Math.round((juiceOuncesSum / day.ounces_consumed)*100) >= 85 && Math.round((juiceOuncesSum / day.ounces_consumed)*100) <= 99){
            setJuicePercentageHeight("juice-filler-90")
        } else if (Math.round((juiceOuncesSum / day.ounces_consumed)*100) >= 100){
            setJuicePercentageHeight("juice-filler-100")
        }     
      }, [])

      useEffect(() => {
        if (Math.round((teaOuncesSum / day.ounces_consumed)*100) === 0) {
            setTeaPercentageHeight("tea-filler-0")
        } else if (Math.round((teaOuncesSum / day.ounces_consumed)*100) >= 1 && Math.round((teaOuncesSum / day.ounces_consumed)*100) <= 10) {
            setTeaPercentageHeight("tea-filler-10")
        } else if (Math.round((teaOuncesSum / day.ounces_consumed)*100) >= 11 && Math.round((teaOuncesSum / day.ounces_consumed)*100) <= 20){
            setTeaPercentageHeight("tea-filler-20")
        } else if (Math.round((teaOuncesSum / day.ounces_consumed)*100) >= 21 && Math.round((teaOuncesSum / day.ounces_consumed)*100) <= 30){
            setTeaPercentageHeight("tea-filler-30")
        } else if (Math.round((teaOuncesSum / day.ounces_consumed)*100) >= 31 && Math.round((teaOuncesSum / day.ounces_consumed)*100) <= 40){
            setTeaPercentageHeight("tea-filler-40")
        } else if (Math.round((teaOuncesSum / day.ounces_consumed)*100) >= 41 && Math.round((teaOuncesSum / day.ounces_consumed)*100) <= 50){
            setTeaPercentageHeight("tea-filler-50")
        } else if (Math.round((teaOuncesSum / day.ounces_consumed)*100) >= 51 && Math.round((teaOuncesSum / day.ounces_consumed)*100) <= 60){
            setTeaPercentageHeight("tea-filler-60")
        } else if (Math.round((teaOuncesSum / day.ounces_consumed)*100) >= 61 && Math.round((teaOuncesSum / day.ounces_consumed)*100) <= 70){
            setTeaPercentageHeight("tea-filler-70")
        } else if (Math.round((teaOuncesSum / day.ounces_consumed)*100) >= 71 && Math.round((teaOuncesSum / day.ounces_consumed)*100) <= 84){
            setTeaPercentageHeight("tea-filler-80")
        } else if (Math.round((teaOuncesSum / day.ounces_consumed)*100) >= 85 && Math.round((teaOuncesSum / day.ounces_consumed)*100) <= 99){
            setTeaPercentageHeight("tea-filler-90")
        } else if (Math.round((teaOuncesSum / day.ounces_consumed)*100) >= 100){
            setTeaPercentageHeight("tea-filler-100")
        }     
      }, [])

      useEffect(() => {
        if (Math.round((otherOuncesSum / day.ounces_consumed)*100) === 0) {
            setOtherPercentageHeight("other-filler-0")
        } else if (Math.round((otherOuncesSum / day.ounces_consumed)*100) >= 1 && Math.round((otherOuncesSum / day.ounces_consumed)*100) <= 10) {
            setOtherPercentageHeight("other-filler-10")
        } else if (Math.round((otherOuncesSum / day.ounces_consumed)*100) >= 11 && Math.round((otherOuncesSum / day.ounces_consumed)*100) <= 20){
            setOtherPercentageHeight("other-filler-20")
        } else if (Math.round((otherOuncesSum / day.ounces_consumed)*100) >= 21 && Math.round((otherOuncesSum / day.ounces_consumed)*100) <= 30){
            setOtherPercentageHeight("other-filler-30")
        } else if (Math.round((otherOuncesSum / day.ounces_consumed)*100) >= 31 && Math.round((otherOuncesSum / day.ounces_consumed)*100) <= 40){
            setOtherPercentageHeight("other-filler-40")
        } else if (Math.round((otherOuncesSum / day.ounces_consumed)*100) >= 41 && Math.round((otherOuncesSum / day.ounces_consumed)*100) <= 50){
            setOtherPercentageHeight("other-filler-50")
        } else if (Math.round((otherOuncesSum / day.ounces_consumed)*100) >= 51 && Math.round((otherOuncesSum / day.ounces_consumed)*100) <= 60){
            setOtherPercentageHeight("other-filler-60")
        } else if (Math.round((otherOuncesSum / day.ounces_consumed)*100) >= 61 && Math.round((otherOuncesSum / day.ounces_consumed)*100) <= 70){
            setOtherPercentageHeight("other-filler-70")
        } else if (Math.round((otherOuncesSum / day.ounces_consumed)*100) >= 71 && Math.round((otherOuncesSum / day.ounces_consumed)*100) <= 84){
            setOtherPercentageHeight("other-filler-80")
        } else if (Math.round((otherOuncesSum / day.ounces_consumed)*100) >= 85 && Math.round((otherOuncesSum / day.ounces_consumed)*100) <= 99){
            setOtherPercentageHeight("other-filler-90")
        } else if (Math.round((otherOuncesSum / day.ounces_consumed)*100) >= 100){
            setOtherPercentageHeight("other-filler-100")
        }     
      }, [])


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

          <h1>Consumption Breakdown</h1>  
          <div className='content-holder'>
            <div className='percentage-bar'>
                <div className={waterPercentageHeight}></div>
                <div className={sportsDrinkPercentageHeight}></div>
                <div className={milkPercentageHeight}></div>
                <div className={juicePercentageHeight}></div>
                <div className={teaPercentageHeight}></div>
                <div className={otherPercentageHeight}></div>
            </div>    
            <div className='key'>
                <div className='drink-info'>
                    <div className='water-color'></div>
                    <p>Water: {Math.round((waterOuncesSum / day.ounces_consumed)*100)}%</p>
                </div>
                <div className='drink-info'>
                    <div className='sports-drink-color'></div>     
                    <p>Sports Drink: {Math.round((sportsDrinkOuncesSum / day.ounces_consumed)*100)}%</p>
                </div>
                <div className='drink-info'>
                    <div className='milk-color'></div>    
                    <p>Milk: {Math.round((milkOuncesSum / day.ounces_consumed)*100)}%</p>
                </div>
                <div className='drink-info'>
                    <div className='juice-color'></div>    
                    <p>Juice: {Math.round((juiceOuncesSum / day.ounces_consumed)*100)}%</p>
                </div>
                <div className='drink-info'>
                    <div className='tea-color'></div>    
                    <p>Herbal Tea: {Math.round((teaOuncesSum / day.ounces_consumed)*100)}%</p>
                </div>
                <div className='drink-info'>
                    <div className='other-color'></div>    
                    <p>Other: {Math.round((otherOuncesSum / day.ounces_consumed)*100)}%</p>   
                </div>
            </div>      
          </div>
        
        </div>
    </div>
  )
}

export default DetailContainer