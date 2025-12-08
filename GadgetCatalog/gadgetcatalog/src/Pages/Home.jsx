
import React from "react";
import { gadgets } from "../Data/Gadgets";
import { Link } from "react-router-dom";


function Home(){
    return(
        <div>
            {
                gadgets.map((g)=> (
                    <div key={g.id}>
                        <img src={g.name} alt={g.name}/>
                        <h2>{g.name}</h2>
                        <p>{g.brand}</p>
                        <p><strong>{g.price}</strong></p>

                        <Link to={`/gadgets/${g.id}`}>View Details</Link>
                    </div>
                ))}
        </div>
    );
}

export default Home