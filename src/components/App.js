import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isCardOpen, setIsCardOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setCurrentUser(data);
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
    setIsEditProfilePopupOpen();
    setIsAddPlacePopupOpen();
    setIsEditAvatarPopupOpen();
    setIsCardOpen();
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data).then((dataInfo) => {
      setCurrentUser(dataInfo);
      closeAllPopups();
    })
  }

  function handleUpdateAvatar(data) {
    api.sethUserAvatar(data).then((dataAvatar) => {
      setCurrentUser(dataAvatar);
      closeAllPopups();
    })
  }

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then((dataCards) => {
      setCards(
        dataCards.map((item) => ({
          _id: item._id,
          name: item.name,
          link: item.link,
          likes: item.likes,
          owner: item.owner
        })
        ))
    }).catch((err) => {
      alert(err);
    })
  }, []);

  
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

  function handleCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      const deleteId = card._id;
      // // Формируем новый массив на основе имеющегося, удаляя из него карточку
      const newCards = cards.filter((card) => card._id !== deleteId);
      // // Обновляем стейт
      setCards(newCards);
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
            onCardDelete={handleCardDelete}
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
          <PopupWithForm name="submit" title="Вы уверены?" buttonTitle="Да"
            onClose={closeAllPopups}>{''}</PopupWithForm>
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
