import {combineReducers} from 'redux';

import customers from './customerReducers';
import categories from './categoryReducers';
import addresses from './addressReducers';


const ecomApp = combineReducers({
	customers,
	categories,
    addresses
});

export default ecomApp;

