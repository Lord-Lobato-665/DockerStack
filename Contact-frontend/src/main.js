import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { install } from 'vue3-recaptcha-v2';

createApp(App)
  .use(router)
  .use(install, {
    sitekey: '6LdgMpUrAAAAABD3LOFuG1x6BqrGgtNsb5gFGJft',
  })
  .mount('#app');
