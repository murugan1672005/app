import React, { useState } from 'react';
import {
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
  Snackbar,
  Alert
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { LoginData } from '../Data/Process';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await LoginData(email, password);
      if (response.token) {
        if (response.role === "USER") {
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);

          setSnackbarMessage(response.message);
          setSnackbarSeverity("success");
          setOpenSnackbar(true);

         
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        } else {
          setSnackbarMessage("You are not a user");
          setSnackbarSeverity("error");
          setOpenSnackbar(true);
        }
      } else {
        setSnackbarMessage("Login Failed");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    } catch (error) {
      setSnackbarMessage("An error occurred. Please try again.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className='login'>
      <h1>Welcome to E-learning</h1>
      <div className='container'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <TextField
              sx={{ fontFamily: "cursive" }}
              type="text"
              label="Email"
              className='input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </div>
          <div className='input-container'>
            <TextField
              sx={{ fontFamily: "cursive" }}
              type={showPassword ? 'text' : 'password'}
              label="Password"
              className='input'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </div>
          <br /><br />
          <Button type='submit' className="btn" variant='contained' color='primary'>Login</Button>
          <br /><br />
          <span>Don't have an account? <Link className='link' to="/register">Register</Link> here</span><br /><br />
          <span>If you are an admin, please <Link className='link' to="/adminlogin">Login as Admin</Link></span>
        </form>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Change position to top
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

export default Login;
