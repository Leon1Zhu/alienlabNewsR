/**
 * Created by zhuliang on 2017/5/4.
 */
import Vue from 'vue'
import api from './index'

var login = "/api/user-login";
var regist = "/api/user-regist/third";
var geetest = "/api/gt/register2";

export default {
  Login : function(username,pwd){
    var params = {
      loginname:username,
      password:pwd
    }
    return api.post(login,{},params)
  },
  regist : function(loginname,password,tel,email,imgurl,resource,nickname){
    var em = email==null? "" : email
    var params = {
      loginname:loginname,
      password:password,
      tel:tel,
      email:em,
      imgurl:imgurl,
      nickname:nickname,
      resource:resource
    }
    return api.post(regist,{},params)
  },
  getGeetest: function(){
    return api.get(geetest+"?t="+new Date().getTime()+"",{})
  }
}
