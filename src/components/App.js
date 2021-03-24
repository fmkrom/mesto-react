import '../index.css';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

import { useState } from 'react';

function App() {
  const [isPopupEditProfileOpen, handleEditProfileClick] = useState(false);
  const [isPopupAddPlaceOpen, handleAddPlaceClick] = useState(false);
  const [isPopupEditAvatarOpen, handleEditAvatarClick] = useState(false);
  
  const [isPopupWithImageOpen, handleCardImageClick]  = useState(false);
  const [selectedCard, setSelectedCard] = useState({url:"", name:""});

  function hanldeCardClick(cardUrl, cardName){
    console.log(cardName);
    setSelectedCard({url: cardUrl, name: cardName});
    handleCardImageClick(true);
  }

  function closeAllPopups(){
    handleEditProfileClick(false);
    handleAddPlaceClick(false);
    handleEditAvatarClick(false);
    handleCardImageClick(false);
  }
  
  return (
      <div className="body">
        <div className="page">
          <Header />
          
          <Main 
            onAddPlace = {handleAddPlaceClick}
            onEditAvatar = {handleEditAvatarClick}
            onEditProfile = {handleEditProfileClick}
            onOpenFullSizeImage = {hanldeCardClick}
          />

          <Footer />

          <ImagePopup
            url={selectedCard.url}
            name={selectedCard.name}
            isOpen={isPopupWithImageOpen}
            isClosed={closeAllPopups}
          />

          <PopupWithForm 
            name="add-card" 
            popupTitle="Новое место" 
            buttonText="Добавить"
            isOpen={isPopupAddPlaceOpen}
            isClosed={closeAllPopups}
            >
            <input required id="input_addplace-name" className="form__field" name="addPlaceName" placeholder="Название" defaultValue=""  type="text" minLength="2" maxlenght="30"/>
            <span className="form-error form-error_hidden" id="input_addplace-name-error"></span>
            <input required id="input_addplace-url" className="form__field" name="addPlaceUrl" placeholder="Ссылка на картинку" defaultValue=""  type="url"/>
            <span className="form-error form-error_hidden" id="input_addplace-url-error"></span>
          </PopupWithForm>
          
          <PopupWithForm 
            name="edit-profile" 
            popupTitle="Редактировать профиль" 
            buttonText="Сохранить"
            isOpen={isPopupEditProfileOpen}
            isClosed={closeAllPopups}
            >
            <input required className="form__field" id="input_editprofile-name" name="editProfileName" placeholder="Имя" defaultValue=""  type="text" minLength="2" maxlenght="40"/>
            <span className="form-error form-error_hidden" id="input_editprofile-name-error"></span>
            <input required className="form__field" id="input_editprofile-job" name="editProfileJob" placeholder="Род занятий" defaultValue="" type="text" minLength="2" maxlenght="200"/>
            <span className="form-error form-error_hidden" id="input_editprofile-job-error"></span>
          </PopupWithForm>

          <PopupWithForm 
            name="delete-card" 
            popupTitle="Вы уверены?" 
            buttonText="Да">
            <div className="form form_confirm-deleting-card"  name="confirmDeletingCard"></div>
          </PopupWithForm>

          <PopupWithForm 
          name="edit-avatar" 
          popupTitle="Редактировать аватар" 
          buttonText="Сохранить аватар"
          isOpen={isPopupEditAvatarOpen}
          isClosed={closeAllPopups}
          >
            <input required id="input_edit-avatar" className="form__field" name="avatarUrl" placeholder="Ссылка на новый аватар" defaultValue=""  type="url"/>
            <span className="form-error form-error_hidden" id="input_edit-avatar-error"></span>
          </PopupWithForm>

        </div>
    </div>
  );
}

export default App;