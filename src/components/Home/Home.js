import React, { Component } from "react";
import Slide from "./components/Slide";
import { NavLink } from "react-router-dom";
import SearchBox from "../Navbar/components/Search_box"

export default class Home extends Component {
	componentDidMount(){
	}
	render() {
		return (
			<div id="home">
				<Slide />
				<div id="nav-bottom">
					<h1>Welcome to<br/>Brotherhood</h1>
					<NavLink to="/login">Login</NavLink>
				</div>
			</div>
		);
	}
}
