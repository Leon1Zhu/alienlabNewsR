<template>
  <div class="main-fou-content">
    <div class="fou-title">
      <span class="straightfou fou-left-straight">━━━━</span>
      <span class="my-collectfou font-size-maintitle">热门推荐</span>
      <span class="straightfou fou-right-straight">━━━━</span>
    </div>
    <div class="news-content">
      <div class="swiper-content">
        <div class="news-card" v-for=" news in newsContent">
          <div class="news-top-content">
            <img class="news-top-img" src="../../../assets/sltp.jpg" />
          </div>
          <div class="news-below-content">
            <div class="news-left-content">
              <div class="news-name font-size-sup">人民日报</div>
              <div class="news-time font-size-minsup">2017/01/07期</div>
            </div>
            <div class="news-right-content">
              <div class="right-collect-content">
                <i class="iconfont icon-xingxing01"></i>
                <div class="news-collect-count font-size-minsup">20</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import './mainPageFouContent.scss'
  import '../mainPageThrContent/newsContent.scss'
    export default{
        data(){
            return {
              newsContent:[{},{},{},{},{},{}]
            }
        }
    }
</script>
