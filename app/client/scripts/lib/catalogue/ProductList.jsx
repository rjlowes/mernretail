import React, {Component} from 'react';


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
				{this.props.products.map(product => {
					return (
						<li>
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