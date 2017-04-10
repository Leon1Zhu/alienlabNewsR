<template>
  <div class="main-thr-content">
    <img class="background-img" src="../../../assets/thrBackground.jpg">
       <div class="thr-title">
           <span class="straight thr-left-straight">━━━━</span>
           <span class="my-collect font-size-maintitle">我的收藏</span>
           <span class="straight thr-right-straight">━━━━</span>
       </div>
    <div class="news-content-div">
      <a href="javascript:void(0);" mon="c=top&amp;a=50&amp;col=4&amp;ct=1&amp;pn=0" id="imgplayer-prev" class="carousel-btn-prev arrow ">
        <span class="icon-wrap arrow-left" @click="NextSwiper"></span>
      </a>
      <a href="javascript:void(0);" mon="c=top&amp;a=52&amp;col=4&amp;ct=1&amp;pn=0" id="imgplayer-next" class="carousel-btn-next arrow ">
        <span class="icon-wrap arrow-right" @click="prevSwiper"></span>
      </a>
      <newsContent :newsContent="newsContent"  ref="newsContent"></newsContent>
    </div>
  </div>
</template>

<script>
  import './mainPageThrContent.scss'
  import  newsContent from './newsContent.vue'
    export default{
        data(){
            return {
              newsContent:[{},{},{},{},{},{},{},{}]
            }
        },
      components: {
        "newsContent":newsContent,
      },
      computed:{
        newsContentT(){
            return this.$refs.newsContent
        }
      },
      methods:{
        prevSwiper(){
            this.newsContentT.prevSwiper();

        },
        NextSwiper(){
          this.newsContentT.silderNext();

        }
      }
    }
</script>


