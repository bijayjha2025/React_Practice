
import { Link } from 'react-router-dom'

function GadgetCard({gadget}){
    return(
        <div>
            <img src={gadget.image} alt={gadget.name}/>

            <h3>{gadget.name}</h3>
            <p>Brand: {gadget.brand}</p>
            <p>Price:{gadget.price}</p>

            <Link to={`/gadgets/${gadget.id}`}>View Details</Link>

        </div>

    );
}

export default GadgetCard