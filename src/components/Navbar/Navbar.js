import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import SearchBox from "./components/Search_box.js";
import Logo from "./components/Logo.js";
import data from "./components/categories.json";
/* eslint-disable */
export default class Navbar extends Component {
	constructor() {
		super();
		// this.ProductData=JSON.parse(data)
		this.c = 0;
		this.state = {
			categories: data
		};
	}
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
			this.hide_menu();

			bar1.style.transform = "translateY(+10px) rotateZ(45deg)";
			bar2.style.opacity = "0";
			bar3.style.transform = "translateY(-10px) rotateZ(-45deg)";

			menu.style.transform = "none";

			hide_menu.style.display = "block";
		} else {
			this.hide_menu();
		}
	}
	toggleCategoriesMenu() {
		let CategoriesMenu = this.refs.CategoriesMenu;
		let hide_menu = this.refs.hide_menu;

		if (CategoriesMenu.style.transform !== "none") {
			this.hide_menu();
			CategoriesMenu.style.transform = "none";
			hide_menu.style.display = "block";
		} else this.hide_menu();
	}
	hide_menu() {
		let bar1 = this.refs.bar1;
		let bar2 = this.refs.bar2;
		let bar3 = this.refs.bar3;
		let hide_menu = this.refs.hide_menu;

		let CategoriesMenu = this.refs.CategoriesMenu;

		let menu = this.refs.menu;

		bar1.style.transform = "none";
		bar2.style.transform = "none";
		bar3.style.transform = "none";

		bar2.style.opacity = "1";
		if (window.innerWidth < 800) menu.style.transform = "translateX(100%)";

		CategoriesMenu.style.transform = "translateX(calc(-100% - 10px))";

		hide_menu.style.display = "none";
	}
	activate(str) {
		let active = this.refs.active;

		let home = this.refs.home;
		let about = this.refs.about;
		let login = this.refs.login;

		if (str == "home") {
			active.style.top = home.offsetTop + "px";
			active.style.left = home.offsetLeft + "px";
			home.style.color = "white";

			about.style.color = "black";
			login.style.color = "black";
		} else if (str == "about") {
			active.style.top = about.offsetTop + "px";
			active.style.left = about.offsetLeft + "px";
			about.style.color = "white";

			home.style.color = "black";
			login.style.color = "black";
		} else if (str == "login") {
			active.style.top = login.offsetTop + "px";
			active.style.left = login.offsetLeft + "px";
			login.style.color = "white";

			home.style.color = "black";
			about.style.color = "black";
		}
	}
	componentDidMount() {
		this.activate("home");
		console.log(this.c);
	}
	render() {
		return (
			<nav id="navbar">
				<Logo></Logo>
				<SearchBox />

				<div
					id="categories-button"
					onClick={this.toggleCategoriesMenu.bind(this)}
				>
					Categories
				</div>
				<div ref="CategoriesMenu" id="CategoriesMenu">
					{this.state.categories.map((category, index) => (
						<div ref="CategoriesButton" key={index} name={category.name}>
							{category.name}
						</div>
					))}
				</div>

				<div ref="menu" id="menu">
					<div id="active" ref="active"></div>
					<NavLink
						exact
						to="/"
						ref="home"
						onClick={this.activate.bind(this, ["home"])}
					>
						Home
					</NavLink>
					<NavLink
						to="/about"
						ref="about"
						onClick={this.activate.bind(this, ["about"])}
					>
						About
					</NavLink>
					<NavLink
						to="/login"
						ref="login"
						onClick={this.activate.bind(this, ["login"])}
					>
						Login
					</NavLink>
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
