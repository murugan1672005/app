import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container, Typography, Card, CardContent, CardMedia, Box, IconButton, Button,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSpring, animated } from 'react-spring';
import './EnrollPage.css';

const EnrollPage = () => {
  const { courseName } = useParams();
  const decodedCourseName = decodeURIComponent(courseName);
  const [course, setCourse] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5454/adminuser/courses/search/name?courseName=${decodedCourseName}`,
          {
            headers: { 'Authorization': `Bearer ${token}` },
          }
        );
        setCourse(response.data[0]);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourseDetails();
  }, [decodedCourseName, token]);

  const handleNext = () => {
    if (currentPage < course.syllabus.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const springProps = useSpring({
    opacity: course ? 1 : 0,
    transform: course ? 'translateY(0)' : 'translateY(-50px)',
    config: { tension: 300, friction: 20 },
  });

  return (
    <Container className="enroll-page">
      {course ? (
        <animated.div style={springProps}>
          <Box className="hero-section">
            <Typography variant="h2" gutterBottom className="course-title">
              {course.courseName}
            </Typography>
          </Box>
          <Box className="back-button">
            <Button 
              variant="contained" 
              startIcon={<ArrowBackIcon />} 
              onClick={() => navigate('/courses')} // Replace '/courses' with your actual courses list route
            >
              Back to Courses
            </Button>
          </Box>
          <Typography variant="h4" gutterBottom className="syllabus-title">
            Syllabus Videos
          </Typography>
          <Card className="video-card">
            <CardMedia
              component="iframe"
              src={`https://www.youtube.com/embed/mock_video_id${course.courseName}`}
              title={course.syllabus[currentPage]}
              className="video-iframe"
            />
            <CardContent>
              <Typography variant="subtitle1" className="video-title">
                {course.syllabus[currentPage]}
              </Typography>
            </CardContent>
          </Card>
          <Box className="pagination-controls">
            <div>
              <IconButton style={{marginLeft:"600px"}}  onClick={handlePrev} disabled={currentPage === 0}>
                <ArrowBackIosIcon />
              </IconButton>
              <Typography variant="body1">
                {currentPage + 1} / {course.syllabus.length}
              </Typography>
              <IconButton onClick={handleNext} disabled={currentPage === course.syllabus.length - 1}>
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </Box>
        </animated.div>
      ) : (
        <Typography variant="h6" className="loading-text">
          Loading course details...
        </Typography>
      )}
    </Container>
  );
};

export default EnrollPage;
