import {
<<<<<<< HEAD
    ADDRESSES_LIST_REQUEST, 
    ADDRESSES_LIST_SUCCESS,
=======
    REQUEST_ADDRESSES, 
    RECEIVE_ADDRESSES,
>>>>>>> c6ee886d1de3fa18295bb3e7f11e4525e1e7a9d3
    CREATE_ADDRESS_REQUEST,
    CREATE_ADDRESS_SUCCESS,
    CREATE_ADDRESS_FAILURE
} from './addressReducers';


const defaultState = {
    isFetching: false,
    addresses: []
}

function addresses(state = defaultState, action) {
    switch(action.type) {
<<<<<<< HEAD
        case ADDRESSES_LIST_REQUEST:
=======
        case REQUEST_ADDRESSES:
>>>>>>> c6ee886d1de3fa18295bb3e7f11e4525e1e7a9d3
            return {
                ...state,
                isFetching: true
            };
<<<<<<< HEAD
        case ADDRESSES_LIST_SUCCESS:
=======
        case RECEIVE_ADDRESSES:
>>>>>>> c6ee886d1de3fa18295bb3e7f11e4525e1e7a9d3
            return {
                ...state,
                isFetching: false,
                addresses: action.addresses,
                receivedAt: action.receivedAt
            };
        case CREATE_ADDRESS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case CREATE_ADDRESS_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        case CREATE_ADDRESS_FAILURE:
            return {
                ...state,
                isFetching: false
            }
        default: 
            return state;
    }
}

export default addresses;