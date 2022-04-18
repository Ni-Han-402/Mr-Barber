import React from 'react';
import bannerBg from '../../images/banner.jpg'
import bannerImage from '../../images/barber.png'
import './Banner.css'

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="banner-bg">
                    <img src={bannerBg} alt="" />
                </div>
                <div className="container">
                    <div className="banner-content">
                        <div className="content">
                            <h1><span>Nihan</span> Zayn</h1>
                            <p>Hi, I'm a Professional Barber. If You Want To Cut Your Hair, Style Your Beard and Wash Your Hair With Shampoo Then Contact With Me.</p>
                            <div className="contact-btn">
                                <button className='btn'>BOOK AN APPOINTMENT</button>
                            </div>
                        </div>
                        <div className="banner-img">
                            <img src={bannerImage} alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;