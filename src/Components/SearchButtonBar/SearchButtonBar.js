import React from "react";
import './SearchButtonBar.css'

import Button from "./Button/Button";

export default function SearchButtonBar(){
    return(
        <div className="searchbtnbar-container">
            <div className="searchbtnbar-div">
                <div className="searchbtnbar-btn1">
                    <Button name="Googlefy"/>
                </div>
                <div className="searchbtnbar-btn2">
                    <Button name="Feels Good Man"/>
                </div>
            </div>
        </div>
    )
}