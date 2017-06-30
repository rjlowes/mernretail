import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import NavigationList from 'lib/navigation/NavigationList';
import NavigationItem from 'lib/navigation/NavigationItem';
import MenuButton from 'lib/buttons/MenuButton';

import Search from 'lib/navigation/Search';

export default class Navigation extends Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {cats: []};

	// 	this.navLinkClickHandler = this.navLinkClickHandler.bind(this);
	// }

	// componentDidMount() {
	// 	this.loadCategoryHierarchy();
	// }

	// loadCategoryHierarchy() {
	// 	fetch('/api/category-hierarchy', {
	// 		method: 'GET'
	// 	}).then(response => response.json())
	// 	.then(data => {
	// 		this.setState({cats: data.cats, depth: data.depth});
	// 	});
	// }

	// navLinkClickHandler(e) {
	// 	document.body.classList.remove('show-nav');
	// }

	// setDisplayTree() {

	// 	let itemList = (
	// 		<ul className="nav-list nav-list--l0">
	// 			{this.props.categories.map((category, index) => {
	// 				return (
	// 					<li key={index} className="nav-list__item">
	// 						<Link to={`/category/${category.slug}`} className="nav-list__item-link" onClick={this.props.onClick}>{category.name}</Link>
	// 						{category.children.length > 0 && 
	// 							<ul>
	// 								{category.children.map((category, index) => {
	// 									return(
	// 										<li key={index}>
	// 											<Link to={`/category/${category.slug}`} onClick={this.props.onClick}>{category.name}</Link>
	// 										</li>
	// 									)
	// 								})}
	// 							</ul>
	// 						}
	// 					</li>
	// 				)
	// 			})}
	// 		</ul>
	// 	);

	// 	return itemList;
	// }

	// renderNavigation() {
	// 	let itemList = this.setDisplayTree();

	// 	return (
			
	// 		<nav className="main-menu">
	// 			<MenuButton />
 //                <Search />
	// 			{itemList}
	// 		</nav>
			
	// 	);
	// }

	renderNavigation() {
		return (
			<ul className="nav-list nav-list--l0">
				{this.props.categories.map((category, index) => {
					return (
						<li key={index} className="nav-list__item">
							<Link to={`/category/${category.slug}`} className="nav-list__item-link" onClick={this.props.onClick}>{category.name}</Link>
							{category.children.length > 0 && 
								<ul>
									{category.children.map((category, index) => {
										return(
											<li key={index}>
												<Link to={`/category/${category.slug}`} onClick={this.props.onClick}>{category.name}</Link>
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
	}

	render() {
		if(this.props.categories) {
			return this.renderNavigation();
		} else {
			return null;
		}
	}
}
