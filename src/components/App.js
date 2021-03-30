import '../index.css';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddCardPopup from "./AddCardPopup.js"

import { useState, useEffect } from 'react';

import api from "../utils/Api.js";

import CurrentUserContext from "../contexts/CurrentUserContext.js";
//import CurrentCardsContext from "../contexts/CurrentCardsContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [currentCards, setCurrentCards] = useState([]);
  
  const [isPopupEditProfileOpen, handleEditProfileClick] = useState(false);
  const [isPopupAddPlaceOpen, handleAddPlaceClick] = useState(false);
  const [isPopupEditAvatarOpen, handleEditAvatarClick] = useState(false);
  
  const [isPopupWithImageOpen, handleCardImageClick]  = useState(false);
  const [selectedCard, setSelectedCard] = useState({url:"", name:""});

  useEffect(()=>{
    Promise.all([
      api.getCards(),  
      api.getUser()
    ])
    .then(([cardsData, userData]) =>{
       setCurrentCards(cardsData);
       setCurrentUser(userData);
    }).catch(err => console.log(err));
  }, []);

  function hanldeCardClick(cardUrl, cardName){
    setSelectedCard({url: cardUrl, name: cardName});
    handleCardImageClick(true);
  }

  function handleLikeCard(card){
    const isLiked = card.likes.some((item)=> item._id === currentUser.id);
    
    api.changeLikeCardStatus(card.id, !isLiked)
    .then((newCardData)=>{
      setCurrentCards(((cards)=> cards.map((c) => c._id === card.id ? newCardData : c)))
    })
  }

  function handleDeleteCard(data){
    console.log('card deleted!', data.name);

    api.deleteCard(data.id)
    .then(()=>{
      const cardsAfterDelete = currentCards.filter(card => card.id === !data.id);
      setCurrentCards(cardsAfterDelete);
    }).catch(err => console.log(err));
  }

  function closeAllPopups(){
    handleEditProfileClick(false);
    handleAddPlaceClick(false);
    handleEditAvatarClick(false);
    handleCardImageClick(false);
  }

  function handleAddPlaceSubmit(name, link){
      api.addCard(name, link)
      .then((newCard)=>{
        setCurrentCards([newCard, ...currentCards])
      }).catch(err => console.log(err))
      closeAllPopups();
  }

  function handleUpdateUser(data){
      api.setUser(data)
      .then((newUserData)=>{
        setCurrentUser(newUserData)
      }).catch(err => console.log(err))
      closeAllPopups();
  };

  function handleUpdateAvatar(data){
    api.editAvatar(data.avatar)
    .then((newAvatarData)=>{
        setCurrentUser(newAvatarData)
    }).catch(err => console.log(err))
    closeAllPopups();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
          <div className="body">
              <div className="page">
                <Header />
                
                <Main 
                  cards={currentCards}
                  onAddPlace = {handleAddPlaceClick}
                  onEditAvatar = {handleEditAvatarClick}
                  onEditProfile = {handleEditProfileClick}
                  onOpenFullSizeImage = {hanldeCardClick}
                  onLikeClick={handleLikeCard}
                  onDeleteButtonClick={handleDeleteCard}
                />

                <Footer />

                <ImagePopup
                  url={selectedCard.url}
                  name={selectedCard.name}
                  isOpen={isPopupWithImageOpen}
                  isClosed={closeAllPopups}
                />

                <AddCardPopup
                  isOpen={isPopupAddPlaceOpen}
                  isClosed={closeAllPopups}
                  onAddPlace={handleAddPlaceSubmit}
                />
                
                <EditProfilePopup 
                  isOpen={isPopupEditProfileOpen} 
                  onClose={closeAllPopups}
                  onUpdateUser={handleUpdateUser}  
                />

                <PopupWithForm 
                  name="delete-card" 
                  popupTitle="Вы уверены?" 
                  buttonText="Да">
                  <div className="form form_confirm-deleting-card"  name="confirmDeletingCard"></div>
                </PopupWithForm>

                <EditAvatarPopup 
                  isOpen={isPopupEditAvatarOpen}
                  isClosed={closeAllPopups}
                  editAvatar={handleUpdateAvatar}
                />

              </div>
          </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

/*
https://images.unsplash.com/photo-1617080567959-d8a76e10b6f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80
https://images.unsplash.com/photo-1617075261285-045119530bd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80
https://images.unsplash.com/photo-1617039412398-10d07d621071?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80
*/