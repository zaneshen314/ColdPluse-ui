import React, { useState } from 'react';
import './Signup.css';
import {signup} from "../../api/login";

const Signup = ({ isVisible, onClose }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const onSignup = async () => {
        try {
            await signup(email, name, password);
            alert('Signup successful!');
            onClose();
        } catch (error) {
            alert(error.message);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="signup-modal">
            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" onClick={onClose}>×</button>
                    <h2>Signup</h2>
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