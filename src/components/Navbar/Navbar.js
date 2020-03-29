import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import SearchBox from "./components/Search_box.js";
import Logo from "./components/Logo.js";

export default class Navbar extends Component {
	toggleMenu() {
		// let burger = document.querySelector("nav > #burger-menu");
		let bar1 = this.refs.bar1;
		let bar2 = this.refs.bar2;
		let bar3 = this.refs.bar3;
		let hide_menu = this.refs.hide_menu;

		console.log(bar2.style.opacity);

		let menu = this.refs.menu;
		console.log(menu);

		console.log("Toggle");
		if (bar2.style.opacity !== "0") {
			bar1.style.transform = "translateY(+10px) rotateZ(45deg)";
			bar2.style.opacity = "0";
			bar3.style.transform = "translateY(-10px) rotateZ(-45deg)";

			menu.style.transform = "none";

			hide_menu.style.display = "block";
		} else {
			bar1.style.transform = "none";
			bar2.style.transform = "none";
			bar3.style.transform = "none";

			bar2.style.opacity = "1";

			menu.style.transform = "translateX(100%)";

			hide_menu.style.display = "none";
		}
	}
	hide_menu() {
		let bar1 = this.refs.bar1;
		let bar2 = this.refs.bar2;
		let bar3 = this.refs.bar3;
		let hide_menu = this.refs.hide_menu;

		let menu = this.refs.menu;

		bar1.style.transform = "none";
		bar2.style.transform = "none";
		bar3.style.transform = "none";

		bar2.style.opacity = "1";

		menu.style.transform = "translateX(100%)";

		hide_menu.style.display = "none";
	}
	activateHome(ele) {
		// let home = this.refs.home;
		// let about = this.refs.about;
		// let login = this.refs.login;

		// let active = this.refs.active;

		this.refs.about.style.color = "Black";
		this.refs.login.style.color = "Black";

		this.refs.home.style.color = "white";
	}
	activateAbout() {
		this.refs.home.style.color = "Black";
		this.refs.login.style.color = "Black";

		this.refs.about.style.color = "white";
	}
	activateLogin() {
		this.refs.home.style.color = "Black";
		this.refs.about.style.color = "Black";

		this.refs.login.style.color = "white";
	}
	render() {
		return (
			<nav id="navbar">
				<Logo></Logo>
				<SearchBox />
				<div id="categories">Categories</div>
				<div ref="menu" id="menu">
					{/* <div id="active" ref="active"></div> */}
					<NavLink exact to="/" ref="home">
						Home
					</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/login">Login</NavLink>
					<NavLink id="cart" to="/cart">
						<img alt="cart logo" src="./style/shopping_cart-logo.svg" />
					</NavLink>
				</div>
				<div id="burger-menu" onClick={this.toggleMenu.bind(this)}>
					<div ref="bar1"></div>
					<div ref="bar2"></div>
					<div ref="bar3"></div>
				</div>
				<div
					ref="hide_menu"
					onClick={this.hide_menu.bind(this)}
					id="hide_menu"
				></div>
			</nav>
		);
	}
}
