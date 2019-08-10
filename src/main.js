import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入mint-ui
import MintUI from 'mint-ui'
//单独引入样式文件
import "mint-ui/lib/style.css"
//将MintUI注册给Vue示例
Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
