
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { gadgets } from "../Data/Gadgets";

function GadgetDetails(){

    const { id } = useParams();
    const gadget = gadgets.find((g)=> g.id === parseInt(id));
    const navigate = useNavigate();

    return(
        <div>
        { gadget ? (
                <div>
                    <img src={gadget.image} alt={gadget.name}/>

                    <h2>{gadget.name}</h2>

                    <p><strong>Brand:</strong>{gadget.brand}</p>
                    <p><strong>Price:</strong>{gadget.price}</p>
                    <p>{gadget.description}</p>

                    <button onClick={()=> navigate(-1)}>Back</button>
                </div>
            ) : ( <p>Gadget not found.</p> ) }
        </div>
    );
}

export default GadgetDetails