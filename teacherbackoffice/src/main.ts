import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './router/router.js'
import i18n from './data/translate.cjs';
import FlagIcon from 'vue-flag-icon'
import store from './store/store'; 
const app =createApp(App)
app.use(router);
app.use(store); 
app.use(i18n);
app.use(FlagIcon);
app.mount('#app')
