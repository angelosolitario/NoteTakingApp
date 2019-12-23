import { combineReducers } from 'redux';
import notesReducer from './notesReducer.js';
import userReducer from './userReducer';

export default combineReducers({
  notesReducer,
  userReducer,
});