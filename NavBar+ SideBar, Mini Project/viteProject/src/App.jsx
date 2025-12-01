
import React, {useState} from 'react'
import Navbar from './Components/Navbar.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Content from './Components/Content.jsx'
import Layout from './Components/Layout.jsx'
import './App.css';

function App() {

  const [selected, setSelected] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = ["Dashboard", "Users", "Settings"];

  const [darkMode, setDarkMode] = useState(false);

  return (
     <div className= {darkMode ? "dark" : ""}>
      <Layout>
       <Navbar
        title="ReactLearning"
        onToggleSidebar = {() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen = {sidebarOpen}
        darkMode = {darkMode}
        onToggleDarkMode = {()=> setDarkMode(!darkMode)}
        />

      <div className='mainContainer'>
          <Sidebar
          items= {menuItems}
          onSelect= {setSelected}
          selected= {selected}
          isOpen = {sidebarOpen}
          />
          <Content selected={selected}/>
      </div>
    </Layout>
    </div>
  )
}

export default App
