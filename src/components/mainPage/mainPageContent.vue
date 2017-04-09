<template>
  <div id="mainPage">
    <div class="main-top-content">
      <img class="background-img" src="../../assets/mainPageBackground.jpg" />
      <div class="left-content ">
        <div class="text-content animateClass-child">
          <div class="left-content-title font-size-maintitle">{{mainContentTile}}</div>
          <div class="left-content-fir font-size-body ">{{mainContentFir}}</div>
          <div class="left-content-sec font-size-body">{{mainContentSec}}</div>
        </div>
      </div>
      <div class="right-content"></div>
      <!--<div class="main-about">
        <div class="about-title">
          <span class="straight main-left-straight">━━━━</span>
          <span class="my-collect font-size-title">关于我们</span>
          <span class="straight main-right-straight">━━━━</span>
        </div>
        <swiper></swiper>
      </div>-->
    </div>
    <secContent></secContent>
    <thrContent></thrContent>

  </div>
</template>

<script>
  import  './mainPageContent.scss'
  import secContent from './mainPageSecContent/mainPageSecContent.vue'
  import thrContent from './mainPageThrContent/mainPageThrContent.vue'
  import swiper from '../../common/vue/swiperTimer/swiperTimer.vue'
    export default{
        data(){
            return {
              mainContentTile :mainContentTile,
              mainContentFir :mainContentFir,
              mainContentSec :mainContentSec
            }
        },
      components: {
          "secContent":secContent,
          "thrContent":thrContent,
          "swiper":swiper,
      },
    }
</script>

