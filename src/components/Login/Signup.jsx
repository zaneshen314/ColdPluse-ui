import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ isVisible, onClose }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Handle signup logic here
        console.log('Email:', email);
        console.log('Name:', name);
        console.log('Password:', password);
        onClose();
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
                        <button onClick={handleSignup}>Signup</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;