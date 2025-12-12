
import NavBar from "./Components/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import { UseAuth } from "./Hooks/UseAuth.jsx";

function App() {
  const { isLoggedIn } = UseAuth();
  return (
    <>
      <NavBar />
      <Home />
      {isLoggedIn ? <Dashboard /> : <p>Please login to access dashboard</p>}
    </>
  );
}

export default App
