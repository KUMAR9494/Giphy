import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


const Navbar=()=>{
    return(

           
            <div>
                  <nav class="navbar navbar-expand-lg navbar-light bg-light bg-light py-3 shadow-sm">
     <div class="container">                   
  <a class="navbar-brand fw-bold fs-4" href="#">ELITE TECHNOLOGY</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">Courses</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contacts</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">hai</a>
        </div>
      </li>
    
    </ul>
        <div className="buttons">
          <a href=""className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1" ></i>Login</a>
            <a href=""className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1" ></i>Registration</a>
             
        </div>
  </div>
  </div>    
</nav>
            </div>
    )
}

export default Navbar;