export const SET_FILTER_TYPE = 'SET_FILTER_TYPE';
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
export const setFilterType = (filterType) => ({
    type: SET_FILTER_TYPE,
    payload: filterType,
});

export const setFilterValue = (filterValue) => ({
    type: SET_FILTER_VALUE,
    payload: filterValue,
});

export const setSearchValue = (searchValue) => ({
    type: SET_SEARCH_VALUE,
    payload: searchValue,
});

export const ENROLL_COURSE = 'ENROLL_COURSE';

export const enrollCourse = (courseName) => ({
    type: ENROLL_COURSE,
    payload: courseName,
});
