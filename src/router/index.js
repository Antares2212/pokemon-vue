import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardsView from '../views/CardsView.vue'
import HelpView from '../views/HelpView.vue'
import AboutView from '../views/AboutView.vue'
import PokemonView from '../views/PokemonView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cards',
    name: 'cards',
    component: CardsView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/cards/:name',
    name: 'pokemon',
    component: PokemonView,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
