/**
 * Created by zhuliang on 2017/5/6.
 */
import Vue from 'vue'
import api from './index'

var getPaperInfoByPaperIdAndUpdateTime = "/api/alinewspaperinfo";

export default {
  getCollectsByUserId : function(paperId,UpdateTime){
    var params = {
      paperId:paperId,
      updateTime:UpdateTime
    }
    return api.get(getPaperInfoByPaperIdAndUpdateTime,params)
  },
}
