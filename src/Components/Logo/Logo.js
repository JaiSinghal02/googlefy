import React from "react";
import './Logo.css'
import logo from '../../assets/images/logo.png'


export default function Logo(){
    return(
        <div className="logo-container">
            <div className="logo-div">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    )
}