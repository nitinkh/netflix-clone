import React from 'react'
import './cardslistitem.css'

const CardsListItem = props => {
    const cardImageUrl =
        props.baseUrl + props.imageSize + props.cardItem.backdrop_path
    const backgroundColor = props.cardItem.backdrop_path ? 'none' : '#000000'
    const cardImageStyle = {
        backgroundColor: backgroundColor,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: 'url(' + cardImageUrl + ')'
    }

    return (
        <div className="show-card card">
            <div className="wrapper" style={cardImageStyle}>
                <div className="header">
                    <div className="date">
                        <span className="day">
                            {props.cardItem.release_date}
                        </span>
                    </div>
                    <ul className="menu-content">
                        {/* <li>
                            <a href="#" className="fa fa-bookmark-o"></a>
                        </li> */}
                        <li>
                            <a className="fa fa-heart-o">
                                <span>{props.cardItem.vote_count}</span>
                            </a>
                        </li>
                        {/* <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li> */}
                    </ul>
                </div>
                <div className="data">
                    <div className="content">
                        <span className="author">Jane Doe</span>
                        <h1 className="title">
                            <a>{props.cardItem.title}</a>
                        </h1>
                        <p className="text">{props.cardItem.overview}</p>
                        <a className="button">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsListItem
