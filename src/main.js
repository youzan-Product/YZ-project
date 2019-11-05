import Vue from 'vue'
import App from './App.vue'
import router from './router'   // 接收路由（与main关联）
import store from "./store"   // 关联store
import ElementUI from 'element-ui';  //引入ElementUI
import 'element-ui/lib/theme-chalk/index.css';   //引入ElementUI样式

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
