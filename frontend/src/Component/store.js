import { createStore, combineReducers } from 'redux';
import progressReducer from './Progress/ProgressReducers';
import userReducer from './SignIn/userReducer/userReducer';
import courseReducer from './Courses/reducers/CourseReducer';
const rootReducer = combineReducers({

  progress: progressReducer,

  courses:courseReducer,
  user: userReducer
  
});
const store = createStore(rootReducer);
export default store;
