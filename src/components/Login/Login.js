import React, { Component} from "react";
// import "https://apis.google.com/js/platform.js"

export default class Login extends Component {
	render() {
		return (
			<div id="login">
				{/* <h1>This is login page</h1> */}
				<div id="login-box">
					<div className="g-signin2" data-onsuccess="onSignIn"></div>
				</div>
				<script
					src="https://apis.google.com/js/platform.js"
					async={true}
					defer={true}
				></script>
			</div>
		);
	}
}
