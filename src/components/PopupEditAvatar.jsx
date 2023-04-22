import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupEditAvatar({isOpen, onClose}) {
  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      children={
        <form className="popup__content">
          <input
            className="popup__field popup__content_tipe_avatar"
            id="avatar"
            name="avatar"
            type="url"
            //value=""
            placeholder="Введите ссылку на фото"
            minLength="2"
            maxLength="30"
            required
          />
          <span id="avatar-error" className="popup__field-error"></span>
        </form>
      }
    />
  );
}

export default PopupEditAvatar;
