// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/reset.css'
import 'iview/dist/styles/iview.css';    // 使用 CSS
import './common/font/iconfont.css'
import './common/css/style.scss'
import './global'
import store from './store/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import $ from 'jquery'
import Input from 'iview';
import Button from 'iview';
import './mainFun'
//typical import
import {TweenLite} from "gsap";
Vue.use(VueAwesomeSwiper)
Vue.use(Input)
Vue.use(Button)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
