import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import svg from './icons'

const app = createApp(App)

app.use(router).use(svg)

app.mount('#app')
