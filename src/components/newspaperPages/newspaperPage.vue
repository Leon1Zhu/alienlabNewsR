<template>
  <div class="newsPaperPage">
    <div class="paper-top">
      <img class="background-img" src="../../assets/banner.jpg">
      <div class="paper-classify-font font-size-paper animateClass">报纸分类</div>
    </div>
    <div class="paper-nav news-content">
      <div class="sortBtn font-size-body animateClass" :class="{'active': sortbtn.active}"  v-for="(sortbtn,index) in papersSortBtn" @click="bindClick(index)">{{sortbtn.title}}</div>
      <Button class="collect-btn" type="ghost" >收藏</Button>
    </div>
    <newsContentT :newsContent="newsContent"></newsContentT>
  </div>
</template>

<script>
  import './newspapgerPage.scss'
  import newsContentT from '../mainPage/mainPageFouContent/newsContentT.vue'
  import api from '../../api/newsPaperPages.js'
    export default{
        data(){
            return {
              newsContentAll:[[]],
              papersSortBtn:[],
              newsContent:[],
            }
        },
      components: {
        "newsContentT":newsContentT,
      },
      computed:{

      },
      created(){
        let vm = this;
        api.getAllInfo().then((response) => {
           var allBtn = {
                title:"全部",
                active:true
           }
            this.papersSortBtn.push(allBtn)
            let allNews=[];
            let i = 0,len = response.data.length;
            for(;i<len;i++){
              allBtn = {
                title:response.data[i].typeName,
                active:false
              }
              this.papersSortBtn.push(allBtn)
              this.newsContentAll.push(response.data[i].papers)
              for(let t=0;t<response.data[i].papers.length;t++){
                allNews.push(response.data[i].papers[t])
              }
            }
            this.newsContentAll[0] = allNews;
           this.newsContent=allNews
           this.$nextTick(function(){
            this.$cardHover();
           })
          console.log(this.newsContentAll[0])
        }).catch(function(response) {
          vm.$Notice.error(setNoticConfig(response.data.message,null,null,"error"));
        })
      },
      mounted(){
      },
      methods:{
          bindClick(index){
              for(let i=0;i<this.papersSortBtn.length;i++){
                this.papersSortBtn[i].active=false;
                if(index==i){
                  this.papersSortBtn[i].active=true;
                }
              }
            this.newsContent=this.newsContentAll[index];
            this.$nextTick(function(){
              this.$cardHover();
            })
          }
      }
    }
</script>

