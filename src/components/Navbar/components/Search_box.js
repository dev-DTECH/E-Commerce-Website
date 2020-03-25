import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Search_box extends Component {
    render() {
        return (
            <div id="search-box">
                <input id="search-text" type="text"/>
                <NavLink to="/Search_result" id="search-button">
                <img src="./style/search-icon.svg"></img>
                </NavLink>
            </div>
        )
    }
}
