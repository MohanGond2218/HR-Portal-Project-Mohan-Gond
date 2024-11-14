// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HRDashboard from './components/HRDashboard/HRDashboard';
import EmployeeDashboard from './components/EmployeeDashboard/EmployeeDashboard';
import ListEmployees from './components/HRDashboard/ListEmployees'
import AddEmployee from './components/HRDashboard/AddEmployee'
import ApplyLeave from './components/ApplyLeave';
import ListLeaves from './components/ListLeaves';
import ViewProfile from './components/ViewProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/hrDashboard/:id' element={<HRDashboard />}></Route>
        <Route path='/employeeDashboard/:id' element={<EmployeeDashboard />}></Route>
        <Route path='/hrDashboard/addNewEmplyee' element={<AddEmployee />}></Route>
        <Route path='/hrDashboard/listEmployees' element={<ListEmployees />}></Route>
        <Route path='/employeeDashboard/applyLeave' element={<ApplyLeave />}></Route>
        <Route path='/hrDashboard/applyLeave' element={<ApplyLeave />}></Route>
        <Route path='/employeeDashboard/listleaves' element={<ListLeaves />}></Route>
        <Route path='/hrDashboard/listleaves' element={<ListLeaves />}></Route>
        <Route path='/employeeDashboard/viewProfile' element={<ViewProfile />}></Route>
        <Route path='/hrDashboard/viewProfile' element={<ViewProfile />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
