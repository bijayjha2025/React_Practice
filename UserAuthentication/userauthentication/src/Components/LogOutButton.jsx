
import { UseAuth } from "../Hooks/UseAuth";

function LogOutButton(){
    const {logout} = UseAuth();

    return(
        <button onClick={logout}>Logout</button>
    );
}

export default LogOutButton