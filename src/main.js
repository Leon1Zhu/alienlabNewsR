// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/reset.css'
import './common/css/style.scss'
import './common/font/iconfont.css'
import './global'
import store from './store/index'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
