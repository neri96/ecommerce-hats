import React from 'react';

import NavFooter from './NavFooter';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='upper-footer'>
                <NavFooter />
                <div className='footer-social'>
                    <div className='footer-follow'>
                        <h3>Follow</h3>
                    </div>
                    <div className='footer-links'>
                        <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer">
                            <img src={require('../../../images/icons/facebook.svg').default} alt='social-icon' />
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer">
                            <img src={require('../../../images/icons/instagram.svg').default} alt='social-icon' />
                        </a>
                        <a href='https://www.twitter.com/' target='_blank' rel="noopener noreferrer">
                            <img src={require('../../../images/icons/twitter.svg').default} alt='social-icon' />
                        </a>
                    </div>
                </div>
                <div className='footer-contacts'>
                    <div className='footer-contacts-title'>
                        <h3>Contacts</h3>
                    </div>
                    <div className='footer-contacts-icons'>
                        <div className='contact'>
                            <img src={require('../../../images/icons/mail.svg').default} alt='cont-icon' />
                            <span>hatstore@mail.com</span>
                        </div>
                        <div className='contact'>
                            <img src={require('../../../images/icons/phone.svg').default} alt='cont-icon' />
                            <span>+12168492867</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer