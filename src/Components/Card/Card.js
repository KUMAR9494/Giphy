import React from 'react'
import './Card.css'

const Card = ({img,heading,details}) => {
  return (
    <div className='Card'>
        <img src={img}alt=""/>
        <span>{heading}</span>
        <span>{details}</span>
        <button className=' c-button'>LEARN MORE</button>
      
    </div>
  )
}

export default Card;
