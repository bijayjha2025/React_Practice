
import { UseAuth } from "../Hooks/UseAuth";
import UserProfile from "../Components/UserProfile.jsx";

function Dashboard() {
  const { isLoggedIn } = UseAuth();

  if (!isLoggedIn){
    return (
    <div className="accessDenied">
      <p className="deniedText">Access Denied. Please log in.</p>
    </div>
    );
  }

  return (
    <div className="dashboardPage">
      <h1 className="dashboardTitle">Dashboard</h1>
      <UserProfile />
    </div>
  );
}

export default Dashboard
