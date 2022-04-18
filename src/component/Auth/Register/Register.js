import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import Social from '../Social/Social';

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
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {

    }
    const handleRegister = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')
    }

    const navigateRegister = e => {
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
                        <form onSubmit={handleRegister}>
                            <input type="text" name="name" placeholder='Your Name' />
                            <input ref={emailRef} type="email" name="email" placeholder='Email Adress' required />
                            <input ref={passwordRef} type="password" name="password" placeholder='Password' required />
                            <button className='btn'>REGISTER</button>
                        </form>
                        <p>Already Have An Accout? <span onClick={navigateRegister}>Please Login</span></p>
                        <Social></Social>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;