import React from 'react';

function Main() {
    return (
        <main className="content">
          <section className="profile">
            <img alt="Фото пользователя" className="avatar" />
            <div className="avatar avatar__hover"></div>
            <div className="profile-info">
              <div className="profile-info__container">
                <h1 className="profile-info__name">Жак-Ив Кусто</h1>
                <button type="button" className="edit-button">Исследователь океана</button>
              </div>
              <p className="profile-info__activity"></p>
            </div>
            <button type="button" className="profile__add-button"></button>
          </section>
          <section className="places"></section>
        </main>
    )
}
export default Main;