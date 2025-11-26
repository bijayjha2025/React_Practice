
function Card({name, position, description, imageUrl}){
    return(
        <>
        <div className="cardContainer">
            <div className="cardImage">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="cardContent">
                <h3 className="name">{name}</h3>
                <p className="position">{position}</p>
                <p className="description">{description}</p>
            </div>
        </div>
        </>
    );
}

export default Card