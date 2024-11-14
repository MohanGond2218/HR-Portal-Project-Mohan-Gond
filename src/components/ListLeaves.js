import React, { useEffect, useState } from 'react';
import './style/ListLeaves.css';
import { useNavigate } from 'react-router-dom';

const ListLeaves = () => {
    const [leaves, setLeaves] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchLeaves = async () => {
            try {
                const response = await fetch('http://localhost:8002/leaves');
                if (response.ok) {
                    const data = await response.json();
                    setLeaves(data);
                } else {
                    throw new Error('Error fetching leaves response!');
                }
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchLeaves();
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="list-leaves-container">
            <button onClick={handleBack} className="back-button">Back</button>
            <h1>List of Leaves</h1>
            <div className="list-leaves-card-container">
                {leaves.length > 0 ? (
                    leaves.map((leave) => (
                        <div key={leave.leaveId} className="list-leaves-card">
                            <h2>
                                <strong>Name: {leave.userName || `${localStorage.getItem('firstName')} ${localStorage.getItem('lastName')}`}</strong>
                            </h2>
                            <p><strong>Role: </strong>{leave.userRole}</p>
                            <p><strong>Leave Type: </strong>{leave.leaveType}</p>
                            <p><strong>Start Date: </strong>{leave.startDate}</p>
                            <p><strong>End Date: </strong>{leave.endDate}</p>
                            <p><strong>Reason: </strong>{leave.reason}</p>
                        </div>
                    ))
                ) : (
                    <div className="loading">Loading...</div>
                )}
            </div>
        </div>
    );
};

export default ListLeaves;
