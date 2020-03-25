import React, { Component } from "react";

export default class Product extends Component {
	render() {
		return (
			<div className="product">
				<img
					className="product-image"
					src={"./style/pics/"+this.props.data.ImagePath}
					width="200"
					height="200"
					alt={this.props.data.ImagePath}
				/>
				<div>
					<h2 className="product-name" >{this.props.data.name}</h2>
					<div className="product-describtion">
						<div>{this.props.data.description}</div>
						<div>{this.props.data.description}</div>
					</div>
					<div className="buy-button">
						<div className="price">${this.props.data.price}</div>
						<div>Buy</div>
					</div>
				</div>
			</div>
		);
	}
}
