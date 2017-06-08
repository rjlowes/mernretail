import React, {Component} from 'react';


export default class AddToBagForm extends Component {

    renderForm() {
        const product = this.props.product;

        if(!product) {
            return null;
        }
        console.log(product);
        return (
             <form role="form" id="form-add-to-bag" className="mod-bordered" method="post" noValidate>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <label htmlFor="sku">Size</label>
                        <select id="sku" name="sku" className="form-control">
                        {product.variants.map((variant, index) => {
                            return <option value="{variant.sku}" key={variant.sku}>{variant.size}</option>
                        })}
                        </select>
                    </div>
                    <div className="form-group col-sm-12">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" value="1" min="1" max="10" name="quantity" id="quantity" className="form-control" />
                    </div>
                </div>
                <button type="submit" className="btn btn--md btn--block">Buy Now</button>
            </form>
        );
    }

    render() {
        return this.renderForm();
    }
}