<template>
    <select v-model="localModelValue" @change="changeOptions">
        <option disabled value="">
            Выберите из списка
        </option>
        <option 
            v-for="option in options" 
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>
<script>
export default {
    name: 'app-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        localModelValue: {
            get() {
                return this.modelValue
            },
            set(newValue) {
                this.$emit('update:modelValue', newValue)
            },
        }
    },
    methods: {
        changeOptions(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style>
    
</style>