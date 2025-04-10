import { createApp } from 'vue'
import App from './App.vue'
import "./style.css"

const app = createApp(App)

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus, { locale: zhCn })

import TDesign from 'tdesign-mobile-vue';
import 'tdesign-mobile-vue/es/style/index.css';
app.use(TDesign);

import TDesignIconsVueNext from 'tdesign-icons-vue-next';
app.use(TDesignIconsVueNext);

import router from './router'
app.use(router)

app.mount('#app')