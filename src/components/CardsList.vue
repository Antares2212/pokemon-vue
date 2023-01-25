<template>
    <div class="card__list">
        <template v-if="data != {}">
            <CardItem v-for="card in data" :card="card" :key="card.id"/>
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