import React, { useEffect, useState } from 'react';
import './style/ViewProfile.css';
import { useNavigate } from 'react-router-dom';

const ViewProfile = () => {
    const [profile, setProfile] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const fetchProfileRes = await fetch('http://localhost:8000/users');
            if (fetchProfileRes.ok) {
                const fetchProfileResJson = await fetchProfileRes.json();
                const currentUserId = parseInt(localStorage.getItem('userId'));
                const currentProfile = fetchProfileResJson.find(item => item.id === currentUserId);
                setProfile(currentProfile || {});
            }
        };
        fetchProfile();
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="viewProfile-container">
            <button onClick={handleBack} className="viewProfile-backButton">Back</button>
            <h2 className="viewProfile-title">My Profile</h2>
            <div className="viewProfile-card">
                <p><strong>First Name:</strong> {profile.firstName}</p>
                <p><strong>Last Name:</strong> {profile.lastName}</p>
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Username:</strong> {profile.userName}</p>
                <p><strong>Role:</strong> {profile.role}</p>
            </div>
        </div>
    );
};

export default ViewProfile;
