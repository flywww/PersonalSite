import React from 'react';
import { Link } from "react-router-dom";


function NavigationBar(){
    return(
        <header>
            <nav className='nav'>
                <div className='contact'>
                    <button className='icon-button contact__button' aria-label='email button'>
                        <img src="../src/assets/footer/mail.png" alt="send me a email" />
                    </button>
                    <button className='icon-button contact__button' aria-label='linkedin button'>
                        <img src="../src/assets/footer/linkedin-logo.png" alt="linked in url" />
                    </button>
                    <button className='icon-button contact__button' aria-label='github button'>
                        <img src="../src/assets/footer/github-logo.png" alt="github url" />
                    </button>
                </div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link className='nav__link' to="/">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link className='nav__link' to="/projects">Projects</Link>
                        </li>
                        <li className="nav__item">
                            <Link className='nav__link' to="/blog">Blog</Link>
                        </li>
                    </ul>
            </nav>
        </header>
    )
}

export default NavigationBar;

