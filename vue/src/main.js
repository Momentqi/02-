import Vue from 'vue'
import App from './App'
import router from './router'
import VueBus from 'vue-bus'
import store from "./store/index"
import toast from "./components/common/toast"
import FastClick from 'fastclick'
import VueLazyload from "vue-lazyload";

Vue.use(VueBus);
Vue.use(toast)

// 解决移动端300ms延迟
FastClick.attach(document.body)
Vue.config.productionTip = false

Vue.prototype.$buss =new Vue()
//使用懒加载插件
Vue.use(VueLazyload,{
  //占位图
  loading:require('./assets/image/common/placeholder.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
  
})
// require('../src/assets/css/base.css')
