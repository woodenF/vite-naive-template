import { createApp } from 'vue';
import 'virtual:svg-icons-register';
import App from './App.vue';
import router from './router';
import 'tailwindcss/tailwind.css';

const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

createApp(App)
  .use(router)
  .mount('#app');
