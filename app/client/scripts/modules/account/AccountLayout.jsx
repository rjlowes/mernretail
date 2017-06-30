import React, {Component} from 'react';


export default class AddressLayout extends Component {

    render() {
        return (
            <section className="container">
                <header>
                    <h1>My Account</h1>
                </header>
                <div className="row">
                    <nav className="col-sm-2">
                        <h2 className="type-sml">What can we do for you?</h2>
                        <ul>
                            <li><a href="">Address book</a></li>
                            <li><a href="">Your details</a></li>
                            <li><a href="">Your email</a></li>
                            <li><a href="">Your password</a></li>
                            <li><a href="">My orders</a></li>
                            <li><a href="">My Subscriptions</a></li>
                        </ul>
                    </nav>
                    <div className="col-sm-10">
                        {this.props.children}
                    </div>
                </div>
            </section>
        )
    }
}