//通过createApp方法创建实例对象
import { createApp } from 'vue'
//引入图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './style.css'
//引入中文组件
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入根组件app
import App from './App.vue'
//引入Elementplus前端框架组件,以及一些样式
import ElementPlus from 'element-plus'
//引入全局组件--顶部，底部是全局组件
import HospitalTop from './components/hospital_top/index.vue'
import HospitalBottom from './components/hospital_botton/index.vue'
import 'element-plus/dist/index.css'
//引入vue-router核心组件吧并安装
import router from './router'
const app = createApp(App)
//引用createapp创建应用实例，比把它挂载到挂载点上
createApp(App).mount('#app')
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom )
//安装vue-router
app.use(router)
app.use(ElementPlus,{
    locale: zhCn,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
