export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonResults {
    counte: number;
    next: string;
    previous: string;
    results: Pokemon[];
}
