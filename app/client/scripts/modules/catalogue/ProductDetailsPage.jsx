import React, {Component} from 'react';

import ProductDetails from 'lib/catalogue/ProductDetails';
import AddToBagForm from 'lib/forms/AddToBagForm';


export default class ProductDetailsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {product: null};
    }

    componentDidMount() {
        this.getProduct();
    }

	getProduct() {
	    fetch('/api/products/' + this.props.match.params.productId, {
	        method: 'GET'
        })
        .then((response) => response.data)
        .then((data) => {
            this.setState({product: data});
        });
    }


	render() {
		return (
			<section>
                <ProductDetails product={this.state.product} />
                <AddToBagForm />
            </section>
		);
	}
}
