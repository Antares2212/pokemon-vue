<template>
    <div class="cardStat">
        <div class="cardStat__header">
            <div class="cardStat__title">
                <h1 class="cardStat__name">
                    {{ card.name }}
                </h1>
                <div class="cardStat__meta">
                    <router-link to="">
                        {{ 'HP ' + card.hp }}
                    </router-link>
                    <CardsType :types="card.types"/>
                </div>
            </div>
            <div class="cardStat__type">
                <router-link to="" class="cardStat__type">
                    {{ card.supertype }}
                </router-link>
                <div class="cardStat__evolution">
                    <router-link to="">
                        {{ card.subtypes[0] }}
                    </router-link>
                    – Evolves from
                    <router-link to="">
                        {{ card.evolvesFrom ? card.evolvesFrom : card.evolvesTo[0]}}
                    </router-link>
                </div>
            </div>
        </div>
        <div class="cardStat__body">
            <div v-for="attack in card.attacks" :key="attack.name" class="cardStat__attack">
                <div class="attack__header">
                    <div class="attack__energies">
                        <CardsType :types="attack.cost"/>
                    </div>
                    <div class="attack__title">
                        <div class="attack__name">
                            {{ attack.name }}
                        </div>
                        <div class="attack__damage">
                            {{ attack.damage }}
                        </div>
                    </div>
                </div>
                <div class="attack__description">
                    {{ attack.text }}
                </div>
            </div>
        </div>
        <div class="cardStat__footer">
            <div v-for="item in footerType" :key="item.id" class="cardStat__item">
                <div class="cardStat__item-title">
                    {{ item.name }}
                </div>
                <div class="cardStat__item-value">
                    <CardsType :types="item.value"/> 
                </div>
            </div>
            
            <div v-for="item in footerInfo" :key="item.id" class="cardStat__item">
                <div class="cardStat__item-title">
                    {{ item.name }}
                </div>
                <div class="cardStat__item-value">
                    <router-link v-for="value in item.value" :key="value.value" to="">
                        {{ 
                            value.type && value.value ? 
                            value.type + ' ' + value.value : 
                            value
                        }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CardsType from './CardsType.vue';


export default {
    data() {
        const cardInfo = [
            { id: 1, name: "Expansion", value: this.card.set.name + " " + this.card.set.ptcgoCode },
            { id: 2, name: "Card number", value: this.card.number + "/" + this.card.set.printedTotal },
            { id: 3, name: "Rarity", value: this.card.rarity },
            { id: 4, name: "Card format", value: this.card.legalities.unlimited },
            { id: 5, name: "Illustrators", value: this.card.artist },
        ];
        const cardType = [
            { id: 1, name: "Weakness", value: this.card.weaknesses },
            { id: 2, name: "Resistance", value: this.card.resistances },
            { id: 3, name: "Retreat Cost", value: this.card.retreatCost },
        ]
        return {
            footerInfo: cardInfo,
            footerType: cardType,
        };
    },
    props: {
        card: {
            type: Object,
            default: () => { }
        }
    },
    methods: {
        
    },
    components: { CardsType }
}
</script>
<style>
    .cardStat {
        margin: 0 auto;
        max-width: 720px;
        min-width: 440px;
        width: 100%;
    }
    
    .cardStat__header {
        border-bottom: 1px solid #e3e3e3;
        display: block;
        margin-bottom: 1.5rem;
        padding-bottom: 0.75rem;
    }

    .cardStat__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .cardStat__meta {
        display: flex;
        align-items: center;
    }

    .cardStat__name {
        font-size: 1.6875rem;
        font-weight: 400;
        line-height: 1.25;
        margin: 0 1rem 0 0;
        text-transform: none;
    }

    .cardStat__type {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

    .cardStat__body {
        border-bottom: 1px solid #e3e3e3;
        display: block;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem; 
    }
    
    .cardStat__footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: -0.75rem;
    }

    .cardStat__item {
        max-width: 220px;
        padding: 0.75rem;
        width: 100%;
    }
    
    .cardStat__attack {
        margin-top: 1.5rem;
    }

    .attack__header {
        display: flex;
        align-items: center;
    }

    .attack__name {
        font-size: 1.375rem;
        font-weight: 400;
        line-height: 1.25;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: none;
        white-space: nowrap;
    }
    
    .attack__energies {
        display: flex;
    }
    
    .attack__description {
        display: block;
        margin: 0.75rem 0 0;
    }

    .attack__title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-left: 15px;
    }
    
</style>