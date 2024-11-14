import React, { useState } from 'react';
import '../style/AddEmployee.css';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        employee_id: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        position: '',
        department: '',
        hire_date: '',
        status: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            // Send a POST request to add the new user
            const response = await fetch('http://localhost:8001/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(employee),
            });

            if (response.ok) {
                // Reset form fields
                setEmployee({
                    employee_id: '',
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    position: '',
                    department: '',
                    hire_date: '',
                    status: ''
                });
                alert("Employee added successfully!");
                navigate('/hrDashboard');
            } else {
                alert("Error adding employee");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const handleBack = () => {
        navigate(-1);
    };
    return (
        <div>
            <div className='backButton'>
                <button className='btn btn-secondary' onClick={handleBack}>Back</button>
            </div>
        
        <div className='addEmployee'>
            
            <div className='formDataGroup'>
                <h3 style={{ textAlign: 'center', color: 'blue' }}>Add Employee</h3>
                <form className='formData' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Employee ID:</label>
                        <input className='form-control' type='text' name='employee_id' value={employee.employee_id} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input className='form-control' type='text' name='first_name' value={employee.first_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input className='form-control' type='text' name='last_name' value={employee.last_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className='form-control' type='email' name='email' value={employee.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input className='form-control' type='text' name='phone' value={employee.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Position:</label>
                        <input className='form-control' type='text' name='position' value={employee.position} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Department:</label>
                        <input className='form-control' type='text' name='department' value={employee.department} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Hire Date:</label>
                        <input className='form-control' type='date' name='hire_date' value={employee.hire_date} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Status:</label>
                        <input className='form-control' type='text' name='status' value={employee.status} onChange={handleChange} required />
                    </div>
                    <button type='submit' className='btn btn-primary mt-3 mx-auto' style={{textAlign:'center', justifyContent:'center', display:'flex'}}>Submit</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddEmployee;
