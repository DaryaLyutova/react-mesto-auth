import React from 'react';

function Cards({ src, name, likes }) {
    return (<div class="place__container">
        <img src={src} alt="Фотография места" class="place__image" />
        <button type="button" class="place__delete"></button>
        <div class="place__group">
            <h2 class="place__title">{name}</h2>
            <form class="place__like-container">
                <button type="button" class="place__like"></button>
                <p class="place__like-counter">{likes.length}</p>
            </form>
        </div>
    </div>)
}

export default Cards;