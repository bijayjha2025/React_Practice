
import { UseAuth } from "../Hooks/UseAuth";
import UserProfile from "../Components/UserProfile.jsx";

function Dashboard() {
  const { isLoggedIn } = UseAuth();

  if (!isLoggedIn) return <p>Access Denied. Please log in.</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <UserProfile />
    </div>
  );
}

export default Dashboard
