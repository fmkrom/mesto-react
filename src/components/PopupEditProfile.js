import PopupWithForm from "./PopupWithForm.js";

function PopupEditProfile(){
    return (
        <PopupWithForm name="edit-profile" popupTitle="Редактировать профиль" buttonText="Сохранить">
            <input required className="form__field" id="input_editprofile-name" name="editProfileName" placeholder="Имя" value=""  type="text" minlength="2" maxlenght="40"/>
            <span className="form-error form-error_hidden" id="input_editprofile-name-error"></span>
            <input required className="form__field" id="input_editprofile-job" name="editProfileJob" placeholder="Род занятий" value="" type="text" minlength="2" maxlenght="200"/>
            <span className="form-error form-error_hidden" id="input_editprofile-job-error"></span>
        </PopupWithForm>
    )
}

export default PopupEditProfile;