import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                <div className="logo">
                            <img src={logo} alt="barber-logo" />
                        </div>
                    <div className="navigation">
                        <div className="menu">
                            <Link className='menu-item' to={'/home'}>HOME</Link>
                            <Link className='menu-item' to={'/packages'}>PACKAGES</Link>
                            <Link className='menu-item' to={'/blog'}>BLOGS</Link>
                            <Link className='menu-item' to={'/about'}>ABOUT</Link>
                        </div>
                      
                        <div className="login-container">
                            <Link to={'/login'}><button className='btn login-btn'>LOGIN</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;