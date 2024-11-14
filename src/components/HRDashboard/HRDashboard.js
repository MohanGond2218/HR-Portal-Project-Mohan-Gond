import React from 'react';
import '../style/HRDashboard.css';
import { useNavigate } from 'react-router-dom';

const HRDashboard = () => {
    const navigate = useNavigate();
    const handleAddEmployee = () => {
        navigate('/hrDashboard/addNewEmplyee');
        console.log('add employee clicked');
    }
    const handleGoToListEmp = () => {
        navigate('/hrDashboard/listEmployees'); 
    }
    const handleGoToListLeave = () => {

        navigate('/hrDashboard/listleaves');
    }
    return (
        <div className='hr-dashboard-container mb-5'>
            <div className='headingHR'>
                <div style={{ flex: 1 }}>
                    <h3 style={{ color: 'white' }}>Welcome {localStorage.getItem('userName')}!</h3>
                </div>
                <div className="center-headingHR">
                    <h3>HR Dashboard</h3>
                </div>
            </div>
            <div className='main-container-self-1HR'>
                <h5 className='mb-0' style={{ color: '#932292' }}>My Actions</h5>
                <div className='main-container-selfHR mt-0'>
                    <div className='box-containerHR' style={{ height: '100px', width: '300px' }}>
                        <h6>Add New Employee</h6>
                        <button className='btn btn-primary' onClick={handleAddEmployee}>Add Employee</button> <br />
                        <button className='btn btn-link' onClick={handleGoToListEmp}>Go to list of employees</button>
                    </div>
                    <div className='box-containerHR' style={{ height: '100px', width: '300px' }}>
                        <h6>Manage Leaves</h6>
                        <button className='btn btn-primary' onClick={()=>{navigate('/hrDashboard/applyLeave')}}>Apply Leave</button> <br />
                        <button className='btn btn-link' onClick={handleGoToListLeave}>Go to list of Leaves</button>
                    </div>
                </div>
            </div>

            <div className='main-container-others-1HR'>
                <h5 className='mb-0' style={{ color: '#932292' }}>My Profile</h5>
                <div className='main-container-othersHR mt-0'>
                    <div className='box-container-othersHR' style={{ height: '110px', width: '300px' }}>
                        <h6 className='mb-0'>John</h6>
                        <label>HR</label> <br />
                        <label>johnsingh@gmail.com</label> <br />
                        <button className='btn btn-primary' onClick={()=>{navigate('/hrDashboard/viewProfile')}}>View Profile</button>
                    </div>
                </div>
            </div>

            <div className='main-container-others-1HR'>
                <h5 className='mb-0' style={{ color: '#932292' }}>My Organization</h5>
                <div className='main-container-othersHR mt-0'>
                    <div className='box-container-othersHR' style={{ height: '110px', width: '300px' }}>
                        <h6 className='mb-0'>Peter</h6>
                        <label>Manager</label> <br />
                        <label>petermathew222@gmail.com</label> <br />
                        <button className='btn btn-primary' disabled>View Profile</button>
                    </div>
                    <div className='box-container-othersHR' style={{ height: '110px', width: '300px' }}>
                        <h6 className='mb-0'>Jake</h6>
                        <label>Superviser</label> <br />
                        <label>jakesena33@gmail.com</label> <br />
                        <button className='btn btn-primary' disabled>View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HRDashboard;
