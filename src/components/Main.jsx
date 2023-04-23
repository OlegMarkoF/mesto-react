import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, name }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserAvatar(data.avatar);
        setUserName(data.name);
        setUserDescription(data.about);
      })
      .catch((err) => console.log(`Ошибка:${err}`));
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then(item => {
        setCards(item);
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
            onClick={onEditAvatar}
          />
          <img className="profile__avatar" src={userAvatar} alt={name} />
        </div>
        <div className="profile__info">
          <div className="profile__data">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfile}
            />
          </div>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="elements">
        {cards.map(card => {
          return (<Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
          />)
        })}
      </section>
    </main>
  );
}

export default Main;
