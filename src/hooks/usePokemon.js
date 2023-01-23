import pokemon from '@/lib/PokemonApi'
import { onMounted, ref } from 'vue'

pokemon.configure({apiKey: 'c276b120-749e-4cfe-a1bc-9c3fe369a1f9'})

export const usePokemon = (option = {}) => {
    const pokemone = ref({})
    const pokemonsAll = ref([])
    const searchedPokemons = ref([])

    const getPokemon = async (id) => {
        await pokemon.card.find(id)
        .then(card => pokemone.value = card)
    }
    
    const getAllPokemons = async (args) => {
        await pokemon.card.all(args, pokemonsAll.value)
    }

    const searchPokemons = async (option) => {
        await pokemon.card.where(option)
        .then(card => searchedPokemons.value = card)
    }

    const setCard = async (id) => {
        await pokemon.set.find(id)
        .then(card => pokemone.value = card)
    }
    
    const setAllCards = async (args) => {
        await pokemon.set.all(args, pokemonsAll.value)
    }

    const searchCards = async (option) => {
        await pokemon.set.where(option)
        .then(card => searchedPokemons.value = card)
    }
    
    onMounted(() => {
        getAllPokemons(option)
    })

    return {
        pokemonsAll,
        pokemone,
        getPokemon,
        getAllPokemons,
        searchPokemons,
        setCard,
        setAllCards,
        searchCards
    }
}
