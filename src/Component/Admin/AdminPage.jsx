import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Paper, Box, Grid, Card, CardContent, IconButton, Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const AdminPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch courses when the component mounts
    axios.get('http://localhost:5000/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the courses!', error);
      });
  }, []);

  const handleUpdate = (courseId) => {
    // Handle update course logic
    console.log('Update course with ID:', courseId);
    // Implement update logic here
  };

  const handleDelete = (courseId) => {
    axios.delete(`http://localhost:5000/courses/${courseId}`)
      .then(response => {
        setCourses(courses.filter(course => course.id !== courseId));
      })
      .catch(error => {
        console.error('There was an error deleting the course!', error);
      });
  };

  return (
    <Container
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      maxWidth={false}
      disableGutters
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #6D83F2, #4DA9F0)',
        color: '#fff',
        padding: 4
      }}
    >
      <Box
        component={motion.div}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        sx={{ mb: 4, textAlign: 'center' }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="h6">
          Manage platform settings, users, and notifications.
        </Typography>
      </Box>
      
      <Grid container spacing={4} sx={{ maxWidth: '1200px', width: '100%' }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            component={motion.div}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            sx={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', color: '#fff' }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }}>
                <PersonIcon />
              </Avatar>
              <Typography variant="h5" gutterBottom>
                User Management
              </Typography>
              <Typography variant="body2">
                Add, edit, or remove users and manage their roles.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            component={motion.div}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', color: '#fff' }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ bgcolor: 'secondary.main', mb: 2 }}>
                <SettingsIcon />
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Platform Settings
              </Typography>
              <Typography variant="body2">
                Configure platform settings and preferences.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            component={motion.div}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            sx={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', color: '#fff' }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ bgcolor: 'error.main', mb: 2 }}>
                <NotificationsIcon />
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Notifications
              </Typography>
              <Typography variant="body2">
                View and manage system notifications.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <TableContainer component={Paper} sx={{ mt: 4, background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell>Instructor</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.instructor}</TableCell>
                <TableCell align="right">
                  <IconButton color="primary" onClick={() => handleUpdate(course.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(course.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default AdminPage;
