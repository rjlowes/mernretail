import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import MainLayout from '../layout/MainLayout';
import HomePage from '../modules/home/HomePage';
import ProductListPage from '../modules/catalogue/ProductListPage';
import ProductDetailsPage from '../modules/catalogue/ProductDetailsPage';


export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<MainLayout>
						<h1>Hello, World!</h1>
					</MainLayout>
					<main>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/plp/:categoryId" component={ProductListPage} />
					<Route exact path="/pdp/:productId" component={ProductDetailsPage} />
					</main>
				</div>
			</Router>
		);
	}
}