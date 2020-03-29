import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class Search_box extends Component {
    render() {
        return (
            <div className="search-box">
                <input className="search-text" type="text"/>
                <NavLink to="/Search_result" id="search-button">
                <img src="./style/search-icon.svg" alt="search icon"></img>
                </NavLink>
            </div>
        )
    }
}
