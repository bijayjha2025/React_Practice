
import { UseAuth } from "../Hooks/UseAuth";

function UserProfile(){
    const { user, isLoggedIn } = UseAuth();
    
    if (!isLoggedIn) return <p>Please log in to see profile.</p>;
    
    return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
    );
}

export default UserProfile