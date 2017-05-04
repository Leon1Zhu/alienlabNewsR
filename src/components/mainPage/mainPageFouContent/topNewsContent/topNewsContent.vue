<template>
    <div class="top-news-content animateClass">
      <i class="iconfont main-icon  icon-fanhui font-size-maintitle"  @click="returnList()"></i>
        <div class="press-content"  >
          <div class="press-content-datail"v-for="content in contentsNews">
            <div class="display img">
              <img :src="content.thumbnail_pic_s"  />
            </div>
            <div class="display font">
               <a :href="content.url" target="_Blank" class="font-size-sup">{{content.title}}</a>
               <div class="detailinfo">
                 <span>{{content.date | filterTopNewsData}}</span>
                 <span>{{content.author_name}}</span>
               </div>
            </div>
          </div>
        </div>
      <div class="btnDiv">
        <Button v-if="moreInfoBtnFlag" class="moreinfoBtn font-size-sup"  type="ghost" style="background: #998677;padding:10px 30px;" shape="circle" @click="moreInfo">更多</Button>
      </div>
    </div>
</template>

<script>
    import './topnewsContent.scss'
    export default{
        props:{
          contents:{}
        },
        data(){
            return {
                contentsT:null,
                contentsNews:[],
                moreInfoBtnFlag:true,
                newCount:0,
            }
        },
      watch:{
        contents(v,v2){
          this.contentsT=v
          this.contentsNews=[];
          if(this.contentsT.length>9){
            for(let i = 0 ;i<9;i++){
              this.moreInfoBtnFlag=true;
              this.contentsNews.push(this.contentsT[i])
            }
            this.newCount=9;
          }else{
            this.moreInfoBtnFlag=false;
            this.newCount=9;
            for(let i = 0 ;i<this.contentsT.length;i++){
              this.contentsNews.push(this.contentsT[i])
            }
          }
        }
      },
        components: {},
        created(){
        },
        mounted(){

        },
        methods: {
          returnList(){
              this.$returnTopNewsList()
          },
          moreInfo(){
            this.moreInfoBtnFlag=false;
              if(this.newCount+3>this.contentsT.length){
                  for(let i = this.newCount-1;i<this.contentsT.length;i++){
                    this.contentsNews.push(this.contentsT[i])
                  }
              }else{
                for(let i = this.newCount-1;i<this.newCount+2;i++){
                  this.contentsNews.push(this.contentsT[i])
                }
                this.newCount+=3;
                this.moreInfoBtnFlag=true;
              }
          }
        }
    }
</script>
