import React from 'react'
import './genre.css'
const Genre = props => {
    const genreClickHandler = id => {
        props.genreClicked(id)
    }

    return (
        <div className="genre-container">
            <button id={props.id} onClick={() => genreClickHandler(props.id)}>
                {props.genreName}
            </button>
        </div>
    )
}

export default Genre
