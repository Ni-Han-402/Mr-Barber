import React from 'react';
import footerLogo from '../../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <img src={footerLogo} alt="" />
                        </div>
                        <div className="footer-contact">
                            <h3>CONTACT</h3>
                            <ul className='footer-items'>
                                <li className='footer-list'>(+880)1888295295</li>
                                <li className='footer-list'>contact.mr-barber@gmail.com</li>
                                <li className='footer-list'>1No. Panirkol, Halishahor - Chottogram.</li>
                            </ul>
                        </div>
                        <div className="schedule">
                        <h3>WORKING HOURS</h3>
                            <ul className='footer-items'>
                                <li className='footer-list'>Mon - Fri: 8am - 6pm</li>
                                <li className='footer-list'>Saturday: 9am  5pm</li>
                                <li className='footer-list'>Sunday: 9am - 4pm</li>
                            </ul>
                        </div>
                        <div className="newsletter">
                        <h3>NEWSLETTER</h3>
                        <input type="email" name="" placeholder='Your Email' />
                        <button className='btn subscribe-btn'>SUBSCRIBE</button>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>copyright@mr.barber-2022</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;