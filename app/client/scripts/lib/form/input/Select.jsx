import React, {Component} from 'react';

import Option from 'lib/form/input/Option';


const Select = (props) => {
    return (
        <select id={props.id} name={props.name} className={props.className}>
            {props.options.map((option, index) => {
                return (<Option label={option} key={index} value={option} />)
            })}
        </select>
    );
};

export default Select;