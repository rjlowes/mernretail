import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import RegisterForm from 'lib/forms/auth/RegisterForm';


export default class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {customer: {email: null, password: null, title: null, firstname: null, lastname: null}};
        this.state = {customer: {email: 'test@example.com', password: 'password', title: 'Mr', firstname: 'John', lastname: 'Smith'}};

        this.submitCustomer = this.submitCustomer.bind(this);
    }

    submitCustomer() {
        console.log('submit registration request');
        let headers = new Headers({'Content-Type': 'application/json'});
        let request = new Request('/api/register', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(this.state.customer)
        });

        fetch(request)
            .then((response) => response.json())
            .then(data => {
                console.log('data: ', data);
            }).catch(err => {
                console.log('err ', err);
            })
    }


    render() {
        return (
            <div className="container">
                <RegisterForm customer={this.state.customer} submitCustomer={this.submitCustomer} />
            </div>
        );
    }
}