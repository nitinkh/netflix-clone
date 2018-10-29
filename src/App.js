import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    fetchConfiguration,
    fetchGenre,
    fetchItemsById,
    fetchItemsBySearchTerm
} from './actions/index'
import SearchBar from './components/searchbar'
import GenreList from './components/genrelist'
import CardsList from './components/cardslist'
import './App.css'

class App extends Component {
    componentDidMount() {
        this.props.fetchConfiguration()
    }

    render() {
        const baseUrl = this.props.configuration.images
            ? this.props.configuration.images.base_url
            : ''
        return (
            <div className="app-container">
                <div className="app-header">
                    <span>NetFlix-Clone</span>
                    <SearchBar
                        onSearchTermChange={this.searchTermChangeHandler}
                    />
                </div>
                <GenreList
                    genreList={this.props.genre}
                    genreClicked={this.genreClickHandler}
                />
                <CardsList
                    cardsList={this.props.showItems}
                    baseUrl={baseUrl}
                    imageSize="w780"
                />
            </div>
        )
    }

    searchTermChangeHandler = searchTerm => {
        this.props.fetchItemsBySearchTerm(searchTerm)
    }

    genreClickHandler = id => {
        this.props.fetchItemsById(id)
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchConfiguration,
            fetchGenre,
            fetchItemsById,
            fetchItemsBySearchTerm
        },
        dispatch
    )
}

function mapStateToProps(state) {
    return {
        configuration: state.configuration,
        genre: state.genre,
        showItems: state.showsitems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
