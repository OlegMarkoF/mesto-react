import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditProfile({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      children={
        <form
          className="popup__content popup__content_tipe_edit"
          name="form"
          noValidate
        >
          <input
            className="popup__field popup__field_tipe_name"
            id="name"
            name="name"
            type="text"
            //value=""
            placeholder="Ваше имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span id="name-error" className="popup__field-error"></span>
          <input
            className="popup__field popup__field_tipe_job"
            id="about"
            name="about"
            type="text"
            //value=""
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
          />
          <span id="about-error" className="popup__field-error"></span>
        </form>
      }
    />
  );
}

export default PopupEditProfile;
