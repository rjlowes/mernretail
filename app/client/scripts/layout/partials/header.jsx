import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Menu from 'lib/navigation/Menu';
import MenuButton from 'lib/buttons/MenuButton';
import AccountLinks from 'layout/partials/AccountLinks';

import store from 'lib/redux/store';
import {connect} from 'react-redux';


@connect((store) => {
    return {
        customer: store.customers.customer
    };
})
export default class Header extends Component {

    // componentDidMount() {
    //     store.subscribe(() => {
    //         console.log(store.getState());
    //     });
    // }

	render() {
        
		return (
			<header className="g-header">

                <MenuButton open={true} />

                <AccountLinks customer={this.props.customer} />

                <div className="g-header__navigation">
                    <Menu />
                </div>

                <div className="g-header__logo">
                    <Link to="/" className="logo" href="#/">
                        <img src="/images/logo2.png" className="img-responsive" />
                    </Link>
                </div>

                <div className="g-header__session">
                    basket etc
                </div>
			</header>
		);
	}
}