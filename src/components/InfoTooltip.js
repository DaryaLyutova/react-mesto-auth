import React from 'react';

function InfoTooItip(props) {
    return (
        <div className={`popup popup__${props.name} ${props.isOpen ? 'popup_opened' : ''}`}
            name={props.name} >
            <div className="popup__container">
                <button type="button" className="popup__close-button" onClick={props.onClose}></button>
                <img src={props.image} className="popup__image" alt={props.alt} />
                <h2 className="popup__title">{props.title}</h2>
            </div>
        </div>
    )
}
export default InfoTooItip;