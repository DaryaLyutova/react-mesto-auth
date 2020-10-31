import React from 'react';

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <img type="button" alt="Фото пользователя" className="avatar" onClick={props.onEditAvatar} />
        <div className="avatar avatar__hover"></div>
        <div className="profile-info">
          <div className="profile-info__container">
            <h1 className="profile-info__name">Жак-Ив Кусто</h1>
            <button type="button" className="edit-button" onClick={props.onEditProfile}>Исследователь океана</button>
          </div>
          <p className="profile-info__activity"></p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="places"></section>
    </main>
  )
}
export default Main;