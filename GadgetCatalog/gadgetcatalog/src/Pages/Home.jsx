
import React from "react";
import { gadgets } from "../Data/Gadgets";
import { Link } from "react-router-dom";
import HeroSection from "../Components/HeroSection.jsx";


function Home(){
    return(
        <div className="homeContainer">
            <HeroSection/>

            <h1>Featured Gadgets</h1>
            <div className="gadgetGrid">
            {gadgets.slice(0, 6).map((g)=> (
                <div key={g.id} className="homeCard">
                        <img src={g.image} alt={g.name}/>
                        <h2>{g.name}</h2>
                        <p>{g.brand}</p>
                        <p><strong>{g.price}</strong></p>

                        <Link to={`/gadgets/${g.id}`} className="cardLink">View Details</Link>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Home