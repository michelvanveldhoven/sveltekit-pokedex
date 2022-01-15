<script>
    import {pokemons} from '../stores/pokedexstore';
    import PokemanCard from '../components/pokemanCard.svelte';

    let searchTerm = "";
    let filteredPokemon = [];

    $: {
        if (searchTerm)
        {
            filteredPokemon = $pokemons.filter(p => p.name.includes(searchTerm));
        } else {
            filteredPokemon = [...$pokemons]
        }
    }
</script>

<svelte:head>
    <title>PokeDex</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Welcome to PokeDex</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<input class="w-full rounded-md text-large p-4 border-2 border-gray-200"
    type="text" placeholder="Search for your favorite Pokemon"
    bind:value={searchTerm} />
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
{#each filteredPokemon as pokeman}
    <PokemanCard pokeman={pokeman} />
{/each}
</div>
