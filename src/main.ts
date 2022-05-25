import { createApp } from 'vue';
import 'tailwindcss/tailwind.css';
import 'virtual:svg-icons-register';
import '@/styles/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';

const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
