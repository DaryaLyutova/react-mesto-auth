import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onImageClick }) {

    const currentUser = React.useContext(CurrentUserContext);
    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.ownerId === currentUser._id;
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `...`;

    function handleClick() {
        onCardClick(card);
        onImageClick();
    }
    return (
        <div className="place__container">
            <img src={card.src} alt="Фотография места" className="place__image" onClick={handleClick} />
            <button type="button" className={`place__delete ${isOwn ? 'place__delete_visible' : ''}`} />
            <div className="place__group">
                <h2 className="place__title">{card.name}</h2>
                <form className="place__like-container">
                    <button type="button" className={`place__like ${isLiked ? 'place__like_active' : ''}`} />
                    <p className="place__like-counter">{card.likes.length}</p>
                </form>
            </div>
        </div>
    )
}

export default Card;