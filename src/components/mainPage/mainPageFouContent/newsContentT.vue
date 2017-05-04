<template>
  <div class="main-fou-content">
    <div class="news-content">
      <div class="swiper-content">
        <div class="news-card" v-for=" news in newsContent">
          <div class="news-top-content">
            <div class="news-hover-bg" @click="watch(news)">
              <i class="iconfont  icon-yanjing1 font-size-title-icon"></i>
            </div>
            <img class="news-top-img" :src="picurl+news.picUrl" />
          </div>
          <div class="news-below-content animateClass1">
            <div class="news-left-content">
              <div class="news-name font-size-sup animateClass1">{{news.paperName}}</div>
              <Poptip  style="line-height: 1.2;"  trigger="hover" placement="top-start" title="提示标题"  v-if="news.paperinfolist!='' && news.paperinfolist !=null">
                <i class="iconfont main-icon icon-navqikanpindao font-size-top"></i>
                <div  slot="content" >
                  <table>
                    <tbody>
                    <tr v-for="item in news.paperinfolist">
                      <td @click="watch(news,item.updateTime)" class="font-size-body">{{item.updateTime}}期</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </Poptip>
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
    },
    methods:{
      watch(v,v2){
         if(v.paperinfolist=="" || v.paperinfolist==null){
           this.$Notice.warning(setNoticConfig("该报纸暂无期刊!",null,null,"info"));
         }
      }
    }

  }
</script>

