import React, {Component} from 'react';

import AddressForm from 'lib/form/AddressForm';

import store from 'lib/redux/store';
import {createAddress} from 'lib/redux/actions/addressActions';

export default class AddressFormContainer extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // testing async store action
        let address = {
            title: 'Mr',
            firstname: 'John',
            lastname: 'Smith',
            telephone: '05564333333',
            address1: 'Add 1',
            townCity: 'High Wycombe',
            county: 'Bucks',
            postcode: 'TE456ST',
            country: 'United Kingdom'
        }
<<<<<<< HEAD
        store.dispatch(createAddress(address))
=======
        store.dispatch(createAddress())
>>>>>>> c6ee886d1de3fa18295bb3e7f11e4525e1e7a9d3
    }

    submit() {
        
    }

    handleChange() {

    }

    render() {

        return (<AddressForm submit={this.submit} handleInputChange={this.handleChange} />)
    }
}
