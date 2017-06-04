import React, {Component} from 'react';

import ProductCard from 'lib/catalogue/ProductCard';


export default class ProductList extends Component {

	// '/api/categories/:categoryId/products'

	constructor(props) {
		super(props);

	}

	componentDidMount() {
		console.log(this.props.params);
	}

	fetchProducts() {

	}

	render() {
		return (
			<ul>
				{this.props.products.map((product, index) => {
					return (
						<li key={index}>
                            <ProductCard product={product} />
							<article>
								{product.title}
							</article>
						</li>
					)
				})}
			</ul>
		);
	}
}