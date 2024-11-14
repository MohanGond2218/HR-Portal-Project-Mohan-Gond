import React, { useEffect, useState } from 'react';
import './style/ApplyLeave.css';
import { useNavigate } from 'react-router-dom';

const ApplyLeave = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');
  const [leaves, setLeaves] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const leavesResponse = await fetch('http://localhost:8002/leaves');
        if (!leavesResponse.ok) {
          throw new Error('Error fetching leaves!');
        }
        const leavesJson = await leavesResponse.json();
        setLeaves(leavesJson);
      } catch (error) {
        console.error('Error fetching leaves:', error);
      }
    };
    fetchLeaves();
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!leaveType || !startDate || !endDate || !reason) {
      setError('Please fill in all the fields!');
      return;
    }

    const maxId = leaves.length > 0 ? Math.max(...leaves.map(item => item.leaveId)) : 0;
    const newLeave = {
      leaveId: maxId + 1,
      userId: localStorage.getItem('userId'),
      userName: localStorage.getItem('userName'),
      userRole: localStorage.getItem('userRole'),
      leaveType: leaveType,
      startDate: startDate,
      endDate: endDate,
      reason: reason
    };

    try {
      const response = await fetch('http://localhost:8002/leaves', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLeave),
      });

      if (response.ok) {
        console.log('Leave Applied:', newLeave);
        setError('');
        setLeaveType('');
        setStartDate('');
        setEndDate('');
        setReason('');
        alert('Leave applied successfully!');
        // Fetch updated leaves list after submission
        const updatedLeaves = await response.json();
        setLeaves([...leaves, updatedLeaves]);
      } else {
        console.error('Error applying leave');
      }
    } catch (error) {
      console.error('Error submitting leave request:', error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className='backButtonApplyLeave'>
        <button onClick={handleBack} className='btn btn-danger'>Back</button>
      </div>
      <div className="apply-leave-container">
        <h4>Apply for Leave</h4>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          
          <label htmlFor="leaveType">Leave Type</label>
          <select
            id="leaveType"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
          >
            <option value="">Select Leave Type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Vacation">Vacation</option>
            <option value="Casual Leave">Casual Leave</option>
            <option value="Maternity Leave">Maternity Leave</option>
          </select>

          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />

          <label htmlFor="reason">Reason</label>
          <textarea
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows="2"
          />

          <button type="submit">Submit Leave Request</button>
        </form>
      </div>
    </div>
  );
};

export default ApplyLeave;
