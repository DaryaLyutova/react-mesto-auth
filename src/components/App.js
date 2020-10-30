import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <form className="popup popup_info popup__form" name="user-info" novalidate>
          <div className="popup__container">
            <button type="button" className="popup__close-button"></button>
            <h2 className="popup__title">Редактировать профиль</h2>
            <fieldset className="popup__profile">
              <input type="text" placeholder="Имя" className="popup__input popup__input_name" id="name-input" name="name"
                minlength="2" maxlength="40" required />
              <span className="popup__error" id="name-input-error"></span>
              <input type="text" placeholder="О себе" className="popup__input popup__input_activity" id="activity-input"
                name="about" minlength="2" maxlength="200" required />
              <span className="popup__error" id="activity-input-error">.</span>
              <button type="submit" className="popup__button">Сохранить</button>
            </fieldset>
          </div>
        </form>
        <form className="popup popup_add-card popup__form" name="add-card" novalidate>
          <div className="popup__container">
            <button type="button" className="popup__close-button popup__close-button_card"></button>
            <h2 className="popup__title">Новое место</h2>
            <fieldset className="popup__profile">
              <input type="text" placeholder="Название" className="popup__input popup__input_placename" id="placename-input"
                name="name" minlength="1" maxlength="30" required />
              <span className="popup__error" id="placename-input-error"></span>
              <input type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_link" id="email-input"
                name="link" required />
              <span className="popup__error" id="email-input-error"></span>
              <button type="submit" className="popup__button popup__button_card">
                Сохранить
          </button>
            </fieldset>
          </div>
        </form>
        <div className="popup popup_photo">
          <figure className="popup__photo-container">
            <button type="button" className="popup__close-button popup__close-button_photo"></button>
            <div>
              <img alt="Фотография места" className="popup__image" />
              <figcaption className="popup__title-photo"></figcaption>
            </div>
          </figure>
        </div>
        <form className="popup popup__submit">
          <div className="popup__container">
            <button type="button" className="popup__close-button"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" className="popup__button">
              Да
        </button>
          </div>
        </form>
        <form className="popup popup_avatar popup__form" name="avatar" novalidate>
          <div className="popup__container">
            <button type="button" className="popup__close-button"></button>
            <h2 className="popup__title">Обновить аватар</h2>
            <fieldset className="popup__profile">
              <input type="url" placeholder="Ссылка на аватар" className="popup__input popup__input_avatar-link" id="avatar-input"
                name="avatar" required />
              <span className="popup__error" id="avatar-input-error"></span>
              <button type="submit" className="popup__button popup__button_avatar">
                Сохранить
        </button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
