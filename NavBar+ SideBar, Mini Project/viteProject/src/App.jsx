
import React, {useState} from 'react'
import Navbar from './Components/Navbar.jsx'
import Sidebar from './Components/Sidebar.jsx'
import Content from './Components/Content.jsx'
import Layout from './Components/Layout.jsx'


function App() {

  const [selected, setSelected] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = ["Dashboard", "Users", "Settings"];

  return (
    <>
    <Layout>
      <Navbar
        title="ReactLearning"
        onToggleSidebar = {() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen = {sidebarOpen}/>

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

    </>
  )
}

export default App
