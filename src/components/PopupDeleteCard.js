import PopupWithForm from "./PopupWithForm.js";

function PopupDeleteCard(){
    return (
        <PopupWithForm name="delete-card" popupTitle="Вы уверены?" buttonText="Да">
            <form className="form form_confirm-deleting-card"  name="confirmDeletingCard" novalidate></form>
        </PopupWithForm>
    )
}

export default PopupDeleteCard;