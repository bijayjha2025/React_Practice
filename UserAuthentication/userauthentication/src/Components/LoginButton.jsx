
import { UseAuth } from "../Hooks/UseAuth";

function LoginButton(){
    const {login} = UseAuth();

    return(
        <button onClick={()=> login("Max")}>Login</button>
    );
}

export default LoginButton