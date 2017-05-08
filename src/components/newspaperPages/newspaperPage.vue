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
    <newsContentT :newsContent="newsContent"  v-on:collectPaper="collectPaperCB" v-on:UncollectPaper="UncollectPaperCB"></newsContentT>
  </div>
</template>

<script>
  import './newspapgerPage.scss'
  import newsContentT from '../mainPage/mainPageFouContent/newsContentT.vue'
  import api from '../../api/newsPaperPages.js'
  import apiCollect from '../../api/collect'
    export default{
        data(){
            return {
              newsContentAll:[],
              papersSortBtn:[],
              newsContent:[],
              collects:null,
            }
        },
      components: {
        "newsContentT":newsContentT,
      },
      computed:{
         islogin(){
             return ISLOGIN;
         },
        userinfo(){
             return USERINFO;
        }
      },
      created(){
        let vm = this;

         vm.getAllPaperInfo();
      },
      mounted(){
      },
      methods:{
          getAllPaperInfo(){
              var vm = this;
            api.getAllInfo(this.islogin,this.userinfo.id==null? "" :this.userinfo.id).then((response) => {
              var allBtn = {
                title:"全部",
                active:true
              }
              this.papersSortBtn.push(allBtn)
              let i = 0,len = response.data.length;
              for(;i<len;i++){
                allBtn = {
                  title:response.data[i].typeName,
                  active:false
                }
                this.papersSortBtn.push(allBtn)
                this.newsContentAll=response.data
              }
              this.newsContent = this.getallNews(this.newsContentAll);

              this.$nextTick(function(){
                this.$cardHover();
              })
            }).catch(function(response) {
              vm.$Notice.error(setNoticConfig(response.data.message,null,null,"error"));
            })
          },
          getallNews(content){
              var allnews=[];
            let i = 0,len = content.length;
            for(;i<len;i++){
              for(let t=0;t<content[i].papers.length;t++){
                allnews.push(content[i].papers[t])
              }
            }
               return allnews;
          },
          bindClick(index){
              for(let i=0;i<this.papersSortBtn.length;i++){
                this.papersSortBtn[i].active=false;
                if(index==i){
                  this.papersSortBtn[i].active=true;
                }
              }
            if(index==0){
              this.newsContent = this.getallNews(this.newsContentAll);
              this.$nextTick(function(){
                this.$cardHover();
              })
              return;
            }
            this.newsContent=this.newsContentAll[index-1].papers;
            this.$nextTick(function(){
              this.$cardHover();
            })
          },
        collectPaperCB(news){
          apiCollect.addCollect(this.userinfo.id,news.id).then((response) =>{
              news.collectCount++;
              news.isCollect=true;
          }).catch((response)=>{
            this.$Notice.warning(setNoticConfig(response.message,null,null,"error"));
          })
        },
        UncollectPaperCB(news){
            apiCollect.deleteCollect(this.userinfo.id,news.id).then((response) =>{
              console.log(1111)
                console.log(response)
              news.collectCount--;
              news.isCollect=false;
            })/*.catch((response)=>{
              this.$Notice.warning(setNoticConfig(response.message,null,null,"error"));
            })*/
        }
      }
    }
</script>

