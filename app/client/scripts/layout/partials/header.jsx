import React, {Component} from 'react';

import Navigation from 'lib/navigation/Navigation';


export default class Header extends Component {

	

	render() {
		return (
			<header className="navbar">
                <div className="navbar__btn">
                    <div id="hamburger" className="hamburglar">
                        <div className="burger-icon">
                            <div className="burger-container">
                                <span className="burger-bun-top"></span>
                                <span className="burger-filling"></span>
                                <span className="burger-bun-bot"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar__logo">
                    <a className="logo" href="#/">
                        <img src="/images/logo2.png" className="img-responsive" />
                    </a>
                </div>
                <nav className="navbar__menu">

                    <div className="navbar__search"></div>
                </nav>
				<Navigation />
			</header>


		);
	}
}