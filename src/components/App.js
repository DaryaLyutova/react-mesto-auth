import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  // const [isClose, setIsClose] = React.useState(true);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen();
    setIsAddPlacePopupOpen();
    setIsEditAvatarPopupOpen();
  }

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
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
        />
        <Footer />
        <PopupWithForm name="info" title="Редактировать профиль" buttonTitle="Сохранить"
          isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>{fieldsetInfo}</PopupWithForm>
        <PopupWithForm name="add-card" title="Новое место" buttonTitle="Сохранить"
          isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>{fieldsetAddCard}</PopupWithForm>
        <PopupWithForm name="submit" title="Вы уверены?" buttonTitle="Да"
          onClose={closeAllPopups}>{''}</PopupWithForm>
        <PopupWithForm name="avatar" title="Обновить аватар" buttonTitle="Сохранить"
          isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>{fieldsetAvatar}</PopupWithForm>
        <ImagePopup />

      </div>
    </div>
  );
}

export default App;
