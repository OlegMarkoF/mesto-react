import React from "react";
import {api} from "../utils/Api"
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setUserAvatar(data.avatar);
      setUserName(data.name);
      setUserDescription(data.about);
    })
    .catch((err) => console.log(`Ошибка:${err}`));
}, [userName, userDescription, userAvatar])


React.useEffect(() => {
  api.getInitialCards()
  .then((data) => {
    setCards(data.map(item => ({
      name: item.name,
      link: item.link,
      id: item._id,
      likes: item.likes.length
  })))
  })
  .catch((err) => console.log(`Ошибка:${err}`));
}, []);

  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__overlay-avatar">
          <button 
            className="profile__edit-avatar" 
            type="button"
            onClick={props.onEditAvatar}/>
          <img className="profile__avatar" src={userAvatar} alt={props.name} />
        </div>
        <div className="profile__info">
          <div className="profile__data">
            <h1 className="profile__title">{userName}</h1>
            <button 
              className="profile__edit-button" 
              type="button"
              onClick={props.onEditProfile}/>
          </div>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button 
          className="profile__add-button" 
          type="button"
          onClick={props.onAddPlace}/>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card card={card} key={card.id} src={card.link} onCardClick={props.onCardClick} />
        ))} 
      </section>
    </main>
  );
}

export default Main;
