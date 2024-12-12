import React, { useState } from 'react';
import './Signup.css';
import { signup } from '../../api/login';
import { message } from 'antd'

const Signup = ({ isVisible, onClose }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const onSignup = async () => {
        if (!email || !name || !password) {
            message.warning('All fields are required.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            message.warning('Please enter a valid email address.');
            return;
        }
        const response = await signup(email, name, password);
        if(response.code === 200){
            message.success('Signup successful');
            // 延迟半秒
            setTimeout(() => {
                onClose();
            }, 500);
        }else{
            alert(response.message);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="signup-modal">
            <div className="modal-overlay">
                <div className="modal-content">
                    <h2>Signup</h2>
                    <button className="close-button" onClick={onClose}>×</button>
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
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        <button onClick={onSignup}>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;