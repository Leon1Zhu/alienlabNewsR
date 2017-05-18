// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/reset.css'
import 'iview/dist/styles/iview.css';    // 使用 CSS
import Input from 'iview';
import Button from 'iview';
import Dropdown from 'iview';
import Progress from 'iview';
import './filter'
import './common/font/iconfont.css'
import './common/css/style.scss'
import './globalFun'
/*import store from './store/index'*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './mainFun'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {TweenLite} from "gsap";
Vue.use(VueAxios,axios)
Vue.prototype.$http = axios
//typical import

Vue.use(VueAwesomeSwiper)
Vue.use(Input)
Vue.use(Button)
Vue.use(Dropdown)
Vue.use(Progress)
Vue.config.productionTip = false
/* eslint-disable no-new */
// Alter defaults after instance has been created
Vue.axios.post(tokenUrl,{}).then(function(response){
  TOKEN = response.data.token;
  TOKENTIME = new Date();
  buildApp();
}).catch(function(response){
  console.log(response)
  buildApp();
})
function buildApp(){
  new Vue({
    router,
   /* store,*/
    created(){

    },
    render: h => h(App),
  }).$mount('#app')
}
window.timer=setInterval(refushToken,30*60*1000);
