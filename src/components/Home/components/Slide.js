import React, { Component } from "react";

export default class Slide extends Component {
	render() {
		return (
			<div id="slide">
				<img
					className="slide-image"
					src={
						"https://picsum.photos/" +
						window.innerWidth +
						"/" +
						(window.innerHeight-48) +
						"?random=1.jpg"
					}
				></img>
				<img
					className="slide-image"
					src={
						"https://picsum.photos/" +
						window.innerWidth +
						"/" +
						(window.innerHeight-48) +
						"?random=2.jpg"
					}
				></img>
				<img
					className="slide-image"
					src={
						"https://picsum.photos/" +
						window.innerWidth +
						"/" +
						(window.innerHeight-48) +
						"?random=3.jpg"
					}
				></img>
			</div>
		);
	}
}
