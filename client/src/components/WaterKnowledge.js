import React from 'react'
import "./WaterKnowledge.css";
import water from '../water.mp4'

function WaterKnowledge() {
  return (
    <div className='container'>
      <div className='overlay'></div>
      <video src={water} autoPlay loop muted />
      <div className='full-panel'>
      <h1 className='h1'>Water FAQ</h1>
      <div className='general-knowledge'>
        <h2>How Much Water Should I Be Drinking?</h2>
        <p>The U.S. National Academies of Sciences, Engineering, and Medicine determined that an adequate daily fluid intake is:</p>
        <ul>
          <li>About 15.5 cups (124 oz) of fluids a day for men</li>
          <li>About 11.5 cups (92 liters) of fluids a day for women</li>
        </ul>
        <p>These recommendations cover fluids from water, other beverages and food. About 20% of daily fluid intake usually comes from food and the rest from drinks.</p>
      </div>
      <div className='factors'>
        <h2>Factors That Impact Water Consumption</h2>
        <p>You've probably heard the advice to drink eight glasses of water a day (64 oz). That's easy to remember, and it's a reasonable goal.</p>
        <p>Most healthy people can stay hydrated by drinking water and other fluids whenever they feel thirsty. For some people, fewer than eight glasses a day might be enough. But other people might need more.</p>
        <p>You might need to modify your total fluid intake based on several factors:</p>
        <ol>
          <li><b>Exercise:</b> If you do any activity that makes you sweat, you need to drink extra water to cover the fluid loss. It's important to drink water before, during and after a workout.</li>
          <li><b>Environment:</b> Hot or humid weather can make you sweat and requires additional fluid. Dehydration also can occur at high altitudes.</li>
          <li><b>Overall health:</b> Your body loses fluids when you have a fever, vomiting or diarrhea. Drink more water or follow a doctor's recommendation to drink oral rehydration solutions. Other conditions that might require increased fluid intake include bladder infections and urinary tract stones.</li>
          <li><b>Pregnancy and breast-feeding:</b> If you are pregnant or breast-feeding, you may need additional fluids to stay hydrated.</li>
        </ol>
      </div>
      <p className='citation'><em>Resource: The Mayo Clinic</em></p>
    </div>  
    </div>
  )
}

export default WaterKnowledge