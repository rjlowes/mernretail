import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Navigation from 'lib/navigation/Navigation';


export default class Header extends Component {

	render() {
		return (
			<header className="global-header">

                <button id="main-menu-open" className="global-header__menu-btn fx-pipes">
                    <span className="fx-pipes__bottom"></span>
                    <span className="fx-pipes__top"></span>
                    <span className="fx-pipes__left"></span>
                    <span className="fx-pipes__right"></span>
                </button>

                <button id="shopping-basket-open" className="global-header-basket-btn fx-pipes">
                    <span className="fx-pipes__bottom"></span>
                    <span className="fx-pipes__top"></span>
                    <span className="fx-pipes__left"></span>
                    <span className="fx-pipes__right"></span>
                </button>

                <div className="global-header__navigation">
                    <Navigation />
                </div>

                <div className="navbar__basket">
                    mini basket...
                </div>

                <div className="global-header__logo">
                    <Link to="/" className="logo" href="#/">
                        <img src="/images/logo2.png" className="img-responsive" />
                    </Link>
                </div>
			</header>
		);
	}
}