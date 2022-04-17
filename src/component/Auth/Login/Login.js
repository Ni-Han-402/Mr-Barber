import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <>
            <div className="container">
            <div className="form-container">
                <div className="title">
                    <h1>LOGIN</h1>
                </div>
            <form className='form-content'>
                <input type="email" name="email" placeholder='Email Adress'/>
                <input type="password" name="password" placeholder='Password'/>
                <button className='btn'>LOGIN</button>
            </form>
            </div>
            </div>
        </>
    );
};

export default Login;