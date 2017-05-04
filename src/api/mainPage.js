/**
 * Created by zhuliang on 2017/5/3.
 */
import Vue from 'vue'

var getTodayNews = "/api/alinews-paper/news";

export default {
  getNewsInfo : function(type){
    var p = new Promise(function(resolve, reject){
      Vue.axios.get(getTodayNews,{params:{type:type}}).then((response) => {
        resolve(response)
      }).catch(function(response) {
        reject(response)
      })
    });
    return p;
  }
}
