import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import UserManagement from './UserManagement/UserManagement';
import CoursesManagement from './CourseManagement/CoursesManagement'; // Assuming you have a CourseManagement component

const AdminPage = () => {
  const [activeManagement, setActiveManagement] = useState('user'); // 'user' or 'course'

  return (
    <Container
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      maxWidth={false}
      disableGutters
      sx={{
        height: 'auto',
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
            onClick={() => setActiveManagement('user')}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            sx={{
              background: activeManagement === 'user' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              cursor: 'pointer'
            }}
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
            onClick={() => setActiveManagement('course')}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{
              background: activeManagement === 'course' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar sx={{ bgcolor: 'secondary.main', mb: 2 }}>
                <SettingsIcon />
              </Avatar>
              <Typography variant="h5" gutterBottom>
                Course Management
              </Typography>
              <Typography variant="body2">
                Manage courses, schedules, and content.
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
      
      <Box sx={{ mt: 4, width: '100%', maxWidth: '1200px' }}>
        {activeManagement === 'user' && <UserManagement />}
        {activeManagement === 'course' && <CoursesManagement />}
      </Box>
    </Container>
  );
}

export default AdminPage;
