import {useState} from "react";

import PopupWithForm from "./PopupWithForm.js";

function AddCardPopup(props){

    const [cardName, setCardName] = useState('');
    const [cardUrl, setCardUrl] = useState('');

    function handleCardNameSubmit(e){
        setCardName(e.target.value)
    }

    function handleCardUrlSubmit(e){
        setCardUrl(e.target.value)
    }

    function handleAddCardSubmit(e){
        e.preventDefault();
        props.onAddPlace(cardName, cardUrl)
        setCardName('');
        setCardUrl('');
    }

    return(
        <PopupWithForm 
              name="add-card" 
              popupTitle="Новое место" 
              buttonText="Добавить"
              isOpen={props.isOpen}
              isClosed={props.isClosed}
              onSubmit={handleAddCardSubmit}
              >
              <input value={cardName} onChange={handleCardNameSubmit} required id="input_addplace-name" className="form__field" name="addPlaceName" placeholder="Название" type="text" minLength="2" maxlenght="30"/>
              <span className="form-error form-error_hidden" id="input_addplace-name-error"></span>
              <input value={cardUrl} onChange={handleCardUrlSubmit} required id="input_addplace-url" className="form__field" name="addPlaceUrl" placeholder="Ссылка на картинку" type="url"/>
              <span className="form-error form-error_hidden" id="input_addplace-url-error"></span>
        </PopupWithForm>
    )
}

export default AddCardPopup;

/*
https://images.unsplash.com/photo-1617080567959-d8a76e10b6f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80
https://images.unsplash.com/photo-1617075261285-045119530bd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80
https://images.unsplash.com/photo-1617039412398-10d07d621071?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80
*/