import React from "react";
import './Footer.css'

export default function Footer(props){
    return(
        <div className="footer-container">
            <div className="footer-bar footer-bordered-div">{props.country}</div>
            <div className="footer-bar">
                {props.tags.map((tagArray,index)=>{
                    return(
                        <div className="footer-tags-div" key={index}>
                            {tagArray.map((tags,index)=>{
                                return(
                                    <div className="footer-tag" key={index}>{tags}</div>
                                )
                            })}
                            </div>
                    )
                })}
                {/* <div className="footer-tags-div">{
                    props.footerTagOne.map((detail,index)=>{
                        return(
                            
                        )
                    })
                }</div>
                <div className="footer-tags-div"></div> */}
            </div>
        </div>
    )
}