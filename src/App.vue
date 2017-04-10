<template>
  <div id="app">
    <header id="header" class="animateClass">
      <div class="title-left half-title animateClass-child">
        <div class="title-icon "></div>
        <ul class="title-ul font-size-body animateClass-child">
          <li class="title-li" v-for="title in titles">{{title}}</li>
        </ul>
      </div>
      <div class="title-right half-title animateClass-child">
        <i class="iconfont main-icon icon-search font-size-title-icon"></i>
        <i class="iconfont main-icon icon-lingdangline_ font-size-title-icon"></i>
        <i class="iconfont main-icon icon-xiaoren  font-size-title-icon"></i>
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
export default {
  name: 'app',
 data(){
     return{
         titles:title
     }
 },
  created(){

  },
  methods:{
  },


}
</script>
