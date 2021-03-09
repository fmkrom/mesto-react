import {useEffect, useState} from 'react';

import api from "./Api.js";

import Card from "./Card.js";

function handleEditAvatarClick(){document.querySelector('.popup_type-edit-avatar').classList.add('popup_open')};

function handleEditProfileClick(){document.querySelector('.popup_type-edit-profile').classList.add('popup_open')};

function handleAddPlaceClick(){document.querySelector('.popup_type-add-card').classList.add('popup_open')};

function Main(){

    const [apiRequest, setApiRequest] = useState([]);
    
    const [user, setUser] = useState([]);
    const [cards, setCards] = useState([]);

    useEffect(()=>{
      handleUserRequest();
      handleCardsRequest();
    }, []);
    
    function handleUserRequest(){
      api.getUser()
      .then(data => {
              const userData = new Object();
              userData.id = data._id;
              userData.name = data.name;
              userData.about = data.about;
              userData.avatar = data.avatar;
              setUser(userData)
        }
      ).catch(err => console.log(err));
    };
  

    function handleCardsRequest(){
      api.getCards()
        .then(data =>{
           //console.log(data);
           const cardsData = data.map(item=>{
              return{
                id: item._id,
                name: item.name,
                link: item.link,
                owner: item.owner,
                likes: item.likes
              }
           })
           setCards(cardsData);
        }).catch(err => console.log(err));
    }

      return(
      <main className="main">
            <section className="profile">
                <div className="profile__avatar">
                    <a href="#" className="profile__edit-avatar-link" onClick={handleEditAvatarClick}>
                      <img src={user.avatar} className="profile__image" alt="Фото профиля"/>
                      <div className="profile__avatar-overlay"></div>
                    </a>
                </div>
                <div className="profile__info">
                    <div className="profile__name-block">
                      <h1 className="profile__name">{user.name}</h1>
                      <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
                    </div>
                    <p className="profile__job">{user.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
            </section>
 
          <section className="cards">
          {
              cards.map(item=>
                <Card
                  link={item.link}
                  name={item.name}
                  likes={item.likes}
                />)
          }
          </section>
        </main>
    )
};

export default Main;

/*
{
              cards.map(item=>
                console.log(
                <Card
                  key={item.id}
                  link={item.link}
                />)
                )
              
              }
*/