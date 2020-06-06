import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import TEST_authReducer from './TEST_authReducer';

export default combineReducers({
	alert,
	auth,
	profile,
	post,
	TEST_authReducer
});
