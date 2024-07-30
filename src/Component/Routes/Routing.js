import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../SignIn/Login';
import Register from '../SignUp/Register';
import Home from '../Home/Home';
import Courses from '../Courses/Courses'
import About from '../About/About';
import Contact from '../Contact/Contact';
import EnrollPage from '../Enroll/EnrollPage';
import PrivateRoute from '../SignIn/PrivateRoute/PrivateRoute';
import AdminPage from '../Admin/AdminPage';
import AdminLogin from '../Admin/AdminLogin/AdminLogin';

function Routing() {
  const [login, setLogin] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<Login setLogin={setLogin} />} />
      <Route path="/adminlogin" element={<AdminLogin setLogin={setLogin} />} />
      <Route path="/adminsignin" element={<AdminLogin setLogin={setLogin} />} />
      <Route path="/" element={<Login setLogin={setLogin} />} />
      <Route path="/signin" element={<Login setLogin={setLogin} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signup" element={<Register />} />
      <Route 
        path="/home" 
        element={
          <PrivateRoute login={login}>
            <Home />
          </PrivateRoute>
        } 
      />
      <Route 
        path="/admin" 
        element={
          <PrivateRoute login={login}>
            <AdminPage />
          </PrivateRoute>
        } 
      />
      <Route path="/courses" element={<PrivateRoute login={login}><Courses/></PrivateRoute>} />
      <Route path="/about" element={<PrivateRoute login={login}><About /></PrivateRoute>} />
      <Route path="/contact" element={<PrivateRoute login={login}><Contact /></PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute login={login}><AdminPage /></PrivateRoute>} />
      <Route path="/enroll/:coursename" element={<PrivateRoute login={login}><EnrollPage /></PrivateRoute>} />
    </Routes>
  );
}

export default Routing;
