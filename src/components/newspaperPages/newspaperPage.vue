<template>
  <div class="newsPaperPage">
    <div class="paper-top">
      <img class="background-img" src="../../assets/banner.jpg">
      <div class="paper-classify-font font-size-paper animateClass">报纸分类</div>
    </div>
    <div class="paper-nav news-content">
      <div class="sortBtn font-size-body animateClass"  >全部</div>
      <div class="sortBtn font-size-body animateClass"  v-for="sortbtn in papersSortBtn" >{{sortbtn}}</div>
      <Button class="collect-btn" type="ghost" >收藏</Button>
    </div>
    <newsContentT :newsContent="newsContent"></newsContentT>
  </div>
</template>

<script>
  import './newspapgerPage.scss'
  import newsContentT from '../mainPage/mainPageFouContent/newsContentT.vue'
  import Button from 'iview/src/components/button';
    export default{
        data(){
            return {
              newsContent:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
              papersSortBtn:["机关报","商业报","晚报","周末报","都市报","专业报","产业报","生活报"],
            }
        },
      components: {
        "newsContentT":newsContentT,
        Button
      },
      mounted(){
        $(".sortBtn").unbind("click").click(function(){
            $(".sortBtn").removeClass("active")
            $(this).addClass("active")
        })
      }
    }
</script>

