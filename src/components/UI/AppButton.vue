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
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    font-size: 14px;
    background-color: #ff3f4c;
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
    border-radius: 7px;
}

.btn:hover {
    color: #fff;
    background-color: #bb4c4c;
    border-color: #bb4c4c;
}
</style>