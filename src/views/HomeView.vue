<template>
  <div class="homeView">
    
  </div>
</template>

<script>
import {usePokemon} from '@/hooks/usePokemon'
export default {
    name: "HomeView",
    setup() {
        const { pokemone, pokemonsAll, getPokemon, getAllPokemons, searchPokemons } = usePokemon();
        return {
            pokemone,
            pokemonsAll,
            getAllPokemons,
            searchPokemons,
            getPokemon
        };
    },
}
</script>
<style>

</style>