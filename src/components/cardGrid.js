import React from 'react';
import Card from './card';

class CardGrid extends React.Component {
    renderCard(cardInfo) {
        return (
            <Card
                key={cardInfo.cardId}
                cardId={cardInfo.cardId}
                cardName={cardInfo.cardName}
                cardSrc={cardInfo.cardSrc}
                onClick={()=>{this.props.handleClick(cardInfo.cardId)}} 
            />
        );
    }

    render() {
        let cards = this.props.cards.map((a) => { 
            return this.renderCard(a);
        });
        return (
            <div className="card-grid">
                {cards}
            </div>
        );
    }
}

export {CardGrid};