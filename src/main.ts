import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style/element/index.scss';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.use(pinia);
app.mount('#app');
