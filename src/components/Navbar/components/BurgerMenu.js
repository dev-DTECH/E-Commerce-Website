import React, { Component } from 'react'

export default class BurgerMenu extends Component {
    toggleMenu() {
        // let burger = document.querySelector("nav > #burger-menu");
        let bar1 = this.refs.bar1;
        let bar2 = this.refs.bar2;
        let bar3 = this.refs.bar3;

        console.log(bar1)
    
        let menu = this.refs.menu;
        console.log("Toggle");
        if (bar2.style.opacity != "0") {
            bar1.style.transform = "translateY(+10px) rotateZ(45deg)";
            bar2.style.opacity = "0";
            bar3.style.transform = "translateY(-10px) rotateZ(-45deg)";
    
            menu.style.transform = "none";
        } else {
            bar1.style.transform = "none";
            bar2.style.transform = "none";
            bar3.style.transform = "none";
    
            bar2.style.opacity = "1";
    
            menu.style.transform = "translateX(100vw)";
        }
    }
    render() {
        return (
            <div id="burger-menu">
                <div ref="bar1"></div>
                <div ref="bar2"></div>
                <div ref="bar3"></div>
            </div>
        )
    }
}
