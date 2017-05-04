<template>
  <div class="main-fou-content">
    <div class="news-content">
      <div class="swiper-content">
        <div class="news-card" v-for=" news in newsContent">
          <div class="news-top-content">
            <div class="news-hover-bg">
              <i class="iconfont  icon-yanjing1 font-size-title-icon"></i>
            </div>
            <img class="news-top-img" :src="picurl+news.picUrl" />
          </div>
          <div class="news-below-content animateClass1">
            <div class="news-left-content">
              <div class="news-name font-size-sup animateClass1">{{news.paperName}}</div>
              <div class="news-time font-size-minsup animateClass1" v-if="news.paperinfolist!='' && news.paperinfolist !=null">{{news.paperinfolist[0].updateTime}}期</div>
              <div class="news-time font-size-minsup animateClass1" v-if="news.paperinfolist=='' || news.paperinfolist ==null">暂无期刊</div>
            </div>
            <div class="news-right-content">
              <div class="right-collect-content">
                <i class="iconfont icon-xingxing01"></i>
                <div class="news-collect-count font-size-minsup">{{news.collectCount}}</div>
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
    props:['newsContent'],
    data(){
      return {
          picurl:PICURL,
      }
    },
    mounted(){
      this.$cardHover();
    }

  }
</script>

