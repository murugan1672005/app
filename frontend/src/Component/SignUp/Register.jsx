import React, { useState } from 'react';
import {
  AccountCircle,
  Email,
  Lock,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Snackbar,
  Alert
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Validate from './Validate';
import { registerUser } from '../Data/Process';
import { FaCity } from "react-icons/fa";
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [city, setCity] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRegistered(true);
    const message = Validate(email, password);
    if (message === "Register") {
      try {
        const res = await registerUser(username, email, password, city, role);
        setSnackbarMessage(res.message);
        setSnackbarSeverity("success");
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate('/login');
        }, 3000); 
      } catch (error) {
        setSnackbarMessage("Registration failed. Please try again.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    } else {
      setSnackbarMessage(message);
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle className='icon' />
                  </InputAdornment>
                ),
              }}
              classes={{ root: 'input-root' }}
              className='control'
            /><br/>
            {!username.trim() && registered && (
              <span className='danger'>Username cannot be empty!!</span>
            )}
          </div>

          <div className='input-container'>
            <TextField
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email className='icon' />
                  </InputAdornment>
                ),
              }}
              classes={{ root: 'input-root' }}
              className='control'
            /><br/>
            {!email.trim() && registered && (
              <span className='danger'>Email cannot be empty!!</span>
            )}
          </div>

          <div className='input-container'>
            <TextField
              type={showPassword ? 'text' : 'password'}
              label="Password"
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
                      {showPassword ? <Visibility className='icon' /> : <VisibilityOff className='icon' />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
              classes={{ root: 'input-root' }}
              className='control'
            /><br/>
            {!password && registered && (
              <span className='danger'>Password cannot be empty!!</span>
            )}
          </div>

          <div className='input-container'>
            <TextField
              type="text"
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaCity className='icon' />
                  </InputAdornment>
                ),
              }}
              classes={{ root: 'input-root' }}
              className='control'
            /><br/>
            {!city.trim() && registered && (
              <span className='danger'>City cannot be empty!!</span>
            )}
          </div>

          <div className='input-container'>
            <FormControl className='control'>
              <InputLabel classes={{ root: 'input-label-root' }}>Role</InputLabel>
              <Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                label="Role"
                classes={{ root: 'input-root' }}
              >
                <MenuItem value="ADMIN">Admin</MenuItem>
                <MenuItem value="USER">User</MenuItem>
                <MenuItem value="INSTRUCTOR">Instructor</MenuItem>
              </Select>
            </FormControl><br/>
            {!role.trim() && registered && (
              <span className='danger'>Role cannot be empty!!</span>
            )}
          </div>

          <br /><br />
          <Button type='submit' className="btn" variant='contained'>Register</Button><br /><br />
          <span>Already have an account? <Link className='link' to="/login">Login</Link> here</span>
        </form>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ 
          position: 'fixed', 
          top: '1rem', // Position from the top
          width: 'auto', 
          minWidth: '250px',
          '& .MuiAlert-root': { 
            fontSize: '0.875rem',
            padding: '0.5rem 1rem',
          } 
        }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Register;
