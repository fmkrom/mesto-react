import PopupWithForm from "./PopupWithForm.js";

function PopupAddPlace(){
    return (
        <PopupWithForm name="add-card" popupTitle="Новое место" buttonText="Добавить">
            <input required id="input_addplace-name" className="form__field" name="addPlaceName" placeholder="Название" value=""  type="text" minlength="2" maxlenght="30"/>
            <span className="form-error form-error_hidden" id="input_addplace-name-error"></span>
            <input required id="input_addplace-url" className="form__field" name="addPlaceUrl" placeholder="Ссылка на картинку" value=""  type="url"/>
            <span className="form-error form-error_hidden" id="input_addplace-url-error"></span>
        </PopupWithForm>
    )
}

export default PopupAddPlace;