import React, {Component} from 'react';

import ProductList from 'lib/catalogue/ProductList';


export default class ProductListPage extends Component {

	constructor(props) {
		super(props);
		this.state = {products: []};
	}

	componentDidMount() {
		this.fetchProducts();
	}
	
	fetchProducts() {
		let url = '/api/categories/' + this.props.match.params.categoryId + '/products';
		
		fetch(url, {
			method: 'GET'
		}).then(response => response.json())
		.then(data => {
			this.setState({products: data});
		});
	}

	render() {
		return (
			<div>
				<h1>ProductListPage</h1>
				<ProductList products={this.state.products} />
			</div>
		);
	}
}
