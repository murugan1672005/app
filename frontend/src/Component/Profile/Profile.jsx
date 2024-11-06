// src/components/Profile.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, TextField, Button, Grid, Paper, Avatar, InputAdornment } from '@mui/material';
import { Email, Person, Phone, Home, AccountCircle } from '@mui/icons-material';
import { useSpring, animated } from '@react-spring/web';
import './Profile.css';

const Profile = () => {
    const user = useSelector((state) => state.user);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            email: user.email,
            username: user.username,
            firstName,
            lastName,
            phoneNumber,
            address
        });
        alert('Profile Updated Successfully!');
    };

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });

    return (
        <animated.div style={fadeIn}>
            <Box className="profile-container">
                <Paper elevation={3} className="profile-paper">
                    <Avatar className="profile-avatar">{user.username.charAt(0)}</Avatar>
                    <Typography variant="h4" component="div" gutterBottom className="profile-title">
                        User Profile
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    value={user.email}
                                    InputProps={{
                                        readOnly: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    className="profile-input"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Username"
                                    value={user.username}
                                    InputProps={{
                                        readOnly: true,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    className="profile-input"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Person />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    className="profile-input"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Person />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    className="profile-input"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Phone />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    className="profile-input"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Home />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="outlined"
                                    className="profile-input"
                                />
                            </Grid>
                        </Grid>
                        <Box mt={4} display="flex" justifyContent="center">
                            <Button type="submit" variant="contained" color="primary" className="profile-button">
                                Update Profile
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Box>
        </animated.div>
    );
};

export default Profile;
