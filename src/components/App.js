import '../index.css';
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";



function App() {
  return (
      <body className="body">
        <div className="page">
          <Header />
          <Main />
          <Footer />
  
        <section className="popup popup_type-edit-profile">
          <div className="popup__overlay popup__overlay_light">
              <div className="popup__content-block">
                <button className="popup__button-close" type="button"></button>
                <div className="popup__form-container">
                    <h3 className="popup__title">Редактировать профиль</h3>
                      <form className="form form_edit-profile" name="editProfile" novalidate>
                          <input required className="form__field" id="input_editprofile-name" name="editProfileName" placeholder="Имя" value=""  type="text" minlength="2" maxlenght="40"/>
                          <span className="form-error form-error_hidden" id="input_editprofile-name-error"></span>
                          <input required className="form__field" id="input_editprofile-job" name="editProfileJob" placeholder="Род занятий" value="" type="text" minlength="2" maxlenght="200"/>
                          <span className="form-error form-error_hidden" id="input_editprofile-job-error"></span>
                          <button className="form__button-save" type="submit">Сохранить</button>
                      </form>
                </div>
              </div>
          </div>
        </section>

        <section className="popup popup_type-add-card">
          <div className="popup__overlay popup__overlay_light">
              <div className="popup__content-block">
                
                <button className="popup__button-close" type="button"></button>
                <div className="popup__form-container">
                    <h3 className="popup__title">Новое место</h3>
                    
                          <form className="form form_add-place"  name="addPlace" novalidate>
                            
                            <input required id="input_addplace-name" className="form__field" name="addPlaceName" placeholder="Название" value=""  type="text" minlength="2" maxlenght="30"/>
                            <span className="form-error form-error_hidden" id="input_addplace-name-error"></span>
                            
                            <input required id="input_addplace-url" className="form__field" name="addPlaceUrl" placeholder="Ссылка на картинку" value=""  type="url"/>
                            <span className="form-error form-error_hidden" id="input_addplace-url-error"></span>
                            
                            <button className="form__button-save" type="submit">Создать</button>
                          </form>
                </div>
              </div>
          </div>
        </section>

    
          <section className="popup popup_type-fullsize-image">
            <div className="popup__overlay popup__overlay_dark">
                <div className="popup__content-block">
                                  
                  <button className="popup__button-close" type="button"></button>
                        <div className="fullsize-image">
                            <img scr="" className="fullsize-image__image" alt=""/>
                            <h4 className="fullsize-image__title"></h4>
                        </div>
                </div>
            </div>
          </section>


          <section className="popup popup_type-delete-card">
              <div className="popup__overlay popup__overlay_light">
                <div className="popup__content-block">
                    <button className="popup__button-close" type="button"></button>
                    <div className="popup__form-container">
                      <h3 className="popup__title">Вы уверены?</h3>
                              <form className="form form_confirm-deleting-card"  name="confirmDeletingCard" novalidate>
                                <button className="form__button-save" type="submit">Да</button>
                            </form>
                    </div>
                </div>
              </div>
          </section>

        
            <section className="popup popup_type-edit-avatar">
              <div className="popup__overlay popup__overlay_light">
                <div className="popup__content-block">
                    <button className="popup__button-close" type="button"></button>
                    <div className="popup__form-container">
                      <h3 className="popup__title">Обновить аватар</h3>
                      <form className="form form_edit-avatar"  name="editAvatar" novalidate>
                          <input required id="input_edit-avatar" className="form__field" name="avatarUrl" placeholder="Ссылка на новый аватар" value=""  type="url"/>
                          <span className="form-error form-error_hidden" id="input_edit-avatar-error"></span>
                          
                          <button className="form__button-save" type="submit">Создать</button>
                      </form>
                    </div>
                </div>
              </div>
            </section>

        </div>
    </body>
  );
}

export default App;


