import React, { Component } from "react";
import Slide from "./components/Slide";
import { NavLink } from "react-router-dom";

export default class Home extends Component {
	componentDidMount() {}
	render() {
		return (
			<div id="home">
				<Slide />
				{/* <div id="nav-bottom">
					<h1>
						Welcome to
						<br />
						Brotherhood
					</h1>
					<NavLink to="/login">Login</NavLink>
				</div> */}
				<div>HELLO</div>
{/* 
				<script type="text/javascript" language="javascript">
					var aax_size='300x250'; var aax_pubname = 'onlinebro-21'; var
					aax_src='302';
				</script>
				<script
					type="text/javascript"
					language="javascript"
					src="http://c.amazon-adsystem.com/aax2/assoc.js"
				></script>
				<script type="text/javascript" language="javascript">
					var aax_size='728x90'; var aax_pubname = 'onlinebro-21'; var
					aax_src='302';
				</script>
				<script
					type="text/javascript"
					language="javascript"
					src="http://c.amazon-adsystem.com/aax2/assoc.js"
				></script>
				<script type="text/javascript" language="javascript">
					var aax_size='160x600'; var aax_pubname = 'onlinebro-21'; var
					aax_src='302';
				</script>
				<script
					type="text/javascript"
					language="javascript"
					src="http://c.amazon-adsystem.com/aax2/assoc.js"
				></script>
				<script type="text/javascript" language="javascript">
					var aax_size='300x600'; var aax_pubname = 'onlinebro-21'; var
					aax_src='302';
				</script>
				<script
					type="text/javascript"
					language="javascript"
					src="http://c.amazon-adsystem.com/aax2/assoc.js"
					async
					defer
				></script> */}
			</div>
		);
	}
}
