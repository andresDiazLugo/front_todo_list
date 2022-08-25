import './styles/App.css'
import {Routes, Route} from 'react-router-dom'
import  Nav from './components/Nav/Nav'
import  About from './components/About/About'
import Anotador from './components/Anotador/Anotador'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<Nav/>}>
            <Route index element={<Anotador/>}/>
            <Route path='about'  element={<About/>}/>
          </Route>
          <Route path="*" element={<p>no se encontraron resultados</p>}/>
      </Routes>
      <Footer/>     
    </div>
  )
}

export default App
