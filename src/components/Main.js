import React from 'react';
import api from '../utils/Api';


function Main(props) {

  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();

  React.useEffect(() => {
     api.getUserInfo().then(function (data) {
      console.log(data);
      setUserAvatar(data.avatar);
      setUserName(data.name);
      setUserDescription(data.about);
    })
  }, []);


  return (
    <main className="content">
      <section className="profile">
        <img src={userAvatar} type="button" alt="Фото пользователя" className="avatar" onClick={props.onEditAvatar} />
        <div className="avatar avatar__hover"></div>
        <div className="profile-info">
          <div className="profile-info__container">
            <h1 className="profile-info__name">{userName}</h1>
            <button type="button" className="edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile-info__activity">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="places"></section>
    </main>
  )
}
export default Main;