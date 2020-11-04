import React from 'react';

function Cards({ card, onCardClick, onImageClick }) {
    function handleClick() {
        onCardClick(card);
        onImageClick();
    }
    return (<div className="place__container">
        <img src={card.src} alt="Фотография места" className="place__image" onClick={handleClick} />
        <button type="button" className="place__delete"></button>
        <div className="place__group">
            <h2 className="place__title">{card.name}</h2>
            <form className="place__like-container">
                <button type="button" className="place__like"></button>
                <p className="place__like-counter">{card.likes.length}</p>
            </form>
        </div>
    </div>)
}

export default Cards;