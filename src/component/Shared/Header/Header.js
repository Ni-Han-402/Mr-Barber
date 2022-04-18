import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () =>{
        signOut(auth);
    }
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
                            {
                                user ?
                                <button onClick={handleLogout} className='btn logout-btn'>LOGOUT</button>
                                :
                                <Link to={'/login'}><button className='btn login-btn'>LOGIN</button></Link>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;