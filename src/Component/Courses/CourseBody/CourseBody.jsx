import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dna from '../../../Assests/cs.jpeg';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Dialog,
    DialogContent,
    IconButton,
    Button,
    Divider,
    Box,
    useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

const CourseBody = () => {
    const theme = useTheme();
    const courses = useSelector(state => state.filter.courses);
    const filterType = useSelector(state => state.filter.filterType);
    const filterValue = useSelector(state => state.filter.filterValue);
    const searchValue = useSelector(state => state.filter.searchValue);

    const [selectedCourse, setSelectedCourse] = useState(null);
    const navigate = useNavigate();

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchValue.toLowerCase());

        let matchesFilter = true;
        if (filterType && filterValue) {
            switch (filterType) {
                case 'category':
                    matchesFilter = course.categories.some(cat => cat.toLowerCase().includes(filterValue.toLowerCase()));
                    break;
                case 'date':
                    const startDate = new Date(course.dates.start);
                    const endDate = new Date(course.dates.end);
                    const filterDate = new Date(filterValue);
                    matchesFilter = filterDate >= startDate && filterDate <= endDate;
                    break;
                case 'difficulty':
                    matchesFilter = course.difficulty_level.toLowerCase().includes(filterValue.toLowerCase());
                    break;
                case 'instructor':
                    matchesFilter = course.instructors.some(inst => inst.toLowerCase().includes(filterValue.toLowerCase()));
                    break;
                default:
                    matchesFilter = true;
                    break;
            }
        }

        return matchesSearch && matchesFilter;
    });

    const handleCardClick = (course) => {
        setSelectedCourse(course);
    };

    const handleClose = () => {
        setSelectedCourse(null);
    };

    const handleEnrollClick = (course) => {
        navigate(`/enroll/${encodeURIComponent(course.name)}`);
    };

    return (
        <div className='course-body'>
            <Grid container spacing={3}>
                {filteredCourses.map((course, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Card
                                onClick={() => handleCardClick(course)}
                                sx={{ cursor: 'pointer', transition: '0.3s', boxShadow: 3 }}
                            >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={dna}
                                    alt={course.name}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {course.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {course.categories.join(', ')}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {course.difficulty_level}
                                    </Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEnrollClick(course);
                                        }}
                                        sx={{ marginTop: 1 }}
                                    >
                                        Enroll
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            {selectedCourse && (
                <Dialog
                    open={Boolean(selectedCourse)}
                    onClose={handleClose}
                    fullWidth
                    maxWidth="md"
                >
                    <DialogContent>
                        <Box sx={{ position: 'relative', padding: 2 }}>
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                                sx={{ position: 'absolute', right: 8, top: 8, color: theme => theme.palette.grey[500] }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h5" component="div" gutterBottom>
                                {selectedCourse.name}
                            </Typography>
                            <Divider sx={{ marginY: 2 }} />
                            <Box>
                                <Typography variant="h6" component="div" gutterBottom>
                                    Dates
                                </Typography>
                                <Typography variant="body1">
                                    {selectedCourse.dates.start} to {selectedCourse.dates.end}
                                </Typography>
                                <Divider sx={{ marginY: 2 }} />
                                <Typography variant="h6" component="div" gutterBottom>
                                    Syllabus
                                </Typography>
                                {selectedCourse.syllabus.map((item, i) => (
                                    <Typography key={i} variant="body1">
                                        {item}
                                    </Typography>
                                ))}
                                <Divider sx={{ marginY: 2 }} />
                                <Typography variant="h6" component="div" gutterBottom>
                                    Schedule
                                </Typography>
                                <Typography variant="body1">
                                    Lectures: {selectedCourse.schedule.lectures}<br />
                                    Labs: {selectedCourse.schedule.labs}
                                </Typography>
                                <Divider sx={{ marginY: 2 }} />
                                <Typography variant="h6" component="div" gutterBottom>
                                    Prerequisites
                                </Typography>
                                <Typography variant="body1">
                                    {selectedCourse.prerequisites.join(', ')}
                                </Typography>
                                <Divider sx={{ marginY: 2 }} />
                                <Typography variant="h6" component="div" gutterBottom>
                                    Instructors
                                </Typography>
                                <Typography variant="body1">
                                    {selectedCourse.instructors.join(', ')}
                                </Typography>
                                <Divider sx={{ marginY: 2 }} />
                                <Typography variant="h6" component="div" gutterBottom>
                                    Difficulty Level
                                </Typography>
                                <Typography variant="body1">
                                    {selectedCourse.difficulty_level}
                                </Typography>
                            </Box>
                        </Box>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default CourseBody;
