import React, {Component} from 'react';

import Select from 'lib/form/input/Select';

export default class Name extends Component {

    constructor(props) {
        super(props);
        // TODO put this into the NameContainer and pass in with props
        this.state = {
            salutations: ['Mr', 'Mrs','Miss', 'Master', 'Wing Commander']
        };
    }

    render() {
        return (
            <fieldset>
                <Select id="field-title" name="title" className="form-input" options={this.state.salutations} />
                <div className="form-group">
                    <label htmlFor="field-title" className="form-label">Title</label>
                    <select aria-label="Title" aria-required="true" name="title" id="field-title" className="form-input" required>
                        {this.state.salutations.map((salutation, index) => {
                            return (<option value="{{ salutation }}" key={index}>{salutation}</option>)
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="field-firstname" className="form-label">Firstname</label>
                    <input aria-required="true" aria-label="First name" name="firstname" id="field-firstname" className="form-input" placeholder="First name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="field-lastname" className="form-label">Last name</label>
                    <input aria-required="true" aria-label="Lastname" name="lastname" id="field-lastname" className="form-input" placeholder="Last name" required />
                </div>
            </fieldset>
        );
    }
}