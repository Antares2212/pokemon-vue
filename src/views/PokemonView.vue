<template>
    <div class="pokemonView">
        <div class="container">
            <div class="page-content">
                <CardItem :card="pokemone"/>
                <CardStat :card="pokemone"/>
            </div>
        </div>
        
    </div>
</template>
<script>
import { usePokemon } from '@/hooks/usePokemon';

import CardItem from '@/components/CardItem.vue'
import CardStat from '@/components/CardStat.vue';

export default {
    setup (props, {attrs}) {
        const {getPokemon, pokemone} = usePokemon()    
        
        getPokemon(attrs.name);
    
        return {
            pokemone
        }
    },
    components: { CardItem, CardStat },
}
</script>
<style>
    .pokemonView .page-content {
        display: flex;
    }
    
    .pokemonView .card__img > img {
        opacity: 1;
    }
    
    .page-content {
        padding-top: 2rem;
    }
</style>