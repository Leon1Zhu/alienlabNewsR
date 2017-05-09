<template>
  <div class="main-thr-content">
    <img class="background-img" src="../../../assets/thrBackground.jpg">
       <div class="thr-title">
           <span class="straight thr-left-straight">━━━━</span>
           <span class="my-collect font-size-maintitle">我的收藏</span>
           <span class="straight thr-right-straight">━━━━</span>
       </div>
    <div class="news-content-div">
      <div class="noCollect" v-if="newsContent.length==0" style="text-align: center;">
        <i class="iconfont  icon-kulian  " style="font-size: 1000%;color: #ececec"></i>
        <div class="font-size-maintitle" style="color: #ececec;">暂无收藏记录哟</div>
      </div>
      <div class="iscollect" v-if="islogin && newsContent.length>0">
      <a href="javascript:void(0);" mon="c=top&amp;a=50&amp;col=4&amp;ct=1&amp;pn=0" id="imgplayer-prev" class="carousel-btn-prev arrow ">
        <span class="icon-wrap arrow-left" @click="NextSwiper"></span>
      </a>
      <a href="javascript:void(0);" mon="c=top&amp;a=52&amp;col=4&amp;ct=1&amp;pn=0" id="imgplayer-next" class="carousel-btn-next arrow ">
        <span class="icon-wrap arrow-right" @click="prevSwiper"></span>
      </a>
      <newsContent  :newsContent="newsContent"  ref="newsContent" v-on:UncollectPaper="UncollectPaperCB"></newsContent>
      </div>
    </div>
  </div>
</template>

<script>
  import './mainPageThrContent.scss'
  import  newsContent from './newsContent.vue'
  import collectApi from '../../../api/collect'
    export default{
        data(){
            return {
              newsContent:[]
            }
        },
      components: {
        "newsContent":newsContent,
      },
      computed:{
        newsContentT(){
            return this.$refs.newsContent
        },
        islogin(){
          return ISLOGIN;
        },
        userinfo(){
          return USERINFO;
        }
      },
      created(){
          var vm = this;
          if(this.islogin){
              vm.getCollectPaper()
          }
      },
      methods:{
        getCollectPaper(){
          collectApi.getCollectPaper(this.userinfo.id).then((response) =>{
              this.newsContent = response.data;
              this.$nextTick(function(){
                this.$cardHover();
              })
          }).catch((response)=>{
            this.$Notice.warning(setNoticConfig(response.message,null,null,"error"));
          })
        },
        prevSwiper(){
            this.newsContentT.prevSwiper();

        },
        NextSwiper(){
          this.newsContentT.silderNext();

        },
        UncollectPaperCB(news){
            console.log(news)
          collectApi.deleteCollect(this.userinfo.id,news.id).then((response) =>{
            news.collectCount--;
            var arr = [];
            for(var i=0;i<this.newsContent.length;i++){
                if(this.newsContent[i].id!=news.id){
                    arr.push(this.newsContent[i])
                }
            }
            this.newsContent=arr;
          }).catch((response)=>{
           this.$Notice.warning(setNoticConfig(response.message,null,null,"error"));
           })
        }
      }
    }
</script>


