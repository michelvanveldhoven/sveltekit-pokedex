import { writable } from "svelte/store";

export const pokemons = writable([]);

const fetchpokemons = async() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
    const res= await fetch(url);
    const data = await res.json();
    const loadedPokemons = data.results.map((pokemon, index) => 
    {
        return {
            id: index + 1,
            name: pokemon.name,
            imageUrl : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +1}.png`
        }
    });
    pokemons.set(loadedPokemons);
}

fetchpokemons();