import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/UI'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App) 

const icons = [
    faDiscord
]

icons.forEach(icon => {
    library.add(icon)
});

app.component('font-awesome-icon', FontAwesomeIcon)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(store)
    .use(router)
    .mount('#app')
