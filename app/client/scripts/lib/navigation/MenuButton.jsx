import React, {Component} from 'react';


export default class MenuButton extends Component {

    constructor(props) {
        super(props);

        this.toggleBodyClass = this.toggleBodyClass.bind(this);
    }

    toggleBodyClass() {
        document.body.classList.toggle('show-nav');
    }

	render() {
		return (
			<button id="main-menu-open" className="global-header__menu-btn fx-pipes" onClick={this.toggleBodyClass}>
                <span className="fx-pipes__bottom"></span>
                <span className="fx-pipes__top"></span>
                <span className="fx-pipes__left"></span>
                <span className="fx-pipes__right"></span>
            </button>
		);
	}
}