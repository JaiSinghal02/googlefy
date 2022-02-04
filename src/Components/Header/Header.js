import React from "react";
import './Header.css'
import options from '../../assets/images/options.png'

export default function Header(){
    return(
        <div className="header-container">
            <div className="header-div">
                <div className="header-links-div">
                    <div className="header-link">Email</div>
                    <div className="header-link">Images</div>
                </div>
                <div className="header-app-div">
                    <img src={options} alt="options"/>
                </div>
                <div className="header-button-div">
                    <div className="signin-button-div">
                        Sign in
                    </div>
                </div>
            </div>
        </div>
    )
}