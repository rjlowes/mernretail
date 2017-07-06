import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import AddressList from 'lib/addressbook/AddressList';


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
        
        this.setState({addresses: dummyAddresses});
    }

    render() {

        return (
            <AddressList addresses={this.state.addresses} />
        )
    }
}