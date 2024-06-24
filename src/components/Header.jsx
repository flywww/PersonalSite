import React from "react"

export default function Header(){
    return(
        <div className="intro">
            <div className="avatar">
                <img className="avatar__image" src="./src/assets/avatar.jpg" alt="my profile avatar" />
            </div>
            <h1 className="intro__title">Product developer/manager</h1>
            <p className="intro__description">a full-stack developer/product manager, playing around in medical tech, full-stack deva and web3.</p>
            <div className="intro__action">
                <button className="intro_button">Hire Me</button>
                <a className="intro_link" href="http://">Download CV</a>
            </div>
        </div>
        
    )
}

 