import PopupWithForm from "./PopupWithForm.js";

function PopupEditAvatar(){
    return (
        <PopupWithForm name="edit-avatar" popupTitle="Редактировать аватар" buttonText="Сохранить аватар">
            <input required id="input_edit-avatar" className="form__field" name="avatarUrl" placeholder="Ссылка на новый аватар" value=""  type="url"/>
            <span className="form-error form-error_hidden" id="input_edit-avatar-error"></span>
        </PopupWithForm>
    )
}

export default PopupEditAvatar;