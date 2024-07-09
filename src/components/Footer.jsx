import React from 'react';

export default function Footer() {
    return (
        <footer>
            <h2>Let’s build a great product for the world!</h2>
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
        </footer>
    );
}

