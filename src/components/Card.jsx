import React from "react";

function Card({card, onCardClick}) {
  
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="elements__element">
      <button className="elements__delete" type="button"/>
      <img
        className="elements__mask-group"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="elements__signature">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-group">
          <button className="elements__group" type="button"/>
          <h2 className="elements__counter">{card.likes.length}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
