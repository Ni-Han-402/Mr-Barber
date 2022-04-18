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
                        <p>Hello, I'm Nihan Zayn. I'm a student of Programming hero. I've learned a lot from the Programming Hero. Likewise, I've been able to good at react. I also experienced at UI/UX. I want to work as a Front End Developer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;