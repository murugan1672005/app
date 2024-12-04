import React from 'react';
import { Button, Typography, Container, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import eLearningImage from '../../../Assests/E-learning-Portal-Development-01.png';

const Main = () => {
  const navigate = useNavigate();

  const headingProps = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } });
  const buttonProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000, config: { duration: 1500 } });

  return (
    <Container maxWidth="lg" className="py-8">
      <Grid container spacing={6} className="mt-12">
        {/* Left Side Content */}
        <Grid item xs={12} md={6} className="space-y-4">
          <Box>
            <Typography variant="h2" className="text-left font-bold text-3xl">
              <animated.div style={headingProps}>
                <SchoolIcon fontSize="large" className="mr-2 text-blue-600" /> 
                Welcome to Jackson Academy
              </animated.div>
            </Typography>
            <Typography variant="h5" className="text-left text-xl text-gray-700">
              Learning how to learn is life’s most important skill
            </Typography>
            <Typography variant="body1" className="text-left text-lg text-gray-600">
              Explore our diverse range of courses designed to help you master the skills you need for the future. Our e-learning platform offers interactive content, expert instructors, and a comprehensive learning experience tailored for your success.
            </Typography>
            <animated.div style={buttonProps}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="mt-4"
                endIcon={<PlayCircleOutlineIcon />}
                onClick={() => navigate('/courses')}
              >
                Get Started
              </Button>
            </animated.div>
          </Box>
        </Grid>

        {/* Right Side Image */}
        <Grid item xs={12} md={6} className="flex justify-center items-center">
          <motion.div 
            className="bg-cover bg-center w-full h-96 rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${eLearningImage})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;
