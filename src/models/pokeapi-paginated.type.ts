export interface EntityInfo {
    name: string;
    url: string;
}

export interface PokemonAPIPage {
    count: number;
    next: string | null;
    previous: string | null;
    results: EntityInfo[];
}

export interface getPaginatedProps {
    url: string,
    offset: number,
    limit: number,
}