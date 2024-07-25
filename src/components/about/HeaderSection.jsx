import React from "react"

export default function HeaderSection(){
    return(
        <section className="intro">
            <img className="intro__image" src="./public/assets/avatar.jpg" alt="my profile avatar" />
            <h1 className="intro__title">Product developer/manager</h1>
            <p className="intro__description">a software developer/product manager, playing around in medical tech, full-stack dev and web3.</p>
            <div className="intro__action">
                <a href="mailto:flywww004@gmail.com" className='intro__button' aria-label='email button' target="_blank" rel="noopener noreferrer">Contact me</a>
                <a className="intro__link" href="https://www.cakeresume.com/flywww004" aria-label='cv link' target="_blank" rel="noopener noreferrer">Download CV</a>
            </div>
        </section>
        
    )
}

 