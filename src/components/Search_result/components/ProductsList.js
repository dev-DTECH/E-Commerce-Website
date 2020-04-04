import React, { Component } from "react";
import Product from "./Product.js";

import ProductData from "./products.json"

export default class ProductsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: ProductData,
			page: 0,
			loading: true,
			prevY: 0
		};
		// for(let i=0 ;i<50;i++)
		// this.state.products[i]=ProductData[i]
		this.noOfProducts = 20;
		this.offset = 0;
		this.addNewProduct = this.addNewProduct.bind(this);
	}
	addNewProduct() {
		console.log("New Product!");

		let thiis = this;
		fetch(
			"https://shopping-backend-sparkjava.herokuapp.com/api/getProducts?limit=" +
				this.noOfProducts +
				"&offset=" +
				this.offset
		)
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				console.log("Request successful", data);
				thiis.offset += thiis.noOfProducts;
				thiis.setState(state => {
					if (data[data.length - 1].errorMessage !== "Database limit exceeded")
						return { products: state.products.concat(data) };
					else {
						thiis.refs.footer.style.display = "none";
						thiis.refs.loading.style.display = "none";
					}
				});
				console.log("offset: ", thiis.offset);
				console.log("this.noOfProducts: ", thiis.noOfProducts);
			})
			.catch(function(error) {
				console.log("Request failed", error);
				// thiis.setState(state => {
				// 	let data=ProductData;
				// 	return {products: state.products.concat(data) }})
			});
	}
	componentDidMount() {
		let options = {
			root: null,
			rootMargin: "0px",
			threshold: 0
		};
		this.addNewProduct();

		let observer = new IntersectionObserver(
			this.addNewProduct.bind(this),
			options
		);

		observer.observe(document.querySelector("footer"));
	}
	render() {
		return (
			<div>
				<div id="product-list">
					{this.state.products.map((product, index) => (
						<Product key={index} name={product.name} data={product} />
					))}
				</div>
				<footer ref="footer"></footer>
				<h2 ref="loading">Loading...</h2>
			</div>
		);
	}
}
