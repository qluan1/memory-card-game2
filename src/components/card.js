import React from 'react';

export default function Card (props) {
    return (
        <div 
            className="card-container" 
            onClick={props.onClick}
        >
            <img className="card-img" src={props.cardSrc} alt={props.cardName} />
        </div>
    );
}