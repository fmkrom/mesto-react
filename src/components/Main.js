function Main(){
    return (
        <main className="main">
          <section className="profile">
            <div className="profile__avatar">
                <a href="#" className="profile__edit-avatar-link">
                  <img src="" className="profile__image" alt="Фото профиля"/>
                  <div className="profile__avatar-overlay"></div>
                </a>
            </div>
            <div className="profile__info">
                <div class="profile__name-block">
                  <h1 class="profile__name"></h1>
                  <button class="profile__edit-button" type="button"></button>
                </div>
                <p class="profile__job"></p>
            </div>
            <button class="profile__add-button" type="button"></button>
          </section>

          <section class="cards">
            <template class="template">
                <div class="card">
                  <div class="card__rectangle">
                      <button class="card__delete-button" type="button"></button>
                        <div class="card__image-block">
                            <a href="#" class="card__open-fullsize-image">
                              <img src="" class="card__image" alt=""/>
                            </a>
                        </div>
                      <div class="card__title-block">
                        <h2 class="card__title"></h2>
                        <div class="card__like-section">
                            <button class="card__like-button" type="button"></button>
                            <p class="card__like-number"></p>
                        </div>
                      </div>
                  </div>
                </div>
            </template>
          </section>

        </main>
    )
};