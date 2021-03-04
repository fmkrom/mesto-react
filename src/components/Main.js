function handleEditAvatarClick(){document.querySelector('.popup_type-edit-avatar').classList.add('popup_open')};

function handleEditProfileClick(){document.querySelector('.popup_type-edit-profile').classList.add('popup_open')};

function handleAddPlaceClick(){document.querySelector('.popup_type-add-card').classList.add('popup_open')};


function Main(){
    return (
        <main className="main">
          <section className="profile">
            <div className="profile__avatar">
                <a href="#" className="profile__edit-avatar-link" onClick={handleEditAvatarClick}>
                  <img src="" className="profile__image" alt="Фото профиля"/>
                  <div className="profile__avatar-overlay"></div>
                </a>
            </div>
            <div className="profile__info">
                <div className="profile__name-block">
                  <h1 className="profile__name"></h1>
                  <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
                </div>
                <p className="profile__job"></p>
            </div>
            <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
          </section>

          <section className="cards">
            <template className="template">
                <div className="card">
                  <div className="card__rectangle">
                      <button className="card__delete-button" type="button"></button>
                        <div className="card__image-block">
                            <a href="#" className="card__open-fullsize-image">
                              <img src="" className="card__image" alt=""/>
                            </a>
                        </div>
                      <div className="card__title-block">
                        <h2 className="card__title"></h2>
                        <div className="card__like-section">
                            <button className="card__like-button" type="button"></button>
                            <p className="card__like-number"></p>
                        </div>
                      </div>
                  </div>
                </div>
            </template>
          </section>

        </main>
    )
};

export default Main;