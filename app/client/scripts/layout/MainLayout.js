import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class MainLayout extends Component {
	constructor(props) {
		super(props);
		console.log('main layout');
	}
	render() {
		return (
			<div className="container">
				<header>
					<ul className="list-nav">
						<li className="list-nav__item"><Link to="/" className="list-nav__item-link">Home</Link></li>
	                    <li className="list-nav__item"><Link to="/plp">Projects</Link></li>
	                    <li className="list-nav__item"><Link to="/pdp">Project 1</Link></li>
					</ul>
				</header>
				{this.props.children}
			</div>
		);
	}
}
