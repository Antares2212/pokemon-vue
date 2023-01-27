<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'app-button'
}
</script>
<style>
.btn {
    border-width: 1px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    min-width: 100px;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    border-radius: 5px;
    background-color: #fa7035;
    border-color: #fa7035;
    color: #fff;
    text-align: center;
    display: block;
    width: fit-content;
}

.btn:hover {
    color: #fff;
    background-color: #bb4c4c;
    border-color: #bb4c4c;
}
</style>