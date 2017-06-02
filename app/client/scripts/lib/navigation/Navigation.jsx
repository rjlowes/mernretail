import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import NavigationList from 'lib/navigation/NavigationList';
import NavigationItem from 'lib/navigation/NavigationItem';


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
		
		let itemList = (
			<ul>
				{this.state.cats.map((category, index) => {
					return(
						<li key={index}>
							<Link to={`/category/${category.slug}`}>{category.name}</Link>
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
			<nav>
				<p>Nav start</p>
				{itemList}
				<p>Nav end</p>
			</nav>
		);
	}
}
