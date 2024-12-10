import React, { useState } from 'react';
import './Login.css';
import Signup from './Signup';

const Login = ({ isVisible, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false);

    const handleLogin = () => {
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        onClose();
    };

    const handleSignupClick = () => {
        setIsSignup(true);
    };

    const handleClose = () => {
        setIsSignup(false);
        onClose();
    };

    if (!isVisible) return null;

    return isSignup ? (
        <Signup isVisible={isVisible} onClose={handleClose} />
    ) : (
        <div className="login-modal">
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={handleClose}>×</button>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="button-group">
                        <button onClick={handleLogin}>Login</button>
                        <button onClick={handleSignupClick}>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;