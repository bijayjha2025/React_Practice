
import { UseAuth } from "../Hooks/UseAuth";

function NavBar(){
    const {user, login, logout, isLoggedIn} = UseAuth();

    return(
        <nav>
            <strong>My App</strong>

            {isLoggedIn ? (
        <>
          <span>Hello, {user.name}</span>
          <button onClick={logout}>Logout </button>
        </>
      ) : (
        <button onClick={() => login("Max")}>Login</button>
      )}
        </nav>
    );
}

export default NavBar