import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class ProductCard extends Component {

	render() {

	    let product = this.props.product;

		return (
			<article>
                <Link to={`/products/${product.id}`}>
                    <img src={`/images/products/placeholder/mobile-prod/1.jpg`} alt={product.title} />
                    {product.title}
                </Link>
			</article>
		);
	}
}