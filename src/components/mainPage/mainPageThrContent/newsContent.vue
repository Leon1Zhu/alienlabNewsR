<template>
  <div class="news-content">
    <swiper class="swiper-content animateClass"  :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="news-card" v-for=" news in newsContent" :key="news.id">
        <div class="news-top-content ">
          <div class="news-hover-bg">
            <i class="iconfont  icon-yanjing1 font-size-title-icon"></i>
          </div>
          <img class="news-top-img" :src="picurl+news.picUrl" />
        </div>
        <div class="news-below-content animateClass1">
          <div class="news-left-content ">
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
          <div class="news-right-content ">
            <div class="right-collect-content ">
              <i class="iconfont icon-xingxing01 collect" @click="delready(news)"></i>
              <div class="news-collect-count font-size-minsup">{{news.collectCount}}</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <Modal v-model="modal2" width="360">
      <p slot="header" style="color:#f60;text-align:center">
        <Icon type="information-circled"></Icon>
        <span>操作确认</span>
      </p>
      <div style="text-align:center">
        <p>确认取消对该报刊的收藏么？</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long :loading="modal_loading" @click="del">取消收藏</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
  import './newsContent.scss'
    export default{
        props: {
          newsContent: {
            type: Array,
            default:[],
          },
        },
        data(){
            return {
              swiperOption: {
                // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                slidesPerView : 3,
                freeMode : true,
                /*slidesPerGroup : 3,*/
                /*slidesOffsetBefore : -180,*/
                spaceBetween : 20,
                centeredSlides : true,
                direction : 'horizontal',
                grabCursor : true,
                setWrapperSize :true,
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationBulletRender: function (swiper, index, className) {
                  return '<span class="' + className + ' mypagination"></span>';
                },
                paginationClickable :true,
                // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                onTransitionStart(swiper){
                  console.log(swiper)
                }
              },
              picurl:PICURL,
              modal2:false,
              news:null,
            }
        },
      computed: {
        swiper() {
          return this.$refs.mySwiper.swiper
        }
      },
      methods:{
        prevSwiper(){
            this.swiper.slidePrev();
        },
        silderNext(){
           this.swiper.slideNext()
        },
        delready(news){
            this.news = news;
            this.modal2 = true;
        },
        del(){
          this.$emit('UncollectPaper',this.news)
          this.modal2=false;
        }
      },
      mounted(){
        this.$cardHover();
        this.silderNext();
        window.onresize = () => {
          return (() => {
            this.swiper.onResize();
          })()
        }
      }
    }
</script>

