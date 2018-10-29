import React, { Component } from 'react'
import CardListItem from '../cardslistitem'
import './cardslist.css'

export default class CardsList extends Component {
    render() {
        const { cardsList } = this.props
        const cardsListToRender = cardsList.map((cardItem, index) => {
            return (
                <CardListItem
                    cardItem={cardItem}
                    key={index}
                    baseUrl={this.props.baseUrl}
                    imageSize={this.props.imageSize}
                />
            )
        })
        return (
            <div className="cardslist">
                {this.props.cardsList ? cardsListToRender : <div />}
            </div>
        )
    }
}
