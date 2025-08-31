import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/main.css'
import './css/mobile.css'

createApp(App).use(router).mount('#app')
