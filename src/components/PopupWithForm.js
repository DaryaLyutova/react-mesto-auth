import React from 'react';

function Popup(props) {
    return (
        <form className={`popup popup_${props.name}`} name={props.name} >
            <div className="popup__container">
                <button type="button" className="popup__close-button"></button>
                <h2 className="popup__title">{props.title}</h2>
                <fieldset className="popup__profile">
                    {props.fieldset}
                </fieldset>
                <button type="submit" className="popup__button">{props.buttonTitle}</button>
            </div>
        </form>
    )
}

function PopupWithForm() {
    const fieldsetInfo = <> <input type="text" placeholder="Имя" className="popup__input popup__input_name" id="name-input" name="name"
        minlength="2" maxlength="40" required />
        <span className="popup__error" id="name-input-error"></span>
        <input type="text" placeholder="О себе" className="popup__input popup__input_activity" id="activity-input"
            name="about" minlength="2" maxlength="200" required />
        <span className="popup__error" id="activity-input-error"></span> </>
    const fieldsetAddCard = <>
        <input type="text" placeholder="Название" className="popup__input popup__input_placename" id="placename-input"
            name="name" minlength="1" maxlength="30" required />
        <span className="popup__error" id="placename-input-error"></span>
        <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_link" id="email-input"
            name="link" required />
        <span className="popup__error" id="email-input-error"></span>
    </>
    const fieldsetAvatar = <>
        <input type="url" placeholder="Ссылка на аватар" className="popup__input popup__input_avatar-link" id="avatar-input"
            name="avatar" required />
        <span className="popup__error" id="avatar-input-error"></span>
    </>

    return (
        <>
            <Popup name="info" title="Редактировать профиль" fieldset={fieldsetInfo} buttonTitle="Сохранить" />
            <Popup name="add-card" title="Новое место" fieldset={fieldsetAddCard} buttonTitle="Сохранить" />
            <Popup name="submit" title="Вы уверены?" fieldset={''} buttonTitle="Да" />
            <Popup name="avatar" title="Обновить аватар" fieldset={fieldsetAvatar} buttonTitle="Сохранить" />
        </>
    )
}
export default PopupWithForm;