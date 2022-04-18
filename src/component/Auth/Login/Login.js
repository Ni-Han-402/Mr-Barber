import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        sendPasswordResetEmail, 
        sending
    ] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>
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
    const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
          alert('Sent email');
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
                        {errorElement}
                        <p>Don't Have Any Accout? <span onClick={navigateRegister}>Please Register</span></p>
                        <p>Forget Password? <span onClick={resetPassword}>Reset Password</span></p>
                        <Social></Social>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;