import React from 'react';
import api from '../utils/Api';
import Card from './Card';


function Main(props) {

  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();

  React.useEffect(() => {
    api.getUserInfo().then((data) => {
      setUserAvatar(data.avatar);
      setUserName(data.name);
      setUserDescription(data.about);
    }).catch((err) => {
      alert(err);
    })
  }, []);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards().then((dataCards) => {

      setCards(
        dataCards.map((item )=> ({
          id: item._id,
          name: item.name,
          src: item.link,
          likes: item.likes
        })
      ))
    }).catch((err) => {
      alert(err);
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
            <button type="button" className="edit-button" onClick={props.onEditProfile} />
          </div>
          <p className="profile-info__activity">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace} />
      </section>
      <section className="places">{
        cards.map((card) => <Card key={card.id} card={card} onCardClick={props.onCardClick} onImageClick={props.onImageClick} />)
      }</section>
    </main>
  )
}
export default Main;