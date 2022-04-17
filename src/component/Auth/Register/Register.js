import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';

const Register = () => {
    const nameRef = useRef("")
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleRegister = e =>{
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value
    

        createUserWithEmailAndPassword(email, password);
    }

    const navigateRegister = e =>{
        navigate('/login')
    }
    return (
        <>
            <div className="container">
                <div className="form-container">
                    <div className="title">
                        <h1>REGISTER</h1>
                    </div>
                    <div className="form-content">
                        <form  onSubmit={handleRegister}>
                            <input type="text" name="name" placeholder='Your Name'/>
                            <input ref={emailRef} type="email" name="email" placeholder='Email Adress' required />
                            <input ref={passwordRef} type="password" name="password" placeholder='Password' required />
                            <button className='btn'>REGISTER</button>
                        </form>
                        <p>Already Have An Accout? <span onClick={navigateRegister}>Please Login</span></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;