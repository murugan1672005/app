import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../SignIn/Login.css';
import { AdminLoginData } from '../../Data/Process';

const AdminLogin = ({ setLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        AdminLoginData(email, password).then((response) => {
            if (response) {
                alert("Login Successful");
                setLogin(true);
                navigate('/admin');
            } else {
                alert("Invalid Credentials");
            }
        });
    };

    return (
        <div className='login'>
            <h1>Welcome to E-learning</h1>
            <div className='container'>
                <h1>Admin Login</h1>
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
                    <span>If You are a user, please <Link className='link' to="/login">Login as User</Link></span>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
