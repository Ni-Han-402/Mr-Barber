import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <>
            <div className="container">
                <div className="title"><h1>Answer</h1></div>

                <div className="answer-container">
                    <div className="answer-item">
                        <h2>Difference between authorization and authentication</h2>
                        <ul>
                            <li>
                                <h4>Authorization</h4>
                                <p>Authorization determines what resources a user can access.</p>
                                <p>Authorization always takes place after authentication.</p>
                                <p>Authorization isn't visible to or changeable by the user.</p>
                            </li>
                            <li>
                                <h4>Authentication</h4>
                                <p>Authentication verifies who the user is.</p>
                                <p>Authentication is the first step of a good identity and access management process.</p>
                                <p>Authentication is visible to and partially changeable by the user.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="answer-item">
                        <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                        <p>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
                        </p>
                    </div>
                    <div className="answer-item">
                        <h2>What other services does firebase provide other than authentication</h2>
                        <ul>
                            <li>
                                <h4>There are many services which Firebase provides, Most useful of them are:</h4>
                            </li>
                            <li><p>Authentication.</p></li>
                            <li><p>Cloud Firestore.</p></li>
                            <li><p>Cloud Functions.</p></li>
                            <li><p>Hosting.</p></li>
                            <li><p>Cloud Storage.</p></li>
                            <li><p>Google Analytics.</p></li>
                            <li><p>Predictions.</p></li>
                            <li><p>Cloud Messaging.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;