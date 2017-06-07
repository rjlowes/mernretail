import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import NavigationList from 'lib/navigation/NavigationList';
import NavigationItem from 'lib/navigation/NavigationItem';

import Search from 'lib/navigation/Search';

export default class Navigation extends Component {

	constructor(props) {
		super(props);
		this.state = {cats: []};
	}

	componentDidMount() {
		this.loadCategoryHierarchy();
	}

	loadCategoryHierarchy() {
		fetch('/api/category-hierarchy', {
			method: 'GET'
		}).then(response => response.json())
		.then(data => {
			this.setState({cats: data.cats, depth: data.depth});
		});
	}

	setDisplayTree() {

	    // to open body.show-nav

		let itemList = (
			<ul className="nav-list nav-list--l0">
				{this.state.cats.map((category, index) => {
					return(
						<li key={index} className="nav-list__item">
							<Link to={`/category/${category.slug}`} className="nav-list__item-link">{category.name}</Link>
							{category.children.length > 0 && 
								<ul>
									{category.children.map((category, index) => {
										return(
											<li key={index}>
												<Link to={`/category/${category.slug}`}>{category.name}</Link>
											</li>
										)
									})}
								</ul>
							}
						</li>
					)
				})}
			</ul>
		);

		return itemList;
	}

	render() {
		let itemList = this.setDisplayTree();

		return (
			<div className="main-menu">
				<nav className="main-menu__container">
					<span id="close-menu" className="main-menu__btn-close icon icon--inverse">
						S
					</span>
                    <Search />
					{itemList}
				</nav>
			</div>
		);
	}
}
