<template>
    <div class="aboutPage">
      <div class="paper-top">
        <img class="background-img" src="../../assets/about.jpg">
        <div class="paper-classify-font font-size-paper animateClass">关于我们</div>
      </div>
       <div class="sec-content">
         <div class="icons-explain font-size-title">Alienlabnews,一个便利的报纸阅读平台</div>
       <div class="icons-content">
         <div class="icon-content" v-for="item in aboutIcon">
           <div class="icon-content-item">
             <i class="iconfont  animateClass" :class="item.icon"></i>
           </div>
           <div class="icon-content-name font-size-body ">{{item.name}}</div>
           <div class="icon-content-explain font-size-minsup ">{{item.explain}}</div>
         </div>
       </div>
       </div>
       <div class="main-about">
         <img class="background-img" src="../../assets/licheng.jpg">
         <!--<span class="straight main-left-straight">━━━━</span>-->
         <div class="icons-explain growth-process font-size-title">Alienlabnews成长历程</div>
         <!--<span class="straight main-right-straight">━━━━</span>-->
         <swiper></swiper>
       </div>
      <div class="about-team">
        <div class="icons-explain team-title font-size-title">我们的团队</div>
        <div class="icons-explain team-abstract font-size-minsup">这是一个年轻的充满朝气和活力的团队，青春与梦想在这里相互碰撞，摩擦出炫丽的火花。</div>
        <div class="about-content">
          <div class="about-item" v-for="item in team">
            <div class="item-width animateClass">
              <div class="about-item-img ">
                <img class="about-img animateClass" :src="picUrl+item.img">
              </div>
              <div class="about-item-cast">
                <div class="about-item-name font-size-sup">{{item.name}}</div>
                <div class="about-item-abstruct font-size-minsup">{{item.post}}</div>
              </div>
              <div class="about-item-person-abstruct font-size-minsup">
                {{item.abstruct}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about-ability">
        <div class="main-content">
          <div class="left-content">
             <div class="ability-title font-size-title" style="margin-top: 5%;">我们的能力</div>
            <div class="ability-font font-size-sup" style="margin-top: 3%;">项目开发</div>
            <Progress :percent="90" :stroke-width="5"></Progress>
            <div class="ability-font font-size-sup">产品设计</div>
            <Progress :percent="84" :stroke-width="5"></Progress>
            <div class="ability-font font-size-sup">Web Ui</div>
            <Progress :percent="85" :stroke-width="5"></Progress>
            <div class="ability-font font-size-sup">市场推广</div>
            <Progress :percent="70" :stroke-width="5"></Progress>
          </div>
        <div class="right-content">
          <img class="right-img" src="../../assets/zdz.jpg">
        </div>
        </div>
      </div>
    </div>
</template>

<script>
     import './mainPage.scss'
     import swiper from '../../common/vue/swiperTimer/swiperTimer.vue'
    export default{
        data(){
            return {
                aboutIcon:ABOUTICON,
              picUrl:PICURL,
                team:TEAM
            }
        },
        components: {
          "swiper":swiper
        },
        created(){
        },
        mounted(){
        },
        methods: {}
    }
</script>
