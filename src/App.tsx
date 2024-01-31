import './App.css'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import PokemonProvider from './contexts/GlobalContext'
import { Home } from './pages/home/Home'

function App() {

  return (
    <div className="app">
      <PokemonProvider>
        <Navbar />
        <Home />
        <Footer />
      </PokemonProvider>
    </div>
  )
}

export default App
