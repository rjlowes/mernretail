import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class RegisterPage extends Component {


    render() {
        return (
            <div className="container">
                <form method="post" action="">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" name="email" id="email" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" id="password" className="form-input" />
                    </div>
                    <button type="submit" className="btn">Register</button>
                </form>
            </div>
        );
    }
}