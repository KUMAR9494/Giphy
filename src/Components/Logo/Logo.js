import React from "react";
import './Logo.css'

const Logo = ({img , txt1,txt2})=> {
    return (
        <div className="logo">
            <img src={img} alt=""/>
            <span> {txt1} <br/> {txt2}</span>
        </div>
    )
}


export default Logo;