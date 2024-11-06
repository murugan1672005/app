// reducers/courseReducer.js
import { FETCH_COURSES_SUCCESS, SET_FILTER, APPLY_FILTER } from '../actions/CourseActions';

const initialState = {
  allCourses: [],
  filteredCourses: [],
  filterType: '',
  filterValue: '',
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        allCourses: action.payload,
        filteredCourses: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filterType: action.payload.filterType,
        filterValue: action.payload.filterValue,
      };
    case APPLY_FILTER:
      const { filterType, filterValue } = state;
      let filteredCourses = state.allCourses;

      console.log('Applying Filter - Type:', filterType, 'Value:', filterValue);

      if (filterType && filterValue) {
        filteredCourses = state.allCourses.filter(course => {
          if (filterType === 'difficulty') {
            return course.difficultyLevel?.toString().toLowerCase().includes(filterValue.toLowerCase());
          } else if (filterType === 'categories') {
            return course.categories.some(category =>
              category.toString().toLowerCase().includes(filterValue.toLowerCase())
            );
          } else if (filterType === 'startDate') {
            return course.startDate?.toString().toLowerCase().includes(filterValue.toLowerCase());
          } else {
            // Handle other filter types or default case
            return course[filterType]?.toString().toLowerCase().includes(filterValue.toLowerCase());
          }
        });
      } else {
        // Default filtering by course name if no filterType is set
        filteredCourses = state.allCourses.filter(course =>
          course.courseName?.toString().toLowerCase().includes(filterValue.toLowerCase())
        );
      }

      console.log('Filtered Courses:', filteredCourses);

      return {
        ...state,
        filteredCourses,
      };
    default:
      return state;
  }
};

export default courseReducer;
