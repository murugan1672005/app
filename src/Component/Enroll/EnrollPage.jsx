import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box, Divider, Button, Paper, Grid } from '@mui/material';
import { enrollCourse } from '../Courses/CourseActions';
import { motion } from 'framer-motion';

const EnrollPage = () => {
    const { coursename } = useParams();
    const decodedCoursename = decodeURIComponent(coursename);
    const courses = useSelector(state => state.filter.courses);
    console.log(courses);  

    const selectedCourse = courses.find(course => course.name === decodedCoursename);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!selectedCourse) {
        return <Typography variant="h6">Course not found</Typography>;
    }

    const handleEnroll = () => {
        if ((selectedCourse.enrolled || 0) < selectedCourse.seats) {
            dispatch(enrollCourse(selectedCourse.name));
            alert('You are enrolled');
            navigate('/courses');
        } else {
            alert('No seats available');
        }
    };

    return (
        <Box sx={{ padding: 2 }}>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Paper elevation={3} sx={{ padding: 3, marginBottom: 2 }}>
                    <Typography variant="h4" component="div" gutterBottom>
                         {selectedCourse.name}
                    </Typography>
                    <Divider sx={{ marginY: 2 }} />
                    <Typography variant="h6" component="div" gutterBottom>
                        Seats Available: {selectedCourse.seats - (selectedCourse.enrolled || 0)}
                    </Typography>
          
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleEnroll}
                            disabled={(selectedCourse.enrolled || 0) >= selectedCourse.seats}   >
                            Enroll
                        </Button>
              
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => navigate('/courses')}
                       sx={{marginLeft:"5px"}}
                    >
                        Back to Courses
                    </Button>
                </Paper>

                <Paper elevation={3} sx={{ padding: 3 }}>
                    <Typography variant="h5" component="div" gutterBottom>
                        Course Details
                    </Typography>
                    <Divider sx={{ marginY: 2 }} />
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="div" gutterBottom>
                                Dates
                            </Typography>
                            <Typography variant="body1">
                                {selectedCourse.dates.start} to {selectedCourse.dates.end}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="div" gutterBottom>
                                Syllabus
                            </Typography>
                            {selectedCourse.syllabus.map((item, i) => (
                                <Typography key={i} variant="body1">
                                    {item}
                                </Typography>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="div" gutterBottom>
                                Schedule
                            </Typography>
                            <Typography variant="body1">
                                Lectures: {selectedCourse.schedule.lectures}<br />
                                Labs: {selectedCourse.schedule.labs}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="div" gutterBottom>
                                Prerequisites
                            </Typography>
                            <Typography variant="body1">
                                {selectedCourse.prerequisites.join(', ')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="div" gutterBottom>
                                Instructors
                            </Typography>
                            <Typography variant="body1">
                                {selectedCourse.instructors.join(', ')}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="div" gutterBottom>
                                Difficulty Level
                            </Typography>
                            <Typography variant="body1">
                                {selectedCourse.difficulty_level}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </motion.div>
        </Box>
    );
};

export default EnrollPage;
