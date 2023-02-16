import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

//导入pinia
import {createPinia} from "pinia";

import '@/styles/tailwind.css'
import '@/styles/index.css'

const app = createApp(App)
const pinia = createPinia()
// 5. 创建并挂载根实例
app.use(router)
app.use(pinia)
app.mount('#app')
