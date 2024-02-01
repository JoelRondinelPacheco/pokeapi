import { EntityInfo, PokemonAPIPage } from "../models"

export const createPokeapiPage = (pokeApiPage: any): PokemonAPIPage => {
    let results: EntityInfo[] = pokeApiPage.results.map((result: any) => ({
        name: result.name,
        url: result.url,
    }))
    return {
        count: pokeApiPage.count,
        next: pokeApiPage.next,
        previous: pokeApiPage.previous,
        //TODO REFATOR MAP RESULTS?
        results: results,
    }
}