export interface PokemonPreview {
    imageUrl: string;
    name: string;
    weight: number;
    pokemonNumber: number;
    height: number;
}

export interface PokemonDetails {
    base_experience:          number;
    height:                   number;
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    name:                     string;
    order:                    number;
    imageDefault:                  string;
    imageAlternative: string,
    weight:                   number;
}
