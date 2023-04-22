import React from "react";

function Card(props) {
  
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="elements__element">
      <button className="elements__delete" type="button"/>
      <img
        className="elements__mask-group"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="elements__signature">
        <h2 className="elements__title">{props.card.name}</h2>
        <div className="elements__like-group">
          <button className="elements__group" type="button"/>
          <h2 className="elements__counter">{props.card.likes}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
