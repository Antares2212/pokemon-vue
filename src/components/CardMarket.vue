<template>
    <div v-for="price in prices" :key="price" class="cardMarket">
        <div class="cardMarket__header">
            
        </div>
        <div class="cardMarket__body">
            <div class="cardMarket__item">
                <div class="cardMarket__title">
                    Market
                </div>
                <div class="cardMarket__price">
                    ${{price.market}}
                </div>
            </div>
            <div class="cardMarket__item">
                <div class="cardMarket__title">
                    Low
                </div>
                <div class="cardMarket__price">
                    ${{price.low}}
                </div>
            </div>
            <div class="cardMarket__item">
                <div class="cardMarket__title">
                    Mid
                </div>
                <div class="cardMarket__price">
                    ${{price.mid}}
                </div>
            </div>
            <div class="cardMarket__item">
                <div class="cardMarket__title">
                    High
                </div>
                <div class="cardMarket__price">
                    ${{price.high}}
                </div>
            </div>
        </div>
        <div class="cardMarket__footer">
            <div class="cardMarket__btn btn">
                <i class="fa-solid fa-up-right-from-square"></i>
                View on TCGplayer
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        prices: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
<style>
    .cardMarket__title {
        font-size: .875rem;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 0.125rem;
        text-transform: uppercase;
        color: #24292e;
    }

    .cardMarket__body {
        column-gap: 1rem;
        display: grid;
        grid-template-columns: repeat(4,1fr);
    }

    .cardMarket__btn {
        margin-top: 0.5rem;
        background-color: transparent;
        color: #24292e;
        border: 1px solid #cfcfcf;
    }

    .cardMarket + .cardMarket {
        border-top: 1px solid #e3e3e3;
        margin-top: 0.75rem;
        padding-top: 0.75rem;
    }
</style>