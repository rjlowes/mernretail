import React, {Component} from 'react';

import {Link} from 'react-router-dom';


export default class AddressbookList extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-10">
                        <div className="row spacer--huge">

                            <Link to="/addressbook/new">new address</Link>


                            <div className="col-md-8">
                                <div className="card-info type-sml">
                                    <div className="card-info__text">
                                        <div itemScope itemType="http://schema.org/Person" className="type-sml">
                                            <span className="strong" itemProp="name">Mr John Smith</span>

                                            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                                <span itemProp="streetAddress">
                                                    Line 1
                                                    Line 2<br />
                                                    Line 3
                                                </span>
                                                <span itemProp="addressLocality">Town/City</span>,
                                                <span itemProp="addressRegion">County</span>
                                                <span itemProp="addressCountry">Country</span><br />
                                                <span itemProp="postalCode">Postcode</span><br />
                                            </div>
                                            <span itemProp="telephone">Tel no.</span>
                                        </div>
                                    </div>
                                    <div className="card-info__actions">
                                         <ul className="list-linear">
                                            <li><a href="">edit</a></li>
                                            <li>
                                                <form action="" method="post">
                                                    <button>Delete</button>
                                                </form>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}