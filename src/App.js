import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import { Route, HashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Search_result from "./components/Search_result/Search_result";
import Login from "./components/Login/Login";

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div className="App">
					<Navbar />
					<div className="content">
						<Route exact path="/" component={Home} />
						<Route path="/Search_result" component={Search_result} />
						<Route path="/Login" component={Login} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
