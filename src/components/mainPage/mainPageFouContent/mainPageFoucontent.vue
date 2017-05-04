<template>
  <div class="main-fou-content">
    <div class="fou-title">
      <span class="straightfou fou-left-straight">━━━━</span>
      <span class="my-collectfou font-size-maintitle">新闻99</span>
      <span class="straightfou fou-right-straight">━━━━</span>
    </div>
    <div class="news-content ">
      <div class="grids-content animateClass">
        <div class="news-grid" v-for="newsType in newsTypes">
          <div class="grid-icon animateClass" @click="getTypeNews(newsType.type)">
            <i class="iconfont main-icon " style="font-size: 50px;" :class="newsType.icon"></i>
          </div>
          <div class="grid-name">
            <span class="font-size-body">{{newsType.name}}</span>
          </div>
        </div>
      </div>
      <topNewsContent :contents="contents"></topNewsContent>
    </div>
  </div>
</template>

<script>
  import './mainPageFouContent.scss'
  import '../mainPageThrContent/newsContent.scss'
  import topNewsContent from './topNewsContent/topNewsContent.vue'
  import api from "../../../api/mainPage"
    export default{
        data(){
            return {
              newsTypes:NEWSTYPE,
              contents:null,
            }
        },
        components: {
          "topNewsContent":topNewsContent,
        },
        created(){
         /* api.getNewsInfo().then((response) => {
              console.log(1111);
          }).catch((response)=>{
          })*/

        },
      methods:{
        getTypeNews(type){
            let vm = this;
          vm.$watchTopNews()
          api.getNewsInfo(type).then((response) => {
             this.contents=response.data.result.data
          }).catch((response)=>{
            vm.$Notice.error(setNoticConfig("新闻获取出错！",null,null,"error"));
          })
        },
      }
    }
</script>
