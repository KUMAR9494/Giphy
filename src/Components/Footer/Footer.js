import React from 'react'
import './Footer.css';
/* <Insta color='white 'size='3rem'/>
 <Insta color='white 'size='3rem'/>
 <Insta color='white 'size='3rem'/> */

import Wave from '../../img/Wave.jpeg'

const Footer = () => {
  return (
    <div className='footer'>
            <img src={Wave} alt="" style={{width:'100%'}}/>
            <div className='f-content'>
                <span>saik13330@gmail.com</span>
                <div className='f-icons'>
                 

                </div>
            </div>
    </div>
  )
}

export default Footer
