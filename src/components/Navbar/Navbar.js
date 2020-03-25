import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Search_box from "./components/Search_box.js";
import Logo from "./components/Logo.js";

export default class Navbar extends Component {
	toggleMenu() {
		// let burger = document.querySelector("nav > #burger-menu");
		let bar1 = this.refs.bar1;
		let bar2 = this.refs.bar2;
		let bar3 = this.refs.bar3;

		console.log(bar1);

		let menu = this.refs.menu;
		console.log(menu);

		console.log("Toggle");
		if (bar2.style.opacity !== "0") {
			bar1.style.transform = "translateY(+10px) rotateZ(45deg)";
			bar2.style.opacity = "0";
			bar3.style.transform = "translateY(-10px) rotateZ(-45deg)";

			menu.style.transform = "none";
		} else {
			bar1.style.transform = "none";
			bar2.style.transform = "none";
			bar3.style.transform = "none";

			bar2.style.opacity = "1";

			menu.style.transform = "translateX(100%)";
		}
	}
	render() {
		return (
			<nav id="navbar">
				<Logo></Logo>
				<Search_box />
				<div ref="menu" id="menu">
					<NavLink exact to="/">
						Home
					</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/login">Login</NavLink>
					<NavLink id="cart" to="/login">
						<img alt="cart logo" src="./style/shopping_cart-logo.svg" />
					</NavLink>
				</div>
				<div id="burger-menu" onClick={this.toggleMenu.bind(this)}>
					<div ref="bar1"></div>
					<div ref="bar2"></div>
					<div ref="bar3"></div>
				</div>
			</nav>
		);
	}
}
