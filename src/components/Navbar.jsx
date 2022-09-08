import React from "react";
import icon from "../assets/images/react-icon-small.png"

export default function Main() {
    return (
        <nav>
            <img src={icon} alt="react small icon" className="nav--icon" />  
            <p className="nav--icon_text">ReactFacts</p>  
            <p className="nav--title">React Course - Project 1</p>
        </nav>
    )
}