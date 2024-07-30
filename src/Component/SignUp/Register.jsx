import { AccountCircle, Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import Validate from './Validate';
import './Register.css';

import { Link, useNavigate } from 'react-router-dom';
import { postData } from '../Data/Process';


const Register = () => {
  
  const navigate = useNavigate('');
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [registered, setRegistered] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(email);
    console.log(password);
    setRegistered(true);
    const message = Validate(email, password);
    if (message === "Register") {
    
      console.log()
      postData(username, email, password, role);
      alert("Registered Successfully");
      navigate('/login');
    } else {
      alert(message);
    }
  };
  return (
    <div className='register'>
      <div className='container'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <TextField
              type="text"
              label="Username"
              className='input'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle className='icon' />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiInputBase-root': { color: 'white' },
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiFormHelperText-root': { color: 'white' },
              }}
            />
            {!username && registered && <span className='danger'>Username cannot be Empty</span>}
          </div>
          <div className='input-container'>
            <TextField
              type="text"
              label="Email"
              className='input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email className='icon' />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiInputBase-root': { color: 'white' },
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiFormHelperText-root': { color: 'white' },
              }}
            />
            {!email && registered && <span className='danger'>Email cannot be Empty !</span>}
          </div>
          <div className='input-container'>
            <TextField
              type={showPassword ? 'text' : 'password'}
              label="Password"
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock className='icon' />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility className='danger' /> : <VisibilityOff className='danger' />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              sx={{
                '& .MuiInputBase-root': { color: 'white' },
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiFormHelperText-root': { color: 'white' },
              }}
            />
            {!password && registered && <span className='danger'>Password cannot be Empty</span>}
          </div>
          <div className='input-container'>
            <FormControl fullWidth>
              <InputLabel sx={{ color: 'white' }}>Role</InputLabel>
              <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
                sx={{
                  '& .MuiInputBase-root': { color: 'white' },
                  '& .MuiInputLabel-root': { color: 'white' },
                  '& .MuiFormHelperText-root': { color: 'white' },
                }}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>
            {!role && registered && <span className='danger'>Role cannot be Empty</span>}
          </div>
          <br /><br />
          <Button type='submit' className="btn" variant='contained'>Register</Button><br /><br />
          <span>Already have an account? <Link className='link' to="/login">Login</Link> Here</span>
        </form>
      </div>
    </div>
  );
};

export default Register;
