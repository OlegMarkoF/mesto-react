import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddCard({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="add"
      title="Новое место"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      children={
        <form className="popup__content">
          <input
            className="popup__field popup__field_tipe_place"
            id="place"
            name="name"
            type="text"
           //value=''
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="place-error" className="popup__field-error"></span>
          <input
            className="popup__field popup__field_tipe_link"
            id="link"
            name="link"
            type="url"
            //value=""
            placeholder="Ссылка на картинку"
            required
          />
          <span id="link-error" className="popup__field-error"></span>
        </form>
      }
    />
  );
}

export default PopupAddCard;
