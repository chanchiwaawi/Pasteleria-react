
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Productos from './pages/Productos'
import Nosotros from './pages/nosotros'
import { Route,Routes,BrowserRouter as Router } from 'react-router-dom'
import './css/main.css'



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/productos' element={<Productos/>}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
          <Route path='/nosotros' element={<Nosotros/>}></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
