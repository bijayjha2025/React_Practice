
import { UseAuth } from "../Hooks/UseAuth";

function NavBar(){
    const {user, login, logout, isLoggedIn} = UseAuth();

    return(
        <nav className="navbar">
          <div className="navbarDesign">
            <span className="designIcon">🔐</span>
            <strong className="designText">My App</strong>
            </div>
          
           <div className="navbarActions">
            {isLoggedIn ? (
            <div className="userSection">
            <span className="userGreeting">
              <span className="greetingIcon">👋</span>
              Hello, <strong>{user.name}</strong></span>
            <button className ="logoutButton" onClick={logout}>
              <span className="buttonText">Logout</span> 
            </button>
            </div>) : (
            <button className="loginButton" onClick={() => login("Max")}>
            <span className="buttonText">Login</span>
            </button> )}
          </div>
      </nav>
    );
}

export default NavBar