import { createStore, combineReducers } from 'redux';
import CourseReducer from './Courses/CourseReducer';
const rootReducer = combineReducers({
  filter: CourseReducer,
});
const store = createStore(rootReducer);
export default store;
