import React from 'react'

import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>

       <header>
            <nav className='flexSB'>
              <ul>
                <li><link to="/">Home</link></li>
                <li><link to="/Courses">All Courses</link></li>
                <li><link to="/about">About</link></li>
                <li><link to="/team">Team</link></li>
                <li><link to="/pricing">Pricing</link></li>
                <li><link to="/journal">Journal</link></li>
                <li><link to="/contact">Contact</link></li>
              </ul>
              <div className='start'>
                <div className='button'>GET CERTIFICATE

                </div>

              </div>

            </nav>
       </header>
    </div>
  )
}

export default Header
