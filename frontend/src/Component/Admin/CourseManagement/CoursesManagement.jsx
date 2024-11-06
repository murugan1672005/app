import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Box,
  TablePagination,
  TextField,
  Button,
  IconButton,
  Modal
} from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { Delete, Edit, Save, Cancel, Close } from '@mui/icons-material';
import './CourseManagement.css'; // Import the CSS file

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: 14,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: '#e3f2fd', // Light blue for hover
  },
}));

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(null);
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    categories: [],
    syllabus: [],
    prerequisites: [],
    difficultyLevel: '',
    seats: 0,
    startDate: '',
    endDate: '',
    schedule: [],
    courseImageUrl: '' 
  });

  const [editCourse, setEditCourse] = useState({
    courseName: '',
    categories: [],
    syllabus: [],
    prerequisites: [],
    difficultyLevel: '',
    seats: 0,
    startDate: '',
    endDate: '',
    schedule: [],
    enrolled: 0,
    courseImageUrl: '' 
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5454/adminuser/courses/list', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setCourses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
        setLoading(false);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleInputChange = (e, courseId, field) => {
    const value = e.target.value;
    setEditCourse({ ...editCourse, [field]: value });
  };

  const handleEdit = (course) => {
    setEditCourse(course);
    setShowEditForm(course.courseId);
  };

  const handleSave = (courseId) => {
    const token = localStorage.getItem('token');
    const updatedCourse = { ...editCourse };

    axios.put(`http://localhost:5454/admin/courses/update/${courseId}`, updatedCourse, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setCourses(courses.map(course => 
          course.courseId === courseId ? response.data : course
        ));
        setShowEditForm(null);
      })
      .catch(error => {
        console.error('Error saving course:', error);
      });
  };

  const handleCancel = () => {
    setShowEditForm(null);
  };

  const handleDelete = (courseId) => {
    const token = localStorage.getItem('token');
    axios.delete(`http://localhost:5454/admin/courses/delete/${courseId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        setCourses(courses.filter(course => course.courseId !== courseId));
      })
      .catch(error => {
        console.error('Error deleting course:', error);
      });
  };

  const handleNewCourseChange = (e) => {
    const { name, value } = e.target;
    if (name === 'categories' || name === 'syllabus' || name === 'prerequisites' || name === 'schedule') {
      // Convert comma-separated string to array
      setNewCourse({ ...newCourse, [name]: value.split(',').map(item => item.trim()) });
    } else {
      setNewCourse({ ...newCourse, [name]: value });
    }
  };

  const handleAddCourse = async() => {
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5454/admin/courses/create', newCourse, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setCourses([...courses, response.data]);
        setShowAddForm(false);
        window.location.reload();
        setNewCourse({
          courseName: '',
          categories: [],
          syllabus: [],
          prerequisites: [],
          difficultyLevel: '',
          seats: 0,
          startDate: '',
          endDate: '',
          schedule: [],
          courseImageUrl: ''
        });
      })
      .catch(error => {
        console.error('Error adding course:', error);
      });
  };

  return (
    <Container className="container">
      <Typography variant="h4" className="title">
        Course Management
      </Typography>

      <Modal
        open={showAddForm}
        onClose={() => setShowAddForm(false)}
        aria-labelledby="add-course-modal-title"
        aria-describedby="add-course-modal-description"
      >
        <Box className="modal-overlay">
          <Paper elevation={3} className="modal-content">
            <IconButton className="modal-close-button" onClick={() => setShowAddForm(false)}>
              <Close />
            </IconButton>
            <h3>Add New Course</h3>
            <TextField
              name="courseName"
              label="Course Name"
              value={newCourse.courseName}
              onChange={handleNewCourseChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="categories"
              label="Categories (comma separated)"
              value={newCourse.categories.join(', ')}
              onChange={handleNewCourseChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="syllabus"
              label="Syllabus (comma separated)"
              value={newCourse.syllabus.join(', ')}
              onChange={handleNewCourseChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="prerequisites"
              label="Prerequisites (comma separated)"
              value={newCourse.prerequisites.join(', ')}
              onChange={handleNewCourseChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="difficultyLevel"
              label="Difficulty Level"
              value={newCourse.difficultyLevel}
              onChange={handleNewCourseChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="seats"
              label="Seats"
              type="number"
              value={newCourse.seats}
              onChange={handleNewCourseChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="startDate"
              label="Start Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={newCourse.startDate}
              onChange={handleNewCourseChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="endDate"
              label="End Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={newCourse.endDate}
              onChange={handleNewCourseChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="schedule"
              label="Schedule (comma separated)"
              value={newCourse.schedule.join(', ')}
              onChange={handleNewCourseChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="courseImageUrl"
              label="Course Image URL"
              value={newCourse.courseImageUrl}
              onChange={handleNewCourseChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleAddCourse} sx={{ mt: 2 }}>
              Add Course
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => setShowAddForm(false)} sx={{ mt: 2, ml: 1 }}>
              Cancel
            </Button>
          </Paper>
        </Box>
      </Modal>

      {showEditForm && (
        <Modal
          open={showEditForm !== null}
          onClose={() => setShowEditForm(null)}
          aria-labelledby="edit-course-modal-title"
          aria-describedby="edit-course-modal-description"
        >
          <Box className="modal-overlay">
            <Paper elevation={3} className="modal-content">
              <IconButton className="modal-close-button" onClick={() => setShowEditForm(null)}>
                <Close />
              </IconButton>
              <h3>Edit Course</h3>
              <TextField
                label="Course Name"
                value={editCourse.courseName}
                onChange={(e) => handleInputChange(e, editCourse.courseId, 'courseName')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Categories (comma separated)"
                value={editCourse.categories.join(', ')}
                onChange={(e) => handleInputChange(e, editCourse.courseId, 'categories')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Syllabus (comma separated)"
                value={editCourse.syllabus.join(', ')}
                onChange={(e) => handleInputChange(e, editCourse.courseId, 'syllabus')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Prerequisites (comma separated)"
                value={editCourse.prerequisites.join(', ')}
                onChange={(e) => handleInputChange(e, editCourse.courseId, 'prerequisites')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Difficulty Level"
                value={editCourse.difficultyLevel}
                onChange={(e) => handleInputChange(e, editCourse.courseId, 'difficultyLevel')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Seats"
                type="number"
                value={editCourse.seats}
                onChange={(e) => handleInputChange(e, editCourse.courseId, 'seats')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Start Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={editCourse.startDate}
                onChange={(e) => handleInputChange(e, editCourse.courseId, 'startDate')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="End Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={editCourse.endDate}
                onChange={(e) => handleInputChange(e, editCourse.courseId, 'endDate')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Schedule (comma separated)"
                value={editCourse.schedule.join(', ')}
                onChange={(e) => handleInputChange(e, editCourse.courseId, 'schedule')}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Course Image URL"
                value={editCourse.courseImageUrl}
                onChange={(e) => handleInputChange(e, editCourse.courseId, 'courseImageUrl')}
                fullWidth
                margin="normal"
              />
              <Button variant="contained" color="primary" onClick={() => handleSave(editCourse.courseId)} sx={{ mt: 2 }}>
                Save
              </Button>
              <Button variant="outlined" color="secondary" onClick={handleCancel} sx={{ mt: 2, ml: 1 }}>
                Cancel
              </Button>
            </Paper>
          </Box>
        </Modal>
      )}

      <Button variant="contained" color="primary" onClick={() => setShowAddForm(true)} sx={{ mb: 2 }}>
        Add Course
      </Button>

      {(loading ||courses==null)? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Course Name</StyledTableCell>
                <StyledTableCell>Categories</StyledTableCell>
                <StyledTableCell>Syllabus</StyledTableCell>
                <StyledTableCell>Prerequisites</StyledTableCell>
                <StyledTableCell>Difficulty Level</StyledTableCell>
                <StyledTableCell>Seats</StyledTableCell>
                <StyledTableCell>Start Date</StyledTableCell>
                <StyledTableCell>End Date</StyledTableCell>
                <StyledTableCell>Schedule</StyledTableCell>
                <StyledTableCell>Course Image</StyledTableCell> {/* New column for course image */}
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((course) => (
                <StyledTableRow key={course.courseId}>
                  <TableCell>{course.courseName}</TableCell>
                  <TableCell>{course.categories.join(', ')}</TableCell>
                  <TableCell>{course.syllabus.join(', ')}</TableCell>
                  <TableCell>{course.prerequisites.join(', ')}</TableCell>
                  <TableCell>{course.difficultyLevel}</TableCell>
                  <TableCell>{course.seats}</TableCell>
                  <TableCell>{new Date(course.startDate).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(course.endDate).toLocaleDateString()}</TableCell>
                  <TableCell>{course.schedule.join(', ')}</TableCell>
                  <TableCell>
                    <img src={course.courseImageUrl} alt={course.courseName} style={{ width: 100, height: 60, objectFit: 'cover' }} />
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(course)}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(course.courseId)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={courses.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}
    </Container>
  );
};

export default CourseManagement;
