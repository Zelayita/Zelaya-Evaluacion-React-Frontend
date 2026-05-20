import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Nav from '../Components/Nav.jsx' 

//Para Cambiar el bg Color bg-[#EEEEEE]


const Home = () => {
  const navigate = useNavigate() 
  const token = localStorage.getItem('fakestore_token') || sessionStorage.getItem('fakestore_token')

  const user = localStorage.getItem('fakestore_user') || sessionStorage.getItem('fakestore_user') || ''

  useEffect(() => {
    
    if (!token) {
      navigate('/')
    }
  }, [navigate, token])

  const handleLogout = () => {
 
    localStorage.removeItem('fakestore_token')
    localStorage.removeItem('fakestore_user')
    localStorage.removeItem('fakestore_email')
    sessionStorage.removeItem('fakestore_token')
    sessionStorage.removeItem('fakestore_user')
    sessionStorage.removeItem('fakestore_email')
    navigate('/')
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      {token && <Nav />} 
      <div className="flex flex-col items-center justify-center flex-grow">
        <header className="text-center">
            <h1 className="text-4xl font-bold text-blue-600">
            Zelaya Home
            </h1>
            <h3 className="text-4xl font-bold text-blue-600">
            Bienvenido {user ? `, ${user}` : ''}, a Zelaya Home el Mejor Lugar del Mundo para las Peliculas
            </h3>
            <p className="mt-4 text-gray-700">Explora las funcionalidades y Disfruta de la experiencia de estar en donde las Peliculas mandan.</p>
        </header>
        <main className="mt-8">
          <button onClick={handleLogout} className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Cerrar Sesión
          </button>
        </main>
      </div>
    </div>
  )
}

export default Home;
