import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';
import SubmitPopup from './SubmitPopup';

function App() {
  //стэйты состояния попапов (открыт/закрыт)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isCardOpen, setIsCardOpen] = React.useState(false);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = React.useState(false);
  //данные пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  //данные карточек
  const [cards, setCards] = React.useState([]);
  //стэйт карточки для удаления
  const [cardforDelete, setCardForDelete] = React.useState({});

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then((values) => {
      const [userData, initialCards] = values;
      return [userData, initialCards]
    }).then(([userData, initialCards]) => {
      setCurrentUser(userData);
      setCards(
        initialCards.map((item) => ({
          _id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes,
          owner: item.owner
        })))
    }).catch((err) => {
      alert(err);
    })
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick() {
    setIsCardOpen(!isCardOpen);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsCardOpen(false);
    setIsSubmitPopupOpen(false);
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data).then((dataInfo) => {
      setCurrentUser(dataInfo);
      closeAllPopups();
    }).catch((err) => {
      alert(err);
    })
  }

  function handleUpdateAvatar(data) {
    api.sethUserAvatar(data).then((dataAvatar) => {
      setCurrentUser(dataAvatar);
      closeAllPopups();
    }).catch((err) => {
      alert(err);
    })
  }

  function handeleAddPlace(data) {
    api.makeNewCard(data).then((newCard) => {
      // Обновляем стейт
      setCards([newCard, ...cards]);
      closeAllPopups();
    }).catch((err) => {
      alert(err);
    });
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    }).catch((err) => {
      alert(err);
    });
  }
  function handeleDeleteClick(card) {
    setIsSubmitPopupOpen(!isSubmitPopupOpen);
    setCardForDelete(card);
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const deleteId = card._id;
      // // Формируем новый массив на основе имеющегося, удаляя из него карточку
      const newCards = cards.filter((card) => card._id !== deleteId);
      // // Обновляем стейт
      setCards(newCards);
      closeAllPopups();
    }).catch((err) => {
      alert(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onCardClick={setSelectedCard}
            onImageClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handeleDeleteClick}
            cards={cards}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser} />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handeleAddPlace} />
          <SubmitPopup
            isOpen={isSubmitPopupOpen}
            onClose={closeAllPopups}
            onCardDelete={handleCardDelete}
            card={cardforDelete} />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isCardOpen} />

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
