import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../SignIn/Login';
import Register from '../SignUp/Register';
import Home from '../Home/Home';
import Courses from '../Courses/Courses';
import About from '../About/About';
import Contact from '../Contact/Contact';
import EnrollPage from '../Enroll/EnrollPage';
import PrivateRoute from '../SignIn/PrivateRoute/PrivateRoute';
import AdminPage from '../Admin/AdminPage';
import AdminLogin from '../Admin/AdminLogin/AdminLogin';
import ProgressPage from '../Progress/ProgressPage';
import Profile from '../Profile/Profile';

function Routing() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminsignin" element={<AdminLogin  />} />
      <Route path="/" element={<Login  />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signup" element={<Register />} />
      
      <Route 
        path="/home" 
        element={
          <PrivateRoute requiredRole="USER">
            <Home />
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/admin" 
        element={
          <PrivateRoute requiredRole="ADMIN">
            <AdminPage />
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/courses" 
        element={
          <PrivateRoute requiredRole="USER">
            <Courses />
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/about" 
        element={
          <PrivateRoute requiredRole="USER">
            <About />
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/contact" 
        element={
          <PrivateRoute requiredRole="USER">
            <Contact />
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/enroll/:courseName" 
        element={
          <PrivateRoute requiredRole="USER">
            <EnrollPage />
          </PrivateRoute>
        } 
      />
      
     
      
      <Route 
        path="/progress" 
        element={
          <PrivateRoute requiredRole="USER">
            <ProgressPage />
          </PrivateRoute>
        } 
      />
      
      <Route 
        path="/profile" 
        element={
          <PrivateRoute requiredRole="USER">
            <Profile />
          </PrivateRoute>
        } 
      />
    </Routes>
  );
}

export default Routing;
