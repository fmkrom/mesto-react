import {useEffect, useState} from 'react';

import api from "../utils/Api.js";

import Card from "./Card.js";

function Main(props){

    const [user, setUser] = useState({});
    const [cards, setCards] = useState([]);

    function handleUserRequest(data){
      const userData = {};
      userData.id = data._id;
      userData.name = data.name;
      userData.about = data.about;
      userData.avatar = data.avatar;
      setUser(userData)
    }

    function handleCardsRequest(data){
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
    }

    useEffect(()=>{
      Promise.all([api.getUser(), api.getCards()])
      .then(([userData, cardsData]) =>{
        handleUserRequest(userData)
        handleCardsRequest(cardsData)
      }).catch(err => console.log(err));
    }, []);
    
    function handleUserRequest(data){
          const userData = {};
          userData.id = data._id;
          userData.name = data.name;
          userData.about = data.about;
          userData.avatar = data.avatar;
          setUser(userData)
    }
  
    function handleCardsRequest(data){
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
    }

    return(
      <main className="main">
            <section className="profile">
                <div className="profile__avatar">
                    <button className="profile__edit-avatar-link" onClick={props.onEditAvatar}>
                      <img src={user.avatar} className="profile__image" alt="Фото профиля"/>
                      <div className="profile__avatar-overlay"></div>
                    </button>
                </div>
                <div className="profile__info">
                    <div className="profile__name-block">
                      <h1 className="profile__name">{user.name}</h1>
                      <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__job">{user.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
 
          <section className="cards">
          
          {
              cards.map(item=>
                <Card
                  key={item.id}
                  card={item.link}
                  name={item.name}
                  likes={item.likes}
                  onCardClick={props.onOpenFullSizeImage}
                />)
          }
          </section>
        </main>
    )
};

export default Main;
