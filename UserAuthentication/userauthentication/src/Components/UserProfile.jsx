
import { UseAuth } from "../Hooks/UseAuth";

function UserProfile(){
    const { user, isLoggedIn } = UseAuth();
    
    if (!isLoggedIn){
    return (
    <div className="profileContainer">
      <div className="containerIcon">👤</div>
      <p className="containerText">Login to see profile</p>
    </div>
    );
   }

   return(
    <div className="userProfile">
      <div className="profileHeader">
        <div className="profileImage">{user.name.charAt(0).toUpperCase()}</div>
        <h2 className="profileHeading">User Profile</h2>
        </div>
        <div className="profileDetails">
          <div className="profileItem">
            <span className="profileLabel">Name:</span>
            <span className="profileValue">{user.name}</span>
          </div>
          <div className="profileItem">
            <span className="profileLabel">Email:</span>
            <span className="profileValue">{user.email}</span>
          </div>
        </div>

    </div>
   );

}



export default UserProfile