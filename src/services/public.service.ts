import axios from "axios";
import { loadAbort } from "../utilities/load-abort-axios-utility"

interface props {
    url: string,
    offset: number,
    limit: number,
}

export const getPaginated = (props: props) => {
   const controller = loadAbort();
   return { 
    call: axios.get<PokemonAPIPage>(
    `${props.url}?offset=${props.offset}?limit=${props.limit}`,
        {
            signal: controller.signal
        }
        ),
        controller
    };
};


type pokemon = number | string
export const getPokemon = (pokemon: pokemon) => {
    const controller = loadAbort();
    return { 
        call: axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, { signal: controller.signal }),
        controller
    }
}