import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import LoginForm from 'lib/forms/auth/LoginForm';


export default class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {user: {email: null, password: null}};

        this.submitLogin = this.submitLogin.bind(this);
    }

    submitLogin() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let request = new Request('/api/login', {
            method: 'POST',
            headers: headers
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
                <LoginForm user={this.state.user} parentSubmit={this.submitLogin} />
            </div>
        );
    }
}