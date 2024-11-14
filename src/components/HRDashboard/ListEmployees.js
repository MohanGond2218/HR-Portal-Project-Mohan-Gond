import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ListEmployees.css';

const ListEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await fetch('http://localhost:8001/employees');
                if (!response.ok) throw new Error('Error fetching employees data!');
                
                const resJson = await response.json();
                setEmployees(resJson);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchEmployees();
    }, []);

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <button className="backButtonElist" onClick={handleBack}>Back</button>
            <div className="employeeListBlock">
                <div className="header">
                    <h1 className="employeeListHeading">Employees List</h1>
                </div>
                <div className="employeeCards">
                    {Array.isArray(employees) && employees.length === 0 ? (
                        <div>Loading...</div>
                    ) : (
                        employees.map((employee) => (
                            <div className="employeeCard" key={employee.employee_id}>
                                <h2>{employee.first_name} {employee.last_name}</h2>
                                <p><strong>Employee ID:</strong> {employee.employee_id}</p>
                                <p><strong>Position:</strong> {employee.position}</p>
                                <p><strong>Department:</strong> {employee.department}</p>
                                <p><strong>Hire Date:</strong> {new Date(employee.hire_date).toLocaleDateString()}</p>
                                <p><strong>Status:</strong> {employee.status}</p>
                                <p><strong>Email:</strong> {employee.email}</p>
                                <p><strong>Phone:</strong> {employee.phone}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListEmployees;
