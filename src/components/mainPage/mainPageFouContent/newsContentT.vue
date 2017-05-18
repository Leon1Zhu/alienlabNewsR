<template>
  <div class="main-fou-content">
    <div class="news-content">
      <div class="swiper-content">
        <div class="news-card" v-for=" news in newsContent">
          <div class="news-top-content">
            <div class="news-hover-bg" @click="watch(news,0)">
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
              <div class="right-collect-content" >
                <i class="iconfont icon-xingxing01 nocollect" :class="{'collect' : news.isCollect}" @click="collectFun(news)"></i>
                <div class="news-collect-count font-size-minsup">{{news.collectCount}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="modal2" class-name="vertical-center-modal" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>操作确认</span>
      </p>
      <div style="text-align:center">
        <p>确认取消对该报刊的收藏么？</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long  @click="del">取消收藏</Button>
      </div>
    </Modal>
    <showPaper  :ifshow="isshow" :newsId="newsId" :updateTime="updateTime"  v-on:close="closeCB"></showPaper>
  </div>
</template>

<script>
  import './mainPageFouContent.scss'
  import '../mainPageThrContent/newsContent.scss'
  import collectapi from '../../../api/collect'
  import showPaper from '../../watchPaper.vue'
  export default{
    props:['newsContent'],
    data(){
      return {
        picurl:PICURL,
        modal2:false,
        new:null,
        isshow:false,
        newsId:null,
        updateTime:null,
      }
    },
    components: {
        'showPaper':showPaper
    },
    computed:{
      islogin(){
        return ISLOGIN;
      },
    },
    mounted(){
      this.$cardHover();
    },
    methods:{
      watch(v,v2){
        if(v.paperinfolist=="" || v.paperinfolist==null){
          this.$Notice.warning(setNoticConfig("该报纸暂无期刊!",null,null,"info"));
        }
        if(v2==0){
          v2=(new Date()).Format("yyyy-MM-dd");
        }
        this.newsId=v.id;
        this.updateTime=v2;
        this.isshow = true;
      },
      del(){
        this.$emit('UncollectPaper',this.new)
        this.modal2=false;
      },
      collectFun(news){
          this.new = news;
          if(!this.islogin){
            this.$Notice.warning(setNoticConfig("您还没有登陆，暂无该权限!",null,null,"info"));
          }else if(this.new.isCollect==true){
              this.modal2=true;
          }else  if(this.new.isCollect==false){
            this.$emit('collectPaper',news)
          }
      },
      closeCB(){
        this.isshow = false
      }
    }

  }
</script>

