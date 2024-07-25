import React from 'react';

export default function Footer() {
    return (
        <footer>
            <h2>Let’s build a great product for the world!</h2>
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
            </div>
        </footer>
    );
}

