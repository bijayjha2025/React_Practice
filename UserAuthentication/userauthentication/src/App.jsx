
import NavBar from "./Components/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import { UseAuth } from "./Hooks/UseAuth.jsx";
import './App.css'

function App() {
  const { isLoggedIn } = UseAuth();
  return (
    <div className = "appContainer">
      <NavBar />
      <Home />
      {isLoggedIn ? <Dashboard /> : <p className="loginInstruction">Please login to access dashboard</p>}
    </div>
  );
}

export default App
