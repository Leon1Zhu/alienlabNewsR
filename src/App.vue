<template>
  <div id="app" :class="{'canhidden' : showLoginflag}">
    <loginContent :showLoginFlag="showLoginflag" v-on:closeContent="closeContentCB"></loginContent>
    <header id="header" class="animateClass">
      <div class="title-left half-title animateClass-child">
        <img class="title-icon " src="./assets/logo.png">
        <ul class="title-ul font-size-body animateClass-child">
          <router-link :key="index"  class="title-li" v-for="(title,index) in titles" :to="title.path">{{title.name}}</router-link>
        </ul>
      </div>
      <div class="title-right half-title animateClass-child">
        <i class="iconfont main-icon icon-search font-size-title-icon"></i>
        <i class="iconfont main-icon icon-lingdangline_ font-size-title-icon"></i>
        <div class="loginBtn" @click="showLogin" v-if="!loginflag">
        <i class="iconfont  icon-xiaoren  font-size-title-icon" ></i>
            <span class="header-login font-size-body">登陆</span>
            <span class="header-login font-size-body">/</span>
            <span class="header-login font-size-body">注册</span>
        </div>
        <div class="userInfo loginBtn"  v-if="loginflag">
          <i class="iconfont  icon-xiaoren  font-size-title-icon" ></i>
          <Poptip trigger="hover" title="提示标题"  placement="bottom">
            <span class="header-login font-size-body">{{userInfo.nickName}}</span>
            <div  slot="content" >
              <table>
                <tbody>
                <tr >
                  <td  class="loginOut" @click="LoginOut">退出登陆</td>
                </tr>
                </tbody>
              </table>
            </div>
          </Poptip>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer class="main-footer">
        <div class="footer-left-content">
          <div class="chi-left-content">
            <img class="main-footer-logo"  src="./assets/logo.png">
            <div class="alienlab-info font-size-body">
                  Alienlab简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介。
            </div>
            <div class="alienlab-reference font-size-body">
              <div>备案号备案号</div>
              <div class="alienlab-reference-sec">©XXXXX版权所有</div>
            </div>
          </div>
        </div>
        <footer class="footer-right-content">
            <div class="about-left">
                <div class="about-title font-size-body">帮助中心</div>
                <div class="about-body font-size-sup">常见问题</div>
                <div class="about-body font-size-sup">服务条款</div>
                <div class="about-body font-size-sup">版权声明</div>
            </div>
            <div class="about-right">
                <div class="about-title font-size-body">关于我们</div>
                <div class="about-body font-size-sup">关于我们</div>
                <div class="about-body font-size-sup">联系我们</div>
                <div class="about-body font-size-sup">意见反馈</div>
            </div>
        </footer>
    </footer>

  </div>
</template>

<script>
  import  './App.scss'
  import loginContent from  './components/loginAndsignup/loginAndsignup.vue'
export default {
  name: 'app',
 data(){
     return{
         titles:title,
         showLoginflag:false,
     }
 },
  computed:{
    loginflag(){
        console.log(ISLOGIN)
        return ISLOGIN;
    },
    userInfo(){
        console.log(USERINFO)
        return USERINFO;
    }
  },
  created(){
    checkLoginInfo();
  },
  methods:{
      showLogin(){
          this.showLoginflag=true;
      },
       closeContentCB(){
           this.showLoginflag=false;
       },
    LoginOut(){
           loginOut();
           this.$router.go(0)
    }
  },
  components: {
    "loginContent":loginContent,
  },


}
</script>
