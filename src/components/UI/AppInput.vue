<template>
    <input 
        :value="modelValue"
        @input="updateInput"
        class="input"  
        type="text" 
        autocomplete="off">
</template>
<script>
export default {
    name: 'app-input',
    props : {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>
<style>
    .input {
        padding: 0;
        border-radius: 0px;
        background: none;
        box-shadow: none;
        color: #000;
        padding-left: 30px;
    }
</style>