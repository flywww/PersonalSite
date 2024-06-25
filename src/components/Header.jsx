import React from "react"

export default function Header(){
    return(
        <div className="intro">
            <img className="intro__image" src="./src/assets/avatar.jpg" alt="my profile avatar" />
            <h1 className="intro__title">Product developer/manager</h1>
            <p className="intro__description">a full-stack developer/product manager, playing around in medical tech, full-stack deva and web3.</p>
            <div className="intro__action">
                <button className="intro__button">Hire Me</button>
                <a className="intro__link" href="http://">Download CV</a>
            </div>
        </div>
        
    )
}

 