<template>
    <div class="cardView">
        <div class="container">
            <div class="cardView__content">
                <CardsList :data="pokemonsAll"/>
                <div class="load__btn btn" @click="load">Load More</div>
            </div>
        </div>
    </div>
</template>
<script>
import CardsList from '@/components/CardsList.vue';
import { usePokemon } from '@/hooks/usePokemon';

export default {
    name: "CardPage",
    data() {
        return {
            pageSize: 25,
            page: 0,
            dataCard: this.pokemonsAll
        }
    },
    methods: {
        load() {
            this.page++
            this.loadMore(this.pageSize, this.page)
        }
    },
    setup() {
        const { getAllPokemons, pokemonsAll } = usePokemon();

        const loadMore = (pageSize = 25, page = 0) => {
            getAllPokemons({pageSize: pageSize, page: page})
        }
        loadMore()
        return {
            pokemonsAll,
            loadMore
        };
    },
    components: { CardsList }
}
</script>
<style>
    .load__btn {
        width: 100%;
        min-width: 320px;
        max-width: 480px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        text-transform: uppercase;
    }
</style>