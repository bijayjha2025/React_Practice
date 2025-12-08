

import {Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NavBar.jsx"

import Home from './Pages/Home.jsx'
import GadgetList from './Pages/GadgetList.jsx'
import GadgetDetails from './Pages/GadgetDetails.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'


function App() {

  return (
    <>
     <NavBar/>
      <Routes>
       <Route path='/' element={< Home/>}/>
       <Route path='/gadgets' element={< GadgetList />}/>
       <Route path='/gadgets/:id' element={< GadgetDetails />}/>
       <Route path='/about' element={< About />}/>
       <Route path='/contact' element={< Contact/>}/>
      </Routes>
    </>

  )
}

export default App
