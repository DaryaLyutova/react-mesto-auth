import React from 'react';

function ImagePopup() {
    return (
        <div className="popup popup_photo">
          <figure className="popup__photo-container">
            <button type="button" className="popup__close-button popup__close-button_photo"></button>
            <div>
              <img alt="Фотография места" className="popup__image" />
              <figcaption className="popup__title-photo"></figcaption>
            </div>
          </figure>
        </div>
    )
}
export default ImagePopup;