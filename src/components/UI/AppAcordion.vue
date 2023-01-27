<template>
    <details>
        <summary>{{id + '. ' + title }}</summary>
        <p>{{ text }}</p>
    </details>
</template>
<script>
export default {
    name: 'app-acordion',
    props: {
        id: {
            type: Number
        },
        title: {
            type: String
        },
        text: {
            type: String
        }
    }
}
</script>
<style scoped>
    summary::-webkit-details-marker {
        display:none;
    }

    summary::-moz-list-bullet {
        list-style-type:none;
    }

    summary::marker {
        display:none;
    } 

    summary {
        padding: 10px 15px;
        display: inline-block;
        font-size: 1.4em;
        cursor: pointer;
        position: relative;
        border-radius: 5px;
    }

    summary:before {
        right: .3em;
        top: .88em;
        color: transparent;
        background: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjM0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC41OSAxNi4zNGw0LjU4LTQuNTktNC41OC00LjU5TDEwIDUuNzVsNiA2LTYgNnoiLz48L3N2Zz4=") no-repeat 50% 50% / 24px 24px;
        width: 1em;
        height: 1em;  
        content: "";
        position: absolute;
        transition: transform .5s;
    }
    
    details[open] > summary:before {
        transform: rotateZ(90deg);
    }

    summary ~ * {
        padding: 0 1em 0 1em;
    }

    details[open] summary ~ * { 
        animation: sweep .5s ease-in-out;
    }

    @keyframes sweep {
        0%    {opacity: 0;}
        100%  {opacity: 1;}
    }

    details {
        display:flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        font-size: .8em;
        margin-bottom: .5rem;
    }

    summary:hover,
    summary:focus {
        background-color: #e6e6e6;
    }

    p {
        padding: 15px;
        font-size: 1.3em;
        font-weight: 300;
    }
</style>