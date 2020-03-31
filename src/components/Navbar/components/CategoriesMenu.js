import React, { Component } from "react";

import data from "./categories.json";

export default class CategoriesMenu extends Component {
	constructor() {
		super();
		// this.ProductData=JSON.parse(data)

		this.state = {
			categories: data
		};
	}
	render() {
		return (
			<div id="CategoriesMenu">
				{this.state.categories.map((category, index) => (
					<div key={index}>{category.name}</div>
				))}
			</div>
		);
	}
}
