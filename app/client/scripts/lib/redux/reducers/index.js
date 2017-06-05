import {combineReducers} from 'redux';

import users from './userReducers';
import categories from './categoryReducers';


const ecomApp = combineReducers({
	users,
	categories
});

export default ecomApp;

