import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function SubmitPopup(props) {

    function handelSubmitPopup(e) {
        e.preventDefault();
        props.onCardDelete(props.card);
    }

    return (
        <PopupWithForm
            name="submit"
            title="Вы уверены?"
            buttonTitle="Да"
            onClose={props.onClose}
            isOpen={props.isOpen}
            onSubmit={handelSubmitPopup}
            onCardDelete={props.onCardDelete}>
            {''}
        </PopupWithForm>
    )
}

export default SubmitPopup;