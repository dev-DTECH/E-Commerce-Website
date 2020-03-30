import React, { Component } from "react";

export default class CategoriesMenu extends Component {
	constructor() {
		super();
		this.state = {
			categories: [
                {
                    name: "Jhinga"
                },
                {
                    name: "Jhinga"
                },
                {
                    name: "Jhinga"
                },
                {
                    name: "Jhinga"
                },
                {
                    name: "Jhinga"
                },
                {
                    name: "Jhinga"
                },
                {
                    name: "Jhinga"
                },
                {
                    name: "Jhinga"
                },
                {
                    name: "Jhinga"
                },
            ]
		};
	}
	render() {
		return (
			<div id="CategoriesMenu">
            {
                this.state.categories.map((category,index) =>(
                    <div key={index}>{category.name}</div>
                ))
            }
			</div>
		);
	}
}
