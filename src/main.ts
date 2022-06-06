import { createApp } from 'vue';
import 'tailwindcss/tailwind.css';
import 'virtual:svg-icons-register';
import '@/styles/index.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import 'highlight.js/styles/atom-one-light.css';
import hljs from 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';
import DemoPreview from '@/components/DemoPreview/index.vue';

const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

hljs.configure({
  languages: ['js', 'html', 'css']
});

createApp(App)
  .use(router)
  .use(store)
  .use(hljsVuePlugin)
  .component('DemoPreview', DemoPreview)
  .mount('#app');
