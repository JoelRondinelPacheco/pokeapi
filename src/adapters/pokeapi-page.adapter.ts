import { PokemonAPIPage } from "../models"

export const creeatePokeapiPage = (pokeApiPage: any): PokemonAPIPage => {
    
    return {
        count: pokeApiPage.data.count,
        next: pokeApiPage.data.next,
        previous: pokeApiPage.data.previous,
        //TODO REFATOR MAP RESULTS?
        results: pokeApiPage.data.results,
    }
}