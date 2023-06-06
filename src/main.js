import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { i18n } from './i18n/i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)

library.add(
    fas
    );

app.use(createPinia()).use(router).use(i18n).component('FontAwesomeIcon', FontAwesomeIcon);

app.mount('#app')
