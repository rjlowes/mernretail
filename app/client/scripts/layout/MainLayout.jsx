import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from './partials/Header';


export default class MainLayout extends Component {
	constructor(props) {
		super(props);
		console.log('main layout');
	}
	render() {
		return (
			<div className="containerxx">
				<Header />
				<header>
					<ul className="list-nav">
						<li className="list-nav__item"><Link to="/" className="list-nav__item-link">Home</Link></li>
	                    <li className="list-nav__item"><Link to="/plp/mens-tees">Projects</Link></li>
	                    <li className="list-nav__item"><Link to="/pdp/alien-icon-tee">Project 1</Link></li>
					</ul>
				</header>
				{this.props.children}


			</div>
		);
	}
}
