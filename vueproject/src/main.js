import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import TemplateSyntax from './components/TemplateSyntax.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)

const pinia = createPinia();


app.use(pinia) // Must be called before router or other plugins that use stores
app.use(router)
app.mount('#app')
