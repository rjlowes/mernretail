import React, {Component} from 'react';

export default class ProductDetailsPage extends Component {

	constructor(props) {
		super(props);

		this.submitBasketForm = this.submitBasketForm.bind(this);
	}

	submitBasketForm(data) {
		this.console.log(data)
	}

	render() {
		return (
			<h1>ProductDetailsPage</h1>
		);
	}
}
