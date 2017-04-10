<template>
  <div class="news-content">
    <swiper class="swiper-content animateClass"  :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="news-card" v-for=" news in newsContent">
        <div class="news-top-content">
          <img class="news-top-img" src="../../../assets/sltp.jpg" />
        </div>
        <div class="news-below-content">
          <div class="news-left-content">
            <div class="news-name font-size-sup">人民日报</div>
            <div class="news-time font-size-minsup">2017/01/07期</div>
          </div>
          <div class="news-right-content">
            <div class="right-collect-content">
              <i class="iconfont icon-xingxing01"></i>
              <div class="news-collect-count font-size-minsup">20</div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

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
              }
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
            }
      },
      mounted(){
            this.silderNext();
        window.onresize = () => {
          return (() => {
            this.swiper.onResize();
          })()
        }
      }
    }
</script>

