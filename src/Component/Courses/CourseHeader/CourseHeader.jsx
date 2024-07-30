import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import { setFilterType, setFilterValue, setSearchValue } from '../CourseActions'; // Adjust path as necessary
import '../Courses.css';

const CourseHeader = () => {
    const dispatch = useDispatch();
    const filterType = useSelector(state => state.filter.filterType);
    const filterValue = useSelector(state => state.filter.filterValue);
    const searchValue = useSelector(state => state.filter.searchValue); // Use selector for search value
    const [localSearchValue, setLocalSearchValue] = useState(searchValue);

    // Effect to handle search and filter value updates
    useEffect(() => {
        if (filterType) {
            dispatch(setFilterValue(localSearchValue));
        } else {
            dispatch(setSearchValue(localSearchValue));
        }
    }, [localSearchValue, filterType, dispatch]);

    const handleFilterTypeChange = (event) => {
        const value = event.target.value;
        setLocalSearchValue(''); // Clear search input when filter type changes
        dispatch(setFilterType(value));
        if (value === '') {
            dispatch(setFilterValue('')); // Clear filter value if filter type is cleared
        }
    };

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setLocalSearchValue(value);
    };

    return (
        <div className='header'>
            <div className='title'>
                <h1> All Courses</h1>
            </div>
            <div className='search-bar'>
                <div className='search-container'>
                    <SearchIcon className='search-icon' />
                    <input
                        type='search'
                        placeholder={`Enter Course Name${filterType ? ` or ${filterType}` : ''}`}
                        value={localSearchValue}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>
            <div className='filter'>
                {filterType ? <FilterListIcon className='filter-icon' /> : <FilterListOffIcon className='filter-icon' />}
                <select value={filterType} onChange={handleFilterTypeChange}>
                    <option value="">Select...</option>
                    <option value="category">Category</option>
                    <option value="date">Date</option>
                    <option value="difficulty">Difficulty</option>
                    <option value="instructor">Instructor</option>
                </select>
            </div>
        </div>
    );
};

export default CourseHeader;
