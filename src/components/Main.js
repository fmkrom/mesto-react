import {useEffect, useState, useContext} from 'react';

import api from "../utils/Api.js";

import Card from "./Card.js";

import CurrentUserContext from "../contexts/CurrentUserContext.js";

function Main(props){
    const currentUserData = useContext(CurrentUserContext);
    
    const [cards, setCards] = useState([]);

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
      Promise.all([api.getCards()])
      .then(([cardsData]) =>{
        handleCardsRequest(cardsData)
      }).catch(err => console.log(err));
    }, []);
    
    return(
      <main className="main">
            <section className="profile">
                <div className="profile__avatar">
                    <button className="profile__edit-avatar-link" onClick={props.onEditAvatar}>
                      <img src={currentUserData.avatar} className="profile__image" alt="Фото профиля"/>
                      <div className="profile__avatar-overlay"></div>
                    </button>
                </div>
                <div className="profile__info">
                    <div className="profile__name-block">
                      <h1 className="profile__name">{currentUserData.name}</h1>
                      <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                    </div>
                    <p className="profile__job">{currentUserData.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>
 
          <section className="cards">
          
          {
              cards.map(item=>
                <Card
                  owner={item.owner}
                  key={item.id}
                  url={item.link}
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
