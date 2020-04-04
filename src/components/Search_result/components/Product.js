import React, { Component } from "react";

export default class Product extends Component {
	render() {
		return (
			<div className="product">
				<img
					className="product-image"
					src={"./style/pics/" + this.props.data.ImagePath}
					width="100%"
					alt={this.props.data.ImagePath}
					srcSet="./style/img.png"
				/>
				<div>
					<h2 className="product-name">{this.props.data.name}</h2>
					<div className="product-describtion">
						<div>{this.props.data.description}</div>
						{/* <div>{this.props.data.description}</div> */}
					</div>
					<div className="Buttons">
						<div className="Price">
							<div>Price :</div>
							<div className="price">${this.props.data.price}</div>
						</div>
						<div className="menu">

								<img src="./style/add_shopping_cart-logo.svg" alt="logo"/>

								<img src="./style/add_shopping_cart-logo.svg" alt="logo"/>

							<div></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
