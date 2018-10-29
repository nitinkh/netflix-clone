import React, { Component } from 'react'
import Genre from '../genre/index'
import './genrelist.css'

export default class GenreList extends Component {
    genreItemClick = genreId => {
        this.props.genreClicked(genreId)
    }

    render() {
        const { genreList } = this.props
        const genreListToRender = genreList.map((genreItem, index) => {
            return (
                <Genre
                    genreName={genreItem.name}
                    key={genreItem.id}
                    id={genreItem.id}
                    genreClicked={this.genreItemClick}
                />
            )
        })
        return <div className="genre-list">{genreListToRender}</div>
    }
}
