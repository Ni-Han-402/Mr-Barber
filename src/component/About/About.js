import React from 'react';
import aboutImage from '../../images/nihan.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="about-container">
                    <div className="about-img">
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className="about-content">
                        <h2>Nihan Zayn</h2>
                        <p>Hi, I'm A Professional Barber. If You Want To Cut Your Hair, Style Your Beard And Wash Your Hair With Shampoo Then Contact With Me.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;