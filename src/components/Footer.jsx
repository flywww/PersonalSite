import React from 'react';
import mailIconUrl from '../assets/footer/mail.png';
import linkedinIconUrl from '../assets/footer/linkedin-logo.png';
import githubIconUrl from '../assets/footer/github-logo.png';

export default function Footer() {
    return (
        <footer>
            <h2>Let’s build a great product for the world!</h2>
            <div className='contact'>
                <a href="mailto:flywww004@gmail.com" className='icon-button contact__button' aria-label='email button' target="_blank" rel="noopener noreferrer">
                    <img src={mailIconUrl} alt="send me a email" />
                </a>
                <a href="https://www.linkedin.com/in/stanley004/" className='icon-button contact__button' aria-label='linkedin button' target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIconUrl} alt="linked in url" />
                </a>
                <a href="https://github.com/flywww" className='icon-button contact__button' aria-label='github button' target="_blank" rel="noopener noreferrer">
                    <img src={githubIconUrl} alt="github url" />
                </a>
            </div>
        </footer>
    );
}

