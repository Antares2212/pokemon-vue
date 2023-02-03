<template>
    <div class="card__list">
        <template v-if="data != {}">
            <router-link v-for="card in data" :to="'/cards/' + card.id" :key="card.id">
                <CardItem :card="card" />
            </router-link>
        </template>
    </div>
</template>
<script>
import CardItem from './CardItem.vue';

export default {
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    components: { CardItem },
}
</script>
<style>
    .card__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
</style>