import React, {Component} from 'react';

import Name from 'lib/form/fieldsets/Name';
import Telephone from 'lib/form/fieldsets/Telephone';
import Address from 'lib/form/fieldsets/Address';

export default class AddressNew extends Component {

    render() {
        return (
            <div className="container">
                <Name />
                <Telephone />
                <Address />
            </div>
        );
    }
}
