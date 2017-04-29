<template>
  <div id="login-content" class="animateClass6"   :class="{'show':showLoginFlag}">
      <i class="iconfont icon-guanbi font-size-title-icon animateClass" @click="closeContent"></i>
      <div class="main-content">
        <div class="login-content " >
          <div class="login-left-content animateClass"  :class="{'signup' : loginstatus=='signup'}">
            <div v-if="loginstatus=='login'">
              <div class="denglu-icon-div">
                <i class="iconfont icon-denglu" style="height: 20%;width: 20%;"></i>
              </div>
              <Input id="loginName" class="logininput"  placeholder="用 户 名"></Input>
              <Input id="loginPassword" class="logininput"  placeholder="密 码"></Input>
              <Checkbox class="rememberMe" >记 住 我</Checkbox>
              <Button class="loginButton" shape="circle" type="info" long>登&nbsp;&nbsp;陆</Button>
            </div>
            <div v-if="loginstatus=='signup'">
              <div class="font-size-title" >已有账号？</div>
              <Button type="ghost" class="font-size-sup" shape="circle" style="margin-top: 5%;" @click="loginstatus='login'">点我登陆</Button>
            </div>
          </div>
          <div class="login-right-content animateClass" :class="{'signup' : loginstatus=='signup'}" >
              <div class="no-sign-up" style="text-align: center;"  v-if="loginstatus=='login'">
                  <div class="font-size-title" >还没有账号？</div>
                <Button type="ghost" class="font-size-sup" shape="circle" style="margin-top: 5%;" @click="loginstatus='signup'">点我注册</Button>
              </div>
              <div class="sign-up" v-if="loginstatus=='signup'" style="display: flex;width: 100%;">
                <div class="signupfont font-size-title" style="color: #5b5b5b;text-align: right;margin-right: 10px;">用户注册:</div>
                <div style="width: auto;">
                  <Input  class="logininput signupinput"  placeholder="用 户 名"></Input>
                  <Input  class="logininput signupinput"  placeholder="密 码"></Input>
                  <Input  class="logininput signupinput"  placeholder="电子邮箱"></Input>
                  <Input  class="logininput signupinput"  placeholder="手机号码"></Input>
                  <Button class="signButton" shape="circle" type="info" long>注&nbsp;&nbsp;册</Button>
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
    export default{
      props: ['showLoginFlag'],
      data(){
            return {
              loginstatus:'login'
            }
      },
      methods:{
        closeContent(){
          this.$emit('closeContent')
        }
      },
      components:{
        Checkbox
      },
      mounted(){
      }
    }
</script>

