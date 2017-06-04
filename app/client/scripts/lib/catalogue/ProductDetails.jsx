import React, {Component} from 'react';


export default class ProductDetails extends Component {

    renderProduct() {
        console.log('renderProduct');
        console.log(this.props.product);
        if(this.props.product) {
            return (
                <h1>{this.props.product.title}</h1>
            );
        }

        return null;
    }

    render() {
        return (
            <div>
                {this.renderProduct()}
            </div>
        );
    }
}