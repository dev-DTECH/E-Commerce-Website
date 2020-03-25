import React, { Component } from "react";
import  {NavLink}  from "react-router-dom";
export default class Menu extends Component {
	render() {
		return (
			<div ref="menu" id="menu">
				<NavLink exact to="/">
					Home
				</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/login">Login</NavLink>
				<NavLink id="cart" to="/login">
					<img alt="cart logo" src="./style/shopping_cart-logo.svg"/>
				</NavLink>
			</div>
		);
	}
}
