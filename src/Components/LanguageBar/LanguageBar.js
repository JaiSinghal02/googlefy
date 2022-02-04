import React from "react";
import './LanguageBar.css'


export default function LanguageBar(props){
    return(
        <div className="languagebar-container">
            <div className="languagebar-div">
                <div className="languagebar-tag">Available in: </div>
                <div className="languagebar-languages">
                    {props.languages.map((language,index)=>{
                        return(
                            <a href="#" key={index} className="languagebar-language-links">{language}</a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}