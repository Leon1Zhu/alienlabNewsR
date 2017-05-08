/**
 * Created by zhuliang on 2017/5/6.
 */
import Vue from 'vue'
import api from './index'

var getCollectsByUserId = "/api/alinews-collects";
var collectPaperUrl = "/api/alinews-collects/show";

export default {
  getCollectsByUserId : function(userid){
    var params = {
      userid:userid
    }
    return api.get(getCollectsByUserId,params)
  },
  addCollect: function(userid,paperId){
    var params = {
      userid:userid,
      paperId:paperId
    }
    return api.post(getCollectsByUserId,{},params)
  },
  deleteCollect: function(userid,paperId){
    var params = {
      userid:userid,
      paperId:paperId
    }
    return api.delete(getCollectsByUserId,params)
  },
  getCollectPaper : function(userid){
    var params = {
      userid:userid,
    }
    return api.get(collectPaperUrl,params);
  }
}
