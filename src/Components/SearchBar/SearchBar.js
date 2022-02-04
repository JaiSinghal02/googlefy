import React from "react";
import './SearchBar.css'

import logoIcon from '../../assets/images/logo-icon.png'
import microphoneIcon from '../../assets/images/microphone-icon.png'

import SearchButtonBar from "../SearchButtonBar/SearchButtonBar";

export default function SearchBar(){
    return(
        <div className="searchbar-container">
            <div className="searchbar-div">
                <div className="searchbar-searchicon-div">
                    <img src={logoIcon} alt="search"/>
                </div>
                <input className="searchbar-input" type="text"/>
                <div className="searchbar-microphoneicon-div">
                    <img src={microphoneIcon} alt="microphone"/>
                </div>
            </div>
            <SearchButtonBar/>
        </div>
    )
}