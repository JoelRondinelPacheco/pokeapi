import { useState } from "react";
import { useAsync, useFetchAndLoad } from "../../hooks"
import { getPaginated } from "../../services/public.service";
import { createPokeapiPage } from "../../adapters";
import { PokemonAPIPage } from "../../models";

export const Home = () => {
    const { loading, callEndpoint } = useFetchAndLoad();
    const [page, setPage] = useState<null | PokemonAPIPage>(null);

    const getApiPage = async () => await callEndpoint(getPaginated({
        url:"https://pokeapi.co/api/v2/pokemon/",
        offset: 0,
        limit: 10}
        ));
    
    const adaptPage = (data: any) => {
        setPage(createPokeapiPage(data));
    }

    useAsync(getApiPage, adaptPage, () => {}, []);

    return (
        <>
            { loading == null ? 'LOADING' : page?.results.map((p, i) => <h2 key={i}>{p.name}</h2>   )}
        </>
    )
}