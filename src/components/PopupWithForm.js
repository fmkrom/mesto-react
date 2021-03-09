function PopupWithForm(props){
return (
    <section className={`popup popup_type-${props.name}`}>
        <div className="popup__overlay popup__overlay_light">
            <div className="popup__content-block">
                <button className="popup__button-close" type="button"></button>
                <div className="popup__form-container">
                    <h3 className="popup__title">{props.popupTitle}</h3>
                        <form className="form" name={props.name} novalidate>
                            {props.children}
                            <button className="form__button-save" type="submit">{props.buttonText}</button>
                        </form>
                </div>
            </div>
        </div>
    </section>
    )
};

<PopupWithForm name="editProfile" popupTitle="Редактировать профиль" children="" />



/*
ПР10: вопрос по выносу компонентов попапов

Коллеги, добрый день!
Продолжаю работу над ПР10, дошел до пункта "Вынесите общий компонент попапов". Возник вопрос:

У 4-х попапов, о которых там идет речь, общая разметка одна и та же. Отличается только разметка форм.
Согласно ТЗ те самые формы (вложенное содержимое) нужно передавать через пропс children. 
Насколько я понимаю, это будет выглядеть примерно так?:

<form className="form" name={props.name} novalidate>
        {props.children}
        <button className="form__button-save" type="submit">{props.buttonText}</button>
</form>

Тогда вопрос: как будет вставляться эта самая разметка сhildren в SJX каждой формы? 
Примерно так?: 

<PopupWithForm name="editProfile" popupTitle="Редактировать профиль" children="
                            <input required className="form__field" id="input_editprofile-name" name="editProfileName" placeholder="Имя" value=""  type="text" minlength="2" maxlenght="40"/>
                            <span className="form-error form-error_hidden" id="input_editprofile-name-error"></span>
                            <input required className="form__field" id="input_editprofile-job" name="editProfileJob" placeholder="Род занятий" value="" type="text" minlength="2" maxlenght="200"/>
                            <span className="form-error form-error_hidden" id="input_editprofile-job-error"></span>
"/>

Мне почему-то кажется, что этот код какой-то кривой. У меня редактор на него ругается. :(

Или для этого children нужно создать отдельный SJX код? Или отдельный реакт-компонент?
А если нужно создать - этот код должен быть в разметке уже в этой ПР? 
Или мы этим будем заниматься в следующей ПР?

В общем, основной вопрос: что это за children, как его вставить в компонент <PopupWithForm /> при помощи пропсов и что с ним делать на данном этапе?
*/


/* Оригинал кода до работы над Children:
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
*/