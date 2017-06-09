import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import HomePage from '../modules/home/HomePage';
import ProductListPage from '../modules/catalogue/ProductListPage';
import ProductDetailsPage from '../modules/catalogue/ProductDetailsPage';
import LoginPage from 'modules/authentication/LoginPage';
import RegisterPage from 'modules/authentication/RegisterPage';

import Header from './partials/Header';


export default class MainLayout extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div>
					<Header />
					<main>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/category/:categoryId" component={ProductListPage} />
						<Route exact path="/products/:productId" component={ProductDetailsPage} />
						<Route exact path="/secure/login" component={LoginPage} />
						<Route exact path="/secure/register" component={RegisterPage} />
					</main>

				</div>
			</Router>
		);
	}
}
