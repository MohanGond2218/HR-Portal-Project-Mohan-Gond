import React, { useState } from 'react';
import '../style/Signup.css';
import {Link} from 'react-router-dom';

const Signup = () => {
    const [userName, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        try {
            // Fetch existing users to determine the highest ID
            const usersResponse = await fetch('http://localhost:8000/users');
            const users = await usersResponse.json();
            const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;

            const newUser = {
                id: maxId + 1,
                userName,
                firstName,
                lastName,
                email,
                password,
                role
            };

            // Send a POST request to add the new user
            const response = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                // Reset form fields
                setUsername('');
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setRole('');
                alert("User added successfully!");
            } else {
                alert("Error adding user");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignupSubmit}>
                <h3>Signup</h3>
                <input
                    type="text"
                    placeholder="Username"
                    className="signup-input"
                    value={userName} // Add value attribute
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="First Name"
                    className="signup-input"
                    value={firstName} // Add value attribute
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="signup-input"
                    value={lastName} // Add value attribute
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    className="signup-input"
                    value={email} // Add value attribute
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    className="signup-input"
                    value={password} // Add value attribute
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='radio-group'>
                    <input
                        type="radio"
                        name="role"
                        value="Employee"
                        checked={role === 'Employee'} // Add checked attribute for control
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <label>Employee</label>
                    <input
                        type="radio"
                        name="role"
                        value="HR"
                        checked={role === 'HR'} // Add checked attribute for control
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <label>HR</label>
                </div>
                <button className="signup-button mb-2" type="submit">Signup</button>
                <Link to='/' className='login-page'>Already signed up! Login here</Link>
            </form>
        </div>
    );
};

export default Signup;
