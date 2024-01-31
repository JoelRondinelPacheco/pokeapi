import {createContext, useState } from "react";
import { PokemonAPIPage, getPaginatedProps } from "../models";
import { useAsync, useFetchAndLoad } from "../hooks";
import { getPaginated } from "../services/public.service";
import { createPokeapiPage } from "../adapters";


interface ContextProps {
    page: PokemonAPIPage | null;
    loading: boolean
}

export const GlobalContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: any) => {

    const [page, setPage] = useState<null | PokemonAPIPage>(null);
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

    return (
        <GlobalContext.Provider value={{
            page,
            loading
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default PokemonProvider;