import '../index.css';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";

import { useState, useEffect } from 'react';

import api from "../utils/api.js";

import CurrentUserContext from "../contexts/CurrentUserContext.js";

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
    const isLiked = card.likes.some((item)=> item._id === currentUser._id);
    
    api.toggleLikeCard(card.id, !isLiked)
    .then((newCardData)=>{
      setCurrentCards(((state)=> state.map((c) => c._id === card.id ? newCardData : c)))
    })  
  }

  function handleDeleteCard(data){
    api.deleteCard(data.id)
    .then(()=>{
      const cardsAfterDelete = currentCards.filter(card => !(card._id === data.id));
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

                <AddPlacePopup
                  isOpen={isPopupAddPlaceOpen}
                  isClosed={closeAllPopups}
                  onAddPlace={handleAddPlaceSubmit}
                />
                
                <EditProfilePopup 
                  isOpen={isPopupEditProfileOpen} 
                  onClose={closeAllPopups}
                  onUpdateUser={handleUpdateUser}  
                />

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
Код попапа удаления карточки для дальнейшей работы:

<PopupWithForm 
                  name="delete-card" 
                  popupTitle="Вы уверены?" 
                  buttonText="Да">
                  <div className="form form_confirm-deleting-card"  name="confirmDeletingCard"></div>
</PopupWithForm>
*/