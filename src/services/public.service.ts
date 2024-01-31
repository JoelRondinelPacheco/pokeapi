import axios from "axios";
import { loadAbort } from "../utilities/load-abort-axios-utility";
import { getPaginatedProps } from "../models";


//TODO TIPAR GET

export const getPaginated = (props: getPaginatedProps) => {
   const controller = loadAbort();
   return { 
    call: axios.get(
        `${props.url}?offset=${props.offset}&limit=${props.limit}`,
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
        call: axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
            {
                signal: controller.signal
            }
            ),
        controller
    }
}