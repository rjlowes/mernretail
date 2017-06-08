import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import HomePage from '../modules/home/HomePage';
import ProductListPage from '../modules/catalogue/ProductListPage';
import ProductDetailsPage from '../modules/catalogue/ProductDetailsPage';

import Header from './partials/Header';


export default class MainLayout extends Component {
	constructor(props) {
		super(props);
		console.log('main layout');
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
					</main>

				</div>
			</Router>
		);
	}
}
