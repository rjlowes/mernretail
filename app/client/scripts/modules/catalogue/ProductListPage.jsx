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
			<div className="container">
				<div className="banner-jumbo">
		            <img src="http://www.mydas.co.uk/wp-content/uploads/2013/12/YO_slide3_Layer_1-2.jpg" alt="" className="banner-jumbo__bg" />
		            <div className="banner-jumbo__content banner-jumbo__content--left">
		                <h1>cat name</h1>
		            </div>
		        </div>
				<ProductList products={this.state.products} />
			</div>
		);
	}
}
