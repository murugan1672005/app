import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { fetchCoursesSuccess } from './actions/CourseActions';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Grid,
  CircularProgress,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Button
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './CourseList.css'; 
import { enrollUser, fetchProfile } from './Logic';

const CourseList = () => {
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.filteredCourses);
  const loading = useSelector(state => state.courses.loading);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5454/adminuser/courses/list', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        dispatch(fetchCoursesSuccess(response.data));
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, [dispatch, token]);

  const handleClickOpen = (course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCourse(null);
  };

  const handleEnroll = async(course) => {
    try {
      const user =await fetchProfile();
      const userId = user.users.id;
      const courseId = course.courseId;
      console.log(userId);
      console.log(courseId);
      const res = await enrollUser(userId, courseId);
      alert(res);
    } catch (error) {
      console.log("Enrolled user failed")
      console.log(error);
      alert("Failed")
    }
  navigate(`/enroll/${course.courseName}`);
  };

  return (
    <Container className="course-list">
      {loading ? (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
          <CircularProgress />
        </Grid>
      ) : (
        <div className="course-card-grid">
          {courses.map(course => (
            <div className="card-item" key={course.courseId}>
              <Card className="course-card" onClick={() => handleClickOpen(course)}>
                {course.courseImageUrl && (
                  <CardMedia
                    component="img"
                    className="card-media"
                    image={course.courseImageUrl}
                    alt={course.courseName}
                  />
                )}
                <CardContent className="card-content">
                  <Typography variant="h6" component="div">
                    {course.courseName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Difficulty: {course.difficultyLevel}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Start Date: {course.startDate}
                  </Typography><br/>
                  <Typography variant="body2" color="text.secondary">
                   <Button variant='contained' onClick={(e) => { 
                       e.stopPropagation(); 
                       handleEnroll(course); 
                     }}>
                     Enroll now
                   </Button>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      )}

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          Course Details
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedCourse && (
            <div>
              <Typography variant="h6">{selectedCourse.courseName}</Typography>
              <Typography variant="body1" paragraph>
                <strong>Difficulty Level:</strong> {selectedCourse.difficultyLevel}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Start Date:</strong> {selectedCourse.startDate}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>End Date:</strong> {selectedCourse.endDate}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Seats Available:</strong> {selectedCourse.seats - selectedCourse.enrolled}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Prerequisites:</strong> {selectedCourse.prerequisites.join(', ')}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Syllabus:</strong> {selectedCourse.syllabus.join(', ')}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Schedule:</strong> {selectedCourse.schedule.join(', ')}
              </Typography>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default CourseList;
