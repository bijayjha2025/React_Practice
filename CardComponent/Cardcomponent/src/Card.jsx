
function Card({name, nickname, description, imageUrl}){
    return(
        <>
        <div className="cardContainer">
            <div className="cardImage">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="cardContent">
                <h3 className="name">{name}</h3>
                <p className="nickname">{nickname}</p>
                <p className="description">{description}</p>
            </div>
        </div>
        </>
    );
}

export default Card