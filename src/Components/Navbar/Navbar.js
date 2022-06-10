import React from "react";
import './Navbar.css';


function Navbar () {
    return (
        <div className="n-wrapper">
        <div className="n-left">
            
          <div className="n-name">
                Kumar <br/>sai
                </div>
          <span className="n-name">toggle</span>
      
          <div className="n-right">
              <div className="n-list">
                   <ul>
                       <li>Home</li>
                       <li>Services</li>
                       <li>Experience</li>
                       <li>Portfolio</li>
                       <li>Testimonials</li>
                   
                   
                   <button className="button">Contact Us</button>
                    </ul>

              </div>

          </div>

        </div>

     
  </div>
    )
}
export default Navbar;