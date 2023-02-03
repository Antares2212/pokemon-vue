<template>
    <template v-if="types != '[object Object]'">
        <router-link v-for="type in types" :key="type" to="" class="typeMark">
            <img :src="require(`../assets/img/${type}.png`)" :alt="type">
        </router-link>
    </template>
    <template v-else>
        <router-link v-for="type in types" :key="type" to="" class="typeMark">
            <img :src="require(`../assets/img/${type.type}.png`)" :alt="type"> 
            <div class="typeMark__value">
                {{type.value}}
            </div>
        </router-link>
    </template>
</template>
<script>
export default {
    props: {
        types: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style>
    .typeMark {
        display: inline-flex;
    }

    .typeMark__value {
        margin-left: 5px;
    }

    .typeMark:not(:first-child) {
        margin-left: 5px;
    }
</style>