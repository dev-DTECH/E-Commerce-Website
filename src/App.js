import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home";
import Search_result from "./components/Search_result/Search_result";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart"

class App extends Component {
	render() {
		return (
			<div className="App">
				<HashRouter>
					<Navbar />
					<div className="content">
						<Route path="/search_result" component={Search_result} />
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/login" component={Login} />
						<Route path="/cart" component={Cart} />
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default App;
