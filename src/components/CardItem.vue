<template>
    <div class="card__item">
        <div class="card__img">
            <img :src="img" :alt="name"/>
            <span class="card__img-info">{{number + '/' + printedTotal}}</span>
            <span class="card__img-class">sad</span>
        </div>
        <div class="card__controls">
            <div class="card__rarity" v-html="rarity"></div>
            <div class="card__price">
                {{ price ? '$' + price : '—' }}
            </div>
            <div class="card__wishlist opt">
                <i class="fa-solid fa-heart"></i>
            </div>
        </div>
        <div class="card__controls">
            <div class="card__collection opt">
                <i class="fa-solid fa-layer-group"></i>
            </div>
            <div class="card__spinner">
                <div class="card__decrement opt" @click="decrementSpinner">
                    <i class="fa-solid fa-minus"></i>
                </div>
                <div class="card__number">
                    {{ spinner }}
                </div>
                <div class="card__increment opt" @click="incrementSpinner">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
            <div class="card__dropdown opt">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        </div>
    </div>
</template>
<script>
import {rareMarker} from '@/helpers/rareMarker'
export default {
    data() {
        return {
            img: this.card.images.large,
            name: this.card.name,
            price: this.card.cardmarket.prices.averageSellPrice,
            rarity: rareMarker(this.card.rarity),
            printedTotal: this.card.set.printedTotal,
            number: this.card.number,
            spinner: 0
        }
    },
    methods: {
        decrementSpinner() {
            this.spinner--
        },
        incrementSpinner() {
            this.spinner++
        }
    },
    props: {
        card: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
<style>
    .card__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        max-width: 280px;
    }

    .card__img {
        position: relative;
    }
    
    .card__img > img {
        opacity: 0.5;
        cursor: pointer;
    }

    .card__img:hover > img {
        opacity: 1;
    }

    .card__img img {
        border-radius: 0.375rem;
        display: block;
        height: auto;
        width: 100%;
    }
    
    .card__img-info,
    .card__img-class {
        position: absolute;
        bottom: 0;
        display: block;
        background-color: #fff;
        color: #5c6976;
        font-weight: 600;
        font-size: .875rem;
        line-height: 1;
        max-width: 75%;
        overflow: hidden;
        padding: 0.25rem 0.375rem;
        white-space: nowrap;
    }

    .card__img-info {
        left: 0;
        border-right: 2px solid #fff;
        border-top-right-radius: 0.25rem;
    }

    .card__img-class {
        right: 0;
        border-left: 2px solid #fff;
        border-top-left-radius: 0.25rem;
    }

    .card__rarity,
    .card__price,
    .card__wishlist {
        width: 33.33%;
    }
    
    .card__price {
        text-align: center;
    }

    .card__rarity {
        text-align-last: left;
    }

    .card__wishlist {
        text-align: right;
    }

    .card__controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
    }

    .card__spinner {
        display: flex;
        align-items: center;
        font-size: 18px;
    }

    .card__decrement,
    .card__increment {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
    }
    
    .card__number {
        margin: 0 10px;
    }

    .card__dropdown {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1rem;
        height: 2rem;
    }
</style>