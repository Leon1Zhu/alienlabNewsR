/**
 * Created by zhuliang on 2017/3/6.
 * axios基础配置
 */
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

var instance = axios.create();

if(localStorage.getItem('token')){
  instance.default.headers.common['Authorization']= 'Bearer ' + localStorage.getItem('token').replace(/(^\")|(\"$)/g, '');
}

export default {
    LoginService: function(data){
      return Vue.axios.post('/api/login',data)
    }
}


