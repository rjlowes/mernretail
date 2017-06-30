import React, {Component} from 'react';


export default class Telephone extends Component {

    render() {
        return (
            <fieldset>
                <div className="form-group">
                    <label htmlFor="field-telephone" className="form-label">Telephone</label>
                    <input aria-required="true" aria-label="telephone" type="text" name="telephone" id="field-telephone" className="form-input" placeholder="Tel no." required />
                </div>
            </fieldset>
        );
    }
}