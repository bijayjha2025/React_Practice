
function Card({name, position, description, imageUrl}){
    return(
        <>
        <div className="cardContainer">
            <div className="cardImage">
                <img src="" alt="" />
            </div>
            <div className="cardContent">
                <h3 className="name">{Name}</h3>
                <p className="position">{Position}</p>
                <p className="description">{Description}</p>
            </div>
        </div>
        </>
    );
}

export default Card