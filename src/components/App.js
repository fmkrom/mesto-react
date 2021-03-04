import '../index.css';
import Header from "./Header.js";
import Main from "./Main.js";

function App() {
  return (
      <>
      <body className="body">
        <div className="page">
          <Header />
          <Main />
          <Footer />
  
        <section class="popup popup_type-edit-profile">
          <div class="popup__overlay popup__overlay_light">
              <div class="popup__content-block">
                
                <button class="popup__button-close" type="button"></button>
                
                <div class="popup__form-container">
                    <h3 class="popup__title">Редактировать профиль</h3>
                    
                      <form class="form form_edit-profile" name="editProfile" novalidate>
                          
                          <input required class="form__field" id="input_editprofile-name" name="editProfileName" placeholder="Имя" value=""  type="text" minlength="2" maxlenght="40"/>
                            <span class="form-error form-error_hidden" id="input_editprofile-name-error"></span>
                                                    
                          <input required class="form__field" id="input_editprofile-job" name="editProfileJob" placeholder="Род занятий" value="" type="text" minlength="2" maxlenght="200"/>
                            <span class="form-error form-error_hidden" id="input_editprofile-job-error"></span>
                                                    
                          <button class="form__button-save" type="submit">Сохранить</button>
                      </form>
                </div>
                
              </div>
          </div>
        </section>

        <section class="popup popup_type-add-card">
          <div class="popup__overlay popup__overlay_light">
              <div class="popup__content-block">
                
                <button class="popup__button-close" type="button"></button>
                <div class="popup__form-container">
                    <h3 class="popup__title">Новое место</h3>
                    
                          <form class="form form_add-place"  name="addPlace" novalidate>
                            
                            <input required id="input_addplace-name" class="form__field" name="addPlaceName" placeholder="Название" value=""  type="text" minlength="2" maxlenght="30"/>
                            <span class="form-error form-error_hidden" id="input_addplace-name-error"></span>
                            
                            <input required id="input_addplace-url" class="form__field" name="addPlaceUrl" placeholder="Ссылка на картинку" value=""  type="url"/>
                            <span class="form-error form-error_hidden" id="input_addplace-url-error"></span>
                            
                            <button class="form__button-save" type="submit">Создать</button>
                          </form>
                </div>
              </div>
          </div>
        </section>

    
          <section class="popup popup_type-fullsize-image">
            <div class="popup__overlay popup__overlay_dark">
                <div class="popup__content-block">
                                  
                  <button class="popup__button-close" type="button"></button>
                        <div class="fullsize-image">
                            <img scr="" class="fullsize-image__image" alt=""/>
                            <h4 class="fullsize-image__title"></h4>
                        </div>
                </div>
            </div>
          </section>


          <section class="popup popup_type-delete-card">
              <div class="popup__overlay popup__overlay_light">
                <div class="popup__content-block">
                    <button class="popup__button-close" type="button"></button>
                    <div class="popup__form-container">
                      <h3 class="popup__title">Вы уверены?</h3>
                              <form class="form form_confirm-deleting-card"  name="confirmDeletingCard" novalidate>
                                <button class="form__button-save" type="submit">Да</button>
                            </form>
                    </div>
                </div>
              </div>
          </section>

        
            <section class="popup popup_type-edit-avatar">
              <div class="popup__overlay popup__overlay_light">
                <div class="popup__content-block">
                    <button class="popup__button-close" type="button"></button>
                    <div class="popup__form-container">
                      <h3 class="popup__title">Обновить аватар</h3>
                      <form class="form form_edit-avatar"  name="editAvatar" novalidate>
                          <input required id="input_edit-avatar" class="form__field" name="avatarUrl" placeholder="Ссылка на новый аватар" value=""  type="url"/>
                          <span class="form-error form-error_hidden" id="input_edit-avatar-error"></span>
                          
                          <button class="form__button-save" type="submit">Создать</button>
                      </form>
                    </div>
                </div>
              </div>
            </section>

        </div>
    </body>
    </>
  );
}

export default App;


