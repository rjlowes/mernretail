export const REQUEST_ADDRESSES = "REQUEST_ADDRESSES";
function requestAddresses() {
    return {
        type: REQUEST_ADDRESSES
    };
}

export const RECEIVE_ADDRESSES = "RECEIVE_ADDRESSES";
function receiveAddresses(json) {
    return {
        type: RECEIVE_ADDRESSES,
        addresses: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    };
}


export function fetchAddresses() {
    return function(dispatch) {
        dispatch(requestAddresses());
        
        return fetch('/api/customer/addressbook')
            .then(response => response.json, error => console.log('An error occurred ', error))
            .then(json => dispatch(receiveAddresses(json)));
    }
}


export const CREATE_ADDRESS_REQUEST = "CREATE_ADDRESS_REQUEST";
export const CREATE_ADDRESS_SUCCESS = "CREATE_ADDRESS_SUCCESS";
export const CREATE_ADDRESS_FAILURE = "CREATE_ADDRESS_FAILURE";

function createAddressRequest() {
    console.info('createAddressRequest');
    return {
        type: CREATE_ADDRESS_REQUEST
    };
}

function createAddressSuccess(json) {
    console.info('createAddressSuccess', json);
    return {
        type: CREATE_ADDRESS_SUCCESS
    };
}

function createAddressFailure(err) {
    console.info('createAddressFailure', err);
    return {
        type: CREATE_ADDRESS_FAILURE
    };
}

export function createAddress(address) {
    return function(dispatch) {
        dispatch(createAddressRequest());

        return fetch('/api/customer/addressbook')
            .then(response => response.json, error => console.log('An error occurred ', error))
            .then(json => dispatch(receiveAddresses(json)));
            
        // return fetch('/api/customer/addressbook', {method: 'POST'})
        //     .then(response => response.json, err => dispatch(createAddressFailure(err))
        //     .then(json => dispatch(createAddressSuccess(json)));
    }
}