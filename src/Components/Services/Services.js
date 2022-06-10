import React from 'react'
import './Services.css'
import heart1 from '../../img/heart1.jpg'

import Card from '../Card/Card.js'
import Resume from '../Services/Resume.docx'


const Services = () => {
  return (
    <div className='services'>
      <div className='awesome'>
        <span>My Awesome</span>
        <span> services</span>
        <span>
        
        </span>
          <a href={Resume}download>
        <button className="button s-button">Dowload CV</button> 
        </a>
         <div className='blur s-blur1' style={{ background: "#ABF1FF94"}}></div>
      </div>
      <div className='cards'>
                <div style={{left:'14rem'}}>
                   <Card className="card"
                  img={heart1}
                   heading= {'Front End Developer'}
                   details= {"Html,Css, javaScript,Reactjs"}
                  />
                  </div>

                  

           
      </div>
       
    </div>
  )
}

export default Services;
