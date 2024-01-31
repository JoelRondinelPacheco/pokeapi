import { PokemonAPIPage } from "../models"

export const createPokeapiPage = (pokeApiPage: any): PokemonAPIPage => {
    
    return {
        count: pokeApiPage.count,
        next: pokeApiPage.next,
        previous: pokeApiPage.previous,
        //TODO REFATOR MAP RESULTS?
        results: pokeApiPage.results,
    }
}