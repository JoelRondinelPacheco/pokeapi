import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import styles from "./style.module.css"
import { toPascalCase } from "../../../utilities";

interface PokemonPreviewProps {
    idx: number
}



export const PokemonPreview = ({idx}: PokemonPreviewProps) => {
    
    const { pokemonDetails } = useContext(GlobalContext);
    const { name, imageDefault, imageAlternative, weight, height, order } = pokemonDetails![idx]

    return (
        <section className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={imageDefault} alt="" />
            </div>
            
            <div className={`${styles.bgGlass} ${styles.infoContainer}`}>
                <h2 className={styles.name}>{toPascalCase(name)}</h2>
                <div className={styles.info}>
                    <h3>Wheight: {weight}</h3>
                    <h3>Height: {height}</h3>
                    <h3>Order: {order}</h3>
                </div>
            </div>
        </section>
    )
}