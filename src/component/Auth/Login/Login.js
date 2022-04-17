import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate('/home')
    }
    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    const navigateRegister = e => {
        navigate('/register')
    }
    return (
        <>
            <div className="container">
                <div className="form-container">
                    <div className="title">
                        <h1>LOGIN</h1>
                    </div>
                    <div className="form-content">
                        <form onSubmit={handleLogin}>
                            <input ref={emailRef} type="email" name="email" placeholder='Email Adress' required />
                            <input ref={passwordRef} type="password" name="password" placeholder='Password' required />
                            <button className='btn'>LOGIN</button>
                        </form>
                        <p>Don't Have Any Accout? <span onClick={navigateRegister}>Please Register</span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;