/**
 * Created by zhuliang on 2017/3/6.
 * axios基础配置
 */
import Vue from 'vue'

var getAllPaper = "/api/alinews-paper";

export default {
    getAllInfo : function(){
      var p = new Promise(function(resolve, reject){
        Vue.axios.get(getAllPaper).then((response) => {
          resolve(response)
        }).catch(function(response) {
          reject(response)
        })
      });
      return p;
    }
}


