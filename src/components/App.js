import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm />
        {/* <div className="popup popup_photo">
          <figure className="popup__photo-container">
            <button type="button" className="popup__close-button popup__close-button_photo"></button>
            <div>
              <img alt="Фотография места" className="popup__image" />
              <figcaption className="popup__title-photo"></figcaption>
            </div>
          </figure>
        </div> */}

      </div>
    </div>
  );
}

export default App;
