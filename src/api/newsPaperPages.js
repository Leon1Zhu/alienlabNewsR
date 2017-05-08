/**
 * Created by zhuliang on 2017/3/6.
 * axios基础配置
 */
import Vue from 'vue'
import api  from './index'

var getAllPaper = "/api/alinews-paper";

export default {
    getAllInfo : function(loginflag,userid){
      var params = {
        loginflag:loginflag,
        userid:userid
      }
      return api.get(getAllPaper,params)
    }
}


