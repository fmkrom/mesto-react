function PopupWithForm(props){
return (
    <section className={`popup popup_type-${props.name}`}>
        <div className="popup__overlay popup__overlay_light">
            <div className="popup__content-block">
                <button className="popup__button-close" type="button"></button>
                <div className="popup__form-container">
                    <h3 className="popup__title">{props.popupTitle}</h3>
                        <form className="form" name={props.name} novalidate>
                            <input required className="form__field" id="input_editprofile-name" name="editProfileName" placeholder="Имя" value=""  type="text" minlength="2" maxlenght="40"/>
                            <span className="form-error form-error_hidden" id="input_editprofile-name-error"></span>
                            <input required className="form__field" id="input_editprofile-job" name="editProfileJob" placeholder="Род занятий" value="" type="text" minlength="2" maxlenght="200"/>
                            <span className="form-error form-error_hidden" id="input_editprofile-job-error"></span>
                            <button className="form__button-save" type="submit">{props.buttonText}</button>
                        </form>
                </div>
            </div>
        </div>
    </section>
)
};