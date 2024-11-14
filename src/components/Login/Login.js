import React, { useState } from 'react';
import '../style/Login.css'
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
    const [userNameInput, setUserNameInput] = useState('');
    const [userPasswordInput, setUserPasswordInput] = useState('');
    const [userRoleInput, setUserRoleInput] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dataResponse = await fetch('http://localhost:8000/users');
            const users = await dataResponse.json();
            console.log('users', users);
            let isUserValid = false;
            for (let user of users) {
                if ((user.userName === userNameInput) && (user.password === userPasswordInput) && (user.role === userRoleInput)) {
                    isUserValid = true;
                    localStorage.setItem('userName', user.userName);
                    localStorage.setItem('userId', user.id);
                    localStorage.setItem('userRole', user.role);
                    localStorage.setItem('firstName', user.firstName);
                    localStorage.setItem('lastName', user.lastName);
                    localStorage.setItem('userEmail', user.email);
                    if (user.role === 'HR') {
                        navigate(`/hrDashboard/${user.id}`);
                    } else if (user.role === 'Employee') {
                        navigate(`/employeeDashboard/${user.id}`);
                    }
                    break;
                }
            }
            if (!isUserValid) {
                alert('Please signup before logging in! \n\nIf already signed up, Please check your username, password or role!');
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    };
    
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <input type="text" placeholder="Username" className="login-input" value={userNameInput}
                    onChange={(e)=>{setUserNameInput(e.target.value)}}
                />
                <input type="password" placeholder="Password" className="login-input" value={userPasswordInput}
                    onChange={(e)=>{setUserPasswordInput(e.target.value)}}
                />
                <div className="radio-group">
                    <input type="radio" name="role" value="Employee" id="employee"  onChange={(e)=>{setUserRoleInput(e.target.value)}}/>
                    <label htmlFor="employee">Employee</label>
                    <input type="radio" name="role" value="HR" id="hr"  onChange={(e)=>{setUserRoleInput(e.target.value)}}/>
                    <label htmlFor="hr">HR</label>
                </div>
                <button className="login-button" type="submit">Login</button>
                <Link className='signup-link' to='/signup'>Signup</Link>
            </form>
        </div>
    );
};

export default Login;
