import currentUser from './currentUser';
import companyUrl from './companyUrl';
import employeCode from './employeCode';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  currentUser,
  companyUrl,
  employeCode,
});

export default rootReducer;
