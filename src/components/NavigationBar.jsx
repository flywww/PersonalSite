import React from 'react';

function NavigationBar(){
    return(
        <header>
            <nav className='nav'>
                <ul className="nav__list">
                    <li className="nav__item"><a className='nav__link' href="#About">About</a></li>
                    <li className="nav__item"><a className='nav__link' href="#Projects">Projects</a></li>
                    <li className="nav__item"><a className='nav__link' href="#Blog">Blog</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavigationBar;

