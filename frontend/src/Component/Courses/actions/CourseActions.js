// actions/courseActions.js
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const SET_FILTER = 'SET_FILTER';
export const APPLY_FILTER = 'APPLY_FILTER';

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const setFilter = (filterType, filterValue) => ({
  type: SET_FILTER,
  payload: { filterType, filterValue },
});

export const applyFilter = () => ({
  type: APPLY_FILTER,
});
