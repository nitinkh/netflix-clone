import React, { Component } from 'react'
import './searchbar.css'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    type="text"
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="Search for movies, tv shows"
                />
            </div>
        )
    }

    onInputChange(term) {
        this.props.onSearchTermChange(term)
    }
}
