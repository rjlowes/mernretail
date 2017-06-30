import React, {Component} from 'react';


export default class Address extends Component {

    render() {
        return (
            <fieldset>
                <div className="form-group">
                    <label htmlFor="field-address1" className="form-label">Address line 1</label>
                    <input aria-label="Address line 1" aria-required="true" name="address1" id="field-address1" className="form-input" placeholder="Address line 1" required />
                </div>

                <div className="form-group">
                    <label htmlFor="field-address2" className="form-label">Address line 2</label>
                    <input aria-label="Address line 2" name="address2" id="field-address2" className="form-input" placeholder="Address line 2" />
                </div>

                <div className="form-group">
                    <label htmlFor="field-address3" className="form-label">Address line 3</label>
                    <input aria-label="Address line 3" name="field-address3" id="field-address3" className="form-input" placeholder="Address line 3" />
                </div>

                <div className="form-group">
                    <label htmlFor="field-town-city" className="form-label">Town/City</label>
                    <input aria-label="Town or City" aria-required="true" name="townCity" id="field-town-city" className="form-input" placeholder="Town or City" required />
                </div>

                <div className="form-group">
                    <label htmlFor="field-county" className="form-label">County</label>
                    <input aria-label="County" aria-required="true" name="county" id="field-county" className="form-input" placeholder="Postcode" required />
                </div>

                <div className="form-group">
                    <label htmlFor="field-postcode" className="form-label">Postcode</label>
                    <input aria-label="Postcode" aria-required="true" name="postcode" id="field-postcode" className="form-input" placeholder="Postcode" required />
                </div>

                <div className="form-group">
                    <label htmlFor="field-country" className="form-label">Country</label>
                    <select aria-label="Country" aria-required="true" name="country" id="field-country" className="form-input" required>
                        <option value="UK">United Kingdom</option>
                    </select>
                </div>
            </fieldset>
        );
    }
}