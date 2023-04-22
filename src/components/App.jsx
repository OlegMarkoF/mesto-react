import React from "react";
import "../index.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
//import PopupWithForm from "./PopupWithForm";
import PopupAddCard from "./PopupAddCard";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupEditProfile from "./PopupEditProfile";
import ImagePopup from "./ImagePopup";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onClose={closeAllPopups}
      />
      <Footer />
      <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups} />
      <PopupAddCard
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups} />
      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups} />
    </div>
  );
}

export default App;
