import { PokemonDetails } from "../models"


export const pokemonDetailsAdapter = (pokemon: any): PokemonDetails => {

    return {
        base_experience: pokemon.base_experience,
        height: pokemon.height,
        id: pokemon.id,
        is_default: pokemon.is_default,
        location_area_encounters: pokemon.location_area_encounters,
        name: pokemon.name,
        order: pokemon.order,
        imageDefault: pokemon.sprites.other.dream_world.front_default,
        imageAlternative: pokemon.sprites.front_default,
        weight: pokemon.weight
    }

}