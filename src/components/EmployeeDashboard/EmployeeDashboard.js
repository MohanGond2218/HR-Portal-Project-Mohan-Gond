import React from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import '../style/EmployeeDashboard.css';

const EmployeeDashboard = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log('employee id: ', id);

    const handleApplyLeave = () => {
        navigate('/employeeDashboard/applyLeave');
        console.log('apply leave clicked');
    }

    return (
        <div className='employee-dashboard-container mb-5'>
            <div className='heading'>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: 'black' }}>Welcome {localStorage.getItem('userName')}!</h3>
                </div>
                <div className="center-heading">
                    <h3>Employee Dashboard</h3>
                </div>
            </div>
            
            <div className='main-container-others-main-block '>
                <h5 className='mb-0' style={{ color: '#4CAF50' }}>My Actions</h5>
                <div className='main-container-emp  '>
                    <div className='box-container' style={{ height: '120px', width: '320px' }}>
                        <h6>Apply for Leave</h6>
                        <button className='btn btn-primary' onClick={handleApplyLeave}>Apply Leave</button> <br />
                        <button className='btn btn-link' onClick={()=>{navigate('/employeeDashboard/listleaves')}}>Go to list of leaves</button>
                    </div>
                </div>
            </div>
            
            <div className='main-container-others-main-block'>
                <h5 className='mb-0' style={{ color: '#4CAF50' }}>My Profile</h5>
                <div className='main-container-emp'>
                    <div className='box-container-others mb-4' style={{ height: '110px', width: '320px' }}>
                        <h6 className='mb-0'>{localStorage.getItem('firstName')} {localStorage.getItem('lastName')}</h6>
                        <label>{localStorage.getItem('userRole')}</label> <br />
                        <label>{localStorage.getItem('userEmail')}</label> <br />
                        <button className='btn btn-primary' onClick={()=>{navigate('/employeeDashboard/viewProfile')}}>View Profile</button>
                    </div>                  
                </div>
            </div>

            <div className='main-container-others-main-block'>
                <h5 className='mb-0' style={{ color: '#4CAF50' }}>My Organization</h5>
                <div className='main-container-emp'>
                    <div className='box-container-others mb-4' style={{ height: '110px', width: '320px' }}>
                        <h6 className='mb-0'>Peter Mathew</h6>
                        <label>HR</label> <br />
                        <label>peter@example.com</label> <br />
                        <button className='btn btn-primary' disabled>View Profile</button>
                    </div>
                    <div className='box-container-others mb-4' style={{ height: '110px', width: '320px' }}>
                        <h6 className='mb-0'>David Singh</h6>
                        <label>Manager</label> <br />
                        <label>david@example.com</label> <br />
                        <button className='btn btn-primary' disabled>View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeDashboard;
