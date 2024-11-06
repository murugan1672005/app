import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Header = () => {
  const navigate = useNavigate();

  const LogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <header className="bg-blue-600 text-white h-20 p-4 shadow-md fixed w-full top-0 left-0 z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-16">
        {/* Logo on the left */}
        <h1 
          onClick={() => navigate('/home')} 
          className="text-2xl font-bold cursor-pointer"
        >
          Jackson Academy
        </h1>

        {/* Navigation links on the right */}
        <ul className="flex space-x-4">
          <li><Button variant="outlined" className="text-white"><Link to="/home" className="text-white no-underline">Home</Link></Button></li>
          <li><Button variant="outlined" className="text-white"><Link to="/about" className="text-white no-underline">About Us</Link></Button></li>
          <li><Button variant="outlined" className="text-white"><Link to="/contact" className="text-white no-underline">Contact</Link></Button></li>
          <li><Button variant="outlined" className="text-white"><Link to="/courses" className="text-white no-underline">Courses</Link></Button></li>
          <li><Button variant="outlined" className="text-white"><Link to="/profile" className="text-white no-underline">Profile</Link></Button></li>
          <li><Button variant="outlined" className="text-white" onClick={LogOut}><Link to="/login" className="text-white no-underline">Logout</Link></Button></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
