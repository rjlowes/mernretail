import {createStore} from 'redux';

import ecomApp from 'lib/redux/reducers/index';

// let store = createStore(ecomApp, 'INITIAL_STATE');

let store = createStore(ecomApp);


export default store;


// export default function configureStore(initialState) {
// 	return createStore(rootReducer, initialState);
// }

