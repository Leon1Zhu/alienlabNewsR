<template>
  <div id="login-content" class="animateClass6"   :class="{'show':showLoginFlag}">
      <i class="iconfont icon-guanbi font-size-title-icon animateClass" @click="closeContent"></i>
      <div class="main-content">
        <div class="login-content " >
          <div class="login-left-content animateClass"  :class="{'signup' : loginstatus=='signup'}">
            <div v-show="loginstatus=='login'">
              <div class="denglu-icon-div">
                <i class="iconfont icon-denglu" style="height: 20%;width: 20%;"></i>
              </div>
              <Input id="loginName" v-model="loginName" class="logininput"  placeholder="用 户 名:"></Input>
              <Input id="loginPassword" v-model="loginPassword" class="logininput"  placeholder="密 码:"></Input>
              <div style="margin-top: 1%;">
                <label>完成验证：</label>
                <div id="captcha2">
                  <p id="wait2" class="show">正在加载验证码......</p>
                </div>
              </div>
              <p id="notice2" class="hide">请先完成验证</p>
              <Checkbox class="rememberMe" v-model="rememberMe">记 住 我</Checkbox>

              <div class="QQcontent">
                其他账号登录：
                <span id="qqLoginBtn"></span>
              </div>

              <Button class="loginButton" shape="circle" type="info" long @click="Login">登&nbsp;&nbsp;陆</Button>
            </div>
            <div v-if="loginstatus=='signup'">
              <div class="font-size-title" >已有账号？</div>
              <Button type="ghost" class="font-size-sup" shape="circle" style="margin-top: 5%;" @click="loginstatus='login'">点我登陆</Button>
            </div>
          </div>
          <div class="login-right-content animateClass" :class="{'signup' : loginstatus=='signup'}" >
              <div class="no-sign-up" style="text-align: center;"  v-show="loginstatus=='login'">
                  <div class="font-size-title" >还没有账号？</div>
                <Button type="ghost" class="font-size-sup" shape="circle" style="margin-top: 5%;" @click="loginstatus='signup'">点我注册</Button>
              </div>
              <div class="sign-up" v-if="loginstatus=='signup'" style="display: flex;width: 100%;">
                <div class="signupfont font-size-title" style="color: #5b5b5b;text-align: right;margin-right: 10px;">用户注册:</div>
                <div style="width: auto;">
                  <Input  class="logininput signupinput" v-model="regist.nickname"  placeholder="昵 称："></Input>
                  <Input  class="logininput signupinput" v-model="regist.username"  placeholder="用 户 名："></Input>
                  <Input  class="logininput signupinput" v-model="regist.pwd"  placeholder="密 码:"></Input>
                  <Input  class="logininput signupinput" v-model="regist.pwdSec"  placeholder="重复密码:"></Input>
                  <Input  class="logininput signupinput" v-model="regist.tel"  placeholder="手机号码:"></Input>
                  <Input  class="logininput signupinput" v-model="regist.email"  placeholder="电子邮箱:"></Input>
                  <Button class="signButton" shape="circle" type="info" long @click="registFun">注&nbsp;&nbsp;册</Button>
                </div>
              </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
  import './loginAndsignup.scss'
  import Checkbox from 'iview/src/components/checkbox';
  import loginapi from '../../api/login'
    export default{
      props: ['showLoginFlag'],
      data(){
            return {
              loginstatus:'login',
              captchaObj:null,
              regist:{
                  nickname:null,
                  username:null,
                  pwd:null,
                  pwdSec:null,
                  tel:null,
                  email:null,
              },
              loginName:null,
              loginPassword:null,
              rememberMe:false,
            }
      },
      created(){
          var vm = this;
        loginapi.getGeetest().then((response) =>{
          initGeetest({
            // 以下配置参数来自服务端 SDK
            gt: response.data.gt,
            challenge: response.data.challenge,
            offline: !response.data.success,
            new_captcha: response.data.new_captcha,
            product: "popup", // 产品形式，包括：float，embed，popup。注意只对PC版验证码有效
            width: '100%'
          }, function (captchaObj) {
            vm.captchaObj = captchaObj
            // 将验证码加到id为captcha的元素里，同时会有三个input的值用于表单提交
            captchaObj.appendTo("#captcha2");
            captchaObj.onReady(function () {
              this.captchaObj = captchaObj;
              $("#wait2").hide();
            });
          })

        })
      },
      components:{
        Checkbox
      },
      mounted(){
          var that =this;
        QC.Login.signOut();
        QC.Login({
          btnId:"qqLoginBtn",    //插入按钮的节点id
          size: "C_S"
        }, function(reqData, opts){//登录成功
          QC.Login.getMe(function(openId, accessToken){
              console.log(reqData)
            console.log(opts)
            console.log(openId)
            console.log(accessToken)
            let nickanme=reqData.nickname
            let imgurl = reqData.figureurl;
            let loginname = openId;
            let password = "123456";
            let tel ="";
            let email = "";
            let resource = "1";
            loginapi.regist(loginname,password,tel,email,imgurl,resource,nickanme).then((response) =>{
                console.log(response)
              setLoginInfo(response.data,false)
              that.$router.go(0)
            }).catch((response)=>{
              console.log(response)
              that.$Notice.error(setNoticConfig(response.message,null,null,""));
            })

          })

          //根据返回数据，更换按钮显示状态方法
          //QC.Login.signOut():注销登录
        }, function(opts){//注销成功
          //注销之后的方法
        });
      },
      methods:{
        closeContent(){
          this.$emit('closeContent')
          this.regist.nickname=null;
          this.regist.username=null
          this.regist.pwd=null
          this.regist.pwdSec=null
          this.regist.tel=null
          this.regist.email=null
          this.loginName=null
          this.loginPassword=null
          this.loginstatus="login"
        },
        Login(){
            var vm = this;
          var result = this.captchaObj.getValidate();
          if(this.loginPassword==null || this.loginPassword==null){
            this.$Notice.error(setNoticConfig("账号或密码不能为空！",null,null,""));
            return;
          }
          if(result==null){
            this.$Notice.error(setNoticConfig("请先通过验证！",null,null,""));
            return;
          }
          loginapi.Login(this.loginName,this.loginPassword).then((response)=>{
            setLoginInfo(response.data,vm.rememberMe)
            this.$router.go(0)
          }).catch((response)=>{
            this.$Notice.error(setNoticConfig(response.message,null,null,""));
            return;
          })
        },
        registFun(){
            var vm = this;
            if(this.regist.username==null || this.regist.pwd==null ||this.regist.tel==null||this.regist.nickname==null){
               this.$Notice.error(setNoticConfig("以下下字段不能为空[昵称，用户名，密码，手机号码]！",null,null,""));
               return;
            }
            if(this.regist.pwd!=this.regist.pwdSec){
              this.$Notice.error(setNoticConfig("用户名不能为空！",null,null,""));
              return;
            }
            loginapi.regist(this.regist.username,this.regist.pwd,this.regist.tel,this.regist.email,"","0",this.regist.nickname).then((response)=>{
              vm.closeContent();
            }).catch((response)=>{
              this.$Notice.warning(setNoticConfig(response.message,null,null,""));
            })

        }
      },
    }
</script>

