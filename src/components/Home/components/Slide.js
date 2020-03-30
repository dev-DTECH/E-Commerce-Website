import React, { Component } from "react";

export default class Slide extends Component {
	constructor(){
		super();
		this.hover=false;

	}
	componentDidMount(){
		console.log(this.refs.slide,window.innerWidth);
		let i=0;
		setInterval(()=>{
			if(this.refs.slide)
		this.refs.slide.scrollTo(window.innerWidth*i,0)
		if(!this.hover)
		i++;
		if(i>2)
		i=0
		}
		,5000)
	}
	hovering(){
		if(this.hover===true)
		this.hover=false
		else
		this.hover=true
	}
	render() {
		return (
			<div ref="slide" id="slide" onMouseEnter={this.hovering()} onMouseLeave={this.hovering()}>
				<img
					className="slide-image"
					srcSet="./style/img.png"
					src={
						"https://picsum.photos/" +
						window.innerWidth +
						"/" +
						(window.innerHeight-48) +
						"?random=1.jpg"						
					}
					alt="Slide"
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
					srcSet="./style/img.png"
					alt="Slide"

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
					srcSet="./style/img.png"
					alt="Slide"

				></img>
			</div>
		);
	}
}
