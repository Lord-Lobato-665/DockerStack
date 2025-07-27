import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { install } from 'vue3-recaptcha-v2';

createApp(App)
  .use(router)
  .use(install, {
    sitekey: '6LexOY8rAAAAAFIEFYwxj9vppIlRstvp6p6_Z8f4',
  })
  .mount('#app');
