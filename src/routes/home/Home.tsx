import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { PokemonPreview } from "./components/PokemonPreview";
import styles from "./styles.module.css"

export const Home = () => {

    const { loading, page, pokemonDetails } = useContext(GlobalContext);

    return (
        <>
            { loading == null ? 'LOADING' : pokemonDetails?.map((p, i) => <div className={styles.cardContainer} key={i}><PokemonPreview idx={i} /></div>   )}
        </>
    )
}