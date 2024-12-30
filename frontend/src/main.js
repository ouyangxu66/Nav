createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap';
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
// 导入依赖和插件

const pinia = createPinia()
const app = createApp(App);
pinia.use(piniaPluginPersistedstate)
app.use(router);
app.use();
app.component('QuillEditor', QuillEditor)
app.mount('#app');
// 创建应用实例和绑定