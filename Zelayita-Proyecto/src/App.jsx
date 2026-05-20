import {BrowserRouter as Router, Routes,Route} from 'react-router'
import Home from './Pages/Home' // Página de bienvenida después del login.
import Login from './Pages/Login' // Página de inicio de sesión.
import Products from './Pages/Products'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
