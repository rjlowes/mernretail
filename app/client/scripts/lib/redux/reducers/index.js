import {combineReducers} from 'redux';

import customers from './customerReducers';
import categories from './categoryReducers';


const ecomApp = combineReducers({
	customers,
	categories
});

export default ecomApp;

