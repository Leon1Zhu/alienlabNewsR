/**
 * Created by zhuliang on 2017/3/6.
 * 登陆的相关数据的store
 */
import loginFun from '../../api/index'
import * as types  from '../mutations-types'

const  state = {
  token : localStorage.getItem("token") || null
}


const getters = {
  getToken: state => state.token
}

const mutations = {
  [types.USER_SINGIN](state,token){
    localStorage.setItem("token",token);
    state.token = user;
  }
}

const actions = {
  Login ({ commit },data) {
    loginFun.LoginService(data).then(function (response) {
      commit(USER_SINGIN)
    }).catch(function (response) {

    })
  }

}


export default {
  state,
  getters,
  mutations,
  actions
}

