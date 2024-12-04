import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyFilter, setFilter } from './actions/CourseActions';
import {
  Container,
  Grid,
  TextField,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  IconButton
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import { useSpring, animated } from 'react-spring';
import './CoursesFilter.css'

const CourseFilter = () => {
  const dispatch = useDispatch();
  const filterType = useSelector(state => state.courses.filterType);
  const filterValue = useSelector(state => state.courses.filterValue);

  const filterAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 }
  });

  const handleFilterTypeChange = (e) => {
    dispatch(setFilter(e.target.value, filterValue));
  };

  const handleFilterValueChange = (e) => {
    dispatch(setFilter(filterType, e.target.value));
  };

  const handleApplyFilter = () => {
    dispatch(applyFilter());
  };

  return (
    <Container  className="course-filter">
      <animated.div style={filterAnimation}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <h1 style={{color:"blue",fontFamily:"cursive",fontStyle:"italic"}}>Courses</h1>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              value={filterValue}
              onChange={handleFilterValueChange}
              placeholder={`Filter by ${filterType}`}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleApplyFilter}>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} className="filter-container">
            <FormControl fullWidth variant="outlined">
              <InputLabel>Filter Type</InputLabel>
              <Select
                value={filterType}
                onChange={handleFilterTypeChange}
                label="Filter Type"
              >
                <MenuItem value="">Select Filter Type</MenuItem>
                <MenuItem value="categories">Category</MenuItem>
                <MenuItem value="startDate">Start Date</MenuItem>
                <MenuItem value="difficulty">Difficulty</MenuItem>
              </Select>
            </FormControl>
            <IconButton
              className="filter-icon"
              onClick={handleApplyFilter}
              color="primary"
            >
              <FilterListIcon />
            </IconButton>
          </Grid>
        </Grid>
      </animated.div>
    </Container>
  );
};

export default CourseFilter;
