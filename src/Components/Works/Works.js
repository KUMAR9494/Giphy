import React from 'react'
import "./Works.css";

import amazon from "../../img/amazon.png";


const Works = () => {
  return (
    <div classname ='work'>
       <div className='awesome'>
        <span>Works for All these</span>
        <span>Brands & Clints</span>
        <span>
         web Design
         <br/>

        </span>
         <span>
        
         </span>
        <button className="button s-button"> Hire me</button> 
       
         

        </div>

        {/* right*/}

        <div className='w-right'>
            <div className='w-mainCircle'>
            <div className='w-secCircle'>
              

            </div>

          

            <div className='w-secCircle'>
                <img src={amazon} alt =""/>

            </div>

           
            {/* back ground circle*/}
            <div className='w-backCircle blueCircle'></div>
            <div className='w-backCircle yellowCircle'></div>


        </div>
      
    </div>
    </div>
  )
}

export default Works
