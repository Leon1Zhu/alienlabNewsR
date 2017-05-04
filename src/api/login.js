/**
 * Created by zhuliang on 2017/5/4.
 */
import Vue from 'vue'

var login = "/api/user-login";
var regist = "/api/user-regist/third";
var geetest = "/api/gt/register2";

export default {
  Login : function(username,pwd){
    return new Promise(function(resolve, reject){
      Vue.axios.post(login,{params:{loginname:username,password:pwd}}).then((response) => {
        resolve(response)
      }).catch(function(response) {
        reject(response)
      })
    });
  },
  regist : function(loginname,password,tel,email,imgurl,resource){
    return new Promise(function(resolve,reject){
      Vue.axios.post(regist,{
        loginname:loginname,
        password:password,
        tel:tel,
        email:email,
        imgurl:imgurl,
        resource:resource
      }).then((response) =>{
        resolve(response)
      }).catch((response)=>{
        reject(response)
      })
    })
  },
  getGeetest: function(){
    return new Promise(function(resolve,reject){
      Vue.axios.get(geetest+"?t="+new Date().getTime()+"",{}).then((response) =>{
        resolve(response)
      }).catch((response)=>{
        reject(response)
      })
    })
  }
}
