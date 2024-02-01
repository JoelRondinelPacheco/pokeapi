import {createContext, useEffect, useState } from "react";
import { useAsync, useFetchAndLoad } from "../hooks";
import { getPaginated, getPokemon } from "../services/public.service";
import { PokemonAPIPage, PokemonDetails, getPaginatedProps } from "../models";
import { createPokeapiPage, pokemonDetailsAdapter } from "../adapters";
import useAsyncList from "../hooks/useAsyncList";


interface ContextProps {
    page: PokemonAPIPage | null;
    loading: boolean
    pokemonDetails: PokemonDetails[] | null
}

export const GlobalContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: any) => {

    const [page, setPage] = useState<null | PokemonAPIPage>(null);
    const [pokemonDetails, setPokemonDetails] = useState<null | PokemonDetails[]>(null);

    const { loading, callEndpoint } = useFetchAndLoad();

    const firstPage: getPaginatedProps = {
        url:"https://pokeapi.co/api/v2/pokemon/",
        offset: 0,
        limit: 10
    }

    const getApiPage = async () => await callEndpoint(getPaginated(firstPage));
    const adaptPage = (data: any) => {
        setPage(createPokeapiPage(data));
    }

    useAsync(getApiPage, adaptPage, () => {}, []);

    const getPokemonDetails = async (pokemon: string | number) => await callEndpoint(getPokemon(pokemon));
    const adaptPokemonDetails = (details: any) => {
        let pokemonDetails: PokemonDetails[] = details.map((detail: any) => pokemonDetailsAdapter(detail.data));
        setPokemonDetails(pokemonDetails);
    }

    useAsyncList(getPokemonDetails, adaptPokemonDetails, () => {}, page ? page.results : null, [page])

    return (
        <GlobalContext.Provider value={{
            page,
            loading,
            pokemonDetails
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default PokemonProvider;