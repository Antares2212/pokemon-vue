import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardsView from '../views/CardsView.vue'
import HelpView from '../views/HelpView.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
