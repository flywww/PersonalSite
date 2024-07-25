import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';


function NavigationBar(){

    const [menuOpen, setMenuOpen] = useState(false);

    const menuButtonClicked = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <header>
            <nav className='nav'>
                <div className='contact'>
                    <a href="mailto:flywww004@gmail.com" className='icon-button contact__button' aria-label='email button' target="_blank" rel="noopener noreferrer">
                        <img src="../public/assets/footer/mail.png" alt="send me a email" />
                    </a>
                    <a href="https://www.linkedin.com/in/stanley004/" className='icon-button contact__button' aria-label='linkedin button' target="_blank" rel="noopener noreferrer">
                        <img src="../public/assets/footer/linkedin-logo.png" alt="linked in url" />
                    </a>
                    <a href="https://github.com/flywww" className='icon-button contact__button' aria-label='github button' target="_blank" rel="noopener noreferrer">
                        <img src="../public/assets/footer/github-logo.png" alt="github url" />
                    </a>
                    <button onClick={menuButtonClicked} className='icon-button menu-button'>
                        <img src="../public/assets/footer/menu.png" alt="menu button" />
                    </button>
                </div>
                <div className={menuOpen?"menu__show":"menu__hide"}>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link className='nav__link' onClick={menuButtonClicked} to="/">About</Link>
                        </li>
                        <li className="nav__item">
                            <Link className='nav__link' onClick={menuButtonClicked} to="/projects">Projects</Link>
                        </li>
                        <li className="nav__item">
                            <Link className='nav__link' onClick={menuButtonClicked} to="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavigationBar;

