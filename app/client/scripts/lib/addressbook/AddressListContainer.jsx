import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import AddressList from 'lib/addressbook/AddressList';

<<<<<<< HEAD
import store from 'lib/redux/store';
import {connect} from 'react-redux';

import {fetchAddressList} from 'lib/redux/addressbook/fetchAddressListActions';

// @connect((store) => {
//     return {
//         addressbook: store.addresses.addressbook
//     };
// })
=======

>>>>>>> c6ee886d1de3fa18295bb3e7f11e4525e1e7a9d3
export default class AddressListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {addresses: []};
    }

    componentDidMount() {
        let dummyAddresses = [{
            title: 'Mr',
            firstname: 'John',
            lastname: 'Smith',
            address1: '1 Crendon Street',
            address2: '',
            address3: '',
            townCity: 'High Wycombe',
            county: 'Bucks',
            country: 'United Kingdom',
            postcode: 'TE456ST',
            telephone: '07788666555'
        }];
        
<<<<<<< HEAD
        //this.setState({addresses: dummyAddresses});
        store.dispatch(fetchAddressList());
=======
        this.setState({addresses: dummyAddresses});
>>>>>>> c6ee886d1de3fa18295bb3e7f11e4525e1e7a9d3
    }

    render() {

<<<<<<< HEAD
        console.log(store.getState());

        console.log('rending....');
        console.log(this.props.addressbook);

=======
>>>>>>> c6ee886d1de3fa18295bb3e7f11e4525e1e7a9d3
        return (
            <AddressList addresses={this.state.addresses} />
        )
    }
}