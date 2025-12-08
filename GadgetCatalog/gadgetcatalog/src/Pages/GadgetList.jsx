
import { gadgets } from '../Data/Gadgets'
import GadgetCard from '../Components/GadgetCard.jsx'

function GadgetList(){
    return(
        <div>
        <h1>Gadget Catalog</h1>

        <div>
            {gadgets.map(gadget => (
                <GadgetCard key={gadget.id} gadget={gadget}/>
            ))}
        </div>
        </div>
    );
}

export default GadgetList