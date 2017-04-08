/**
 * Created by zhuliang on 2017/3/6.
 * axios基础配置
 */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)
Vue.prototype.$http = axios
/*Vue.prototype.$Interceptor = function(token){
  axios.interceptors.request.use(
    config => {
      console.log(config)
        config.headers.Authorization = token;
      return config;
    },
    err => {
      return Promise.reject(err);
    });
}*/


export default {
    LoginService: function(data){
      return Vue.axios.post('/api/login',data)
    }
}


