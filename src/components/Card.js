function Card (props){
    return(
        <div className="template">
            <div className="card">
                <div className="card__rectangle">
                    <button className="card__delete-button" type="button"></button>
                    <div className="card__image-block">
                    <a href={props.link} className="card__open-fullsize-image">
                        <img src={props.link} className="card__image" alt="Card Name" />
                    </a>
                    </div>
                        <div className="card__title-block">
                        <h2 className="card__title">{props.name}</h2>
                        <div className="card__like-section">
                            <button className="card__like-button card__like-button_inactive" type="button"></button>
                            <p className="card__like-number">{props.likes.length}</p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default Card;