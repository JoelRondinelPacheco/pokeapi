import { Footer } from "../../components/footer/Footer"
import { Navbar } from "../../components/navbar/Navbar"
import PokemonProvider from "../../contexts/GlobalContext"
import { Home } from "./Home"

export const Root = () => {


    return (
      <>
        <PokemonProvider>
        <Navbar />
        <Home />
        <Footer />
      </PokemonProvider>
      </>
    )
}