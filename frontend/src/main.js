import { createApp } from 'vue';
import App from './App.vue';

import router from './router/index';

// 全局导入必要的样式和脚本：bootstrap及其样式
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap';

import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

// 创建 Pinia 实例并注册持久化插件
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router);
app.use(pinia);

// 注册全局组件
app.component('QuillEditor', QuillEditor);

app.mount('#app');