import Router from './router/Router/'
import './App.css'
import Navbar from './components/Navbar'
import BottomAppBar from './components/Footer'
import CartProvider from './context/CartContext'

function App() {
  

  return (
    <CartProvider>
      <header>
        <Navbar/>
      </header>
      <main className='container'>
        <Router/>
      </main>
      <footer>
        <BottomAppBar/>
      </footer>
    </CartProvider>
  )
}

export default App
