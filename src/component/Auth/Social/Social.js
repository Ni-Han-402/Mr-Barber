import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import googleLogo from '../../../images/google.png'
import './Social.css'
const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>
    }
    if (user) {
        navigate('/home')
    }
    return (

        <>
            <div className="diveder-container">
                <div className='devider'></div>
                <p>Or</p>
                <div className='devider'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn social-btn'><img src={googleLogo} alt="" /> GOOGLE LOGIN</button>
        </>
    );
};

export default Social;