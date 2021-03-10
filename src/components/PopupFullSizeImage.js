function PopupFullSizeImage(props){

return (
    <section className="popup popup_type-fullsize-image">
            <div className="popup__overlay popup__overlay_dark">
                <div className="popup__content-block">
                  <button className="popup__button-close" type="button"></button>
                        <div className="fullsize-image">
                            <img scr={props.link} className="fullsize-image__image" alt={props.name}/>
                            <h4 className="fullsize-image__title">{props.name}</h4>
                        </div>
                </div>
            </div>
    </section>
    )
};

export default PopupFullSizeImage;