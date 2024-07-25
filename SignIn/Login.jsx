import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { LoginData } from '../Data/Process'
import Header from '../Home/Header/Header'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        console.log(email);
        console.log(password);
        LoginData(email, password).then((response) => {
            if (response === true) {
                navigate('/home')
            } else {
                alert("Invalid Credentials")
            }
        })
    }
    return (
        <>
        <div className='login'>
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
                    <span>Don't have an account? <Link className='link' to="/register">Register</Link> here</span>
                </form>
            </div>
            </div>
            </>
    )
}

export default Login;
