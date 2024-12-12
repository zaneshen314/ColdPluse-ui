import React, { useState } from 'react';
import './Login.css';
import Signup from './Signup';
import {getUserInfo, login} from "../../api/login";
import { message } from 'antd'

const Login = ({ isVisible, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false);

    const handleLogin = async () => {
        try {
            const data = await login(email, password);
            localStorage.setItem('token', data.data);
            const userinfo = await getUserInfo();
            localStorage.setItem('name', userinfo.data.name);
            message.success('Login Success');
            // 延迟半秒
            setTimeout(() => {
                onClose();
            }, 400);
        } catch (error) {
            message.error('Invalid email or password!');
        }
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
                    <h2>Login</h2>
                    <button className="close-button" onClick={handleClose}>×</button>
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