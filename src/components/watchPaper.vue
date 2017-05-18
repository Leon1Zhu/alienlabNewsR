<template>
    <div >
      <Modal v-model="isshow"   @on-cancel="cancel" class-name="vertical-center-modal show-paper watch-paper">
        <div style="text-align:center;width: 100%;height: 100%;">
          <div  class="paper-top-content">
            <Dropdown class="font-size-body">
              <a href="javascript:void(0)">
                {{nowpapername}}
                <Icon type="arrow-down-b"></Icon>
              </a>
              <Dropdown-menu slot="list">
                <Dropdown-item v-for="(introduce,introduceindex)i in paperintroduce" :key="introduceindex" @click.native="changePaper(introduce.describe,introduceindex)">{{introduce.describe}}</Dropdown-item>
              </Dropdown-menu>
            </Dropdown>
          </div>
          <div class="paper-body-content">
            <swiper class="swiper-content animateClass"  :options="swiperOption" ref="paperSwiper">
              <swiper-slide class="paper-page" v-for=" paper in papercontent" :key="paper.id">
                <iframe :src="paper.htmlUrl" ></iframe>
              </swiper-slide>
            </swiper>
          </div>
          <a href="javascript:void(0);" mon="c=top&amp;a=50&amp;col=4&amp;ct=1&amp;pn=0" id="imgplayer-prev" class="carousel-btn-prev arrow ">
            <span class="icon-wrap arrow-left" @click="prevSwiper" ></span>
          </a>
          <a href="javascript:void(0);" mon="c=top&amp;a=52&amp;col=4&amp;ct=1&amp;pn=0" id="imgplayer-next" class="carousel-btn-next arrow ">
            <span class="icon-wrap arrow-right" @click="NextSwiper" ></span>
          </a>

        </div>
        <div slot="footer">
        </div>
      </Modal>

    </div>
</template>

<script>
    import './watchPaper.scss'
    import  api from '../api/paperInfo'
    import $ from 'jquery'
    export default{
        props:['newsId','updateTime','ifshow'],
        data(){
            return {
              swiperOption: {
                notNextTick: true,
                freeMode : true,
                centeredSlides : true,
                direction : 'horizontal',
                grabCursor : true,
                setWrapperSize :true,
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationBulletRender: function (swiper, index, className) {
                  return '<span class="' + className + ' mypagination"></span>';
                },
              },
              papercontents:null,
              papercontent:null,
              nowpaper:null,
              paperLength:3,
              paperintroduce:null,
              nowpapername:null,
            }
        },
      computed: {
        isshow() {
            return this.ifshow;
        },
        swiper() {
          return this.$refs.paperSwiper.swiper
        }
      },
        created(){
        },
        watch: {
          isshow(curVal, oldVal){
              var that = this;
              if(curVal){
                that.papercontent=null;
                api.getCollectsByUserId(this.newsId,this.updateTime).then((response) =>{
                  if(response.data.length==0){
                    that.$Notice.info(setNoticConfig("暂无当天报刊信息。",null,null,"error"));
                      setTimeout(function () {
                        that.cancel();
                      },2000)
                    return;
                  }
                  that.paperintroduce=[];
                  that.nowpaper=0;
                  that.papercontent=[];
                  that.papercontents = response.data;
                  if(that.papercontents.length>3){
                      for(let  i = 0 ;i< 3;i++){
                        that.papercontent.push(that.papercontents[i])
                      }
                    console.log(JSON.parse(JSON.stringify(this.papercontent)))
                  }else{
                    that.papercontent=that.papercontents;
                  }
                  for(let i = 0;i<that.papercontents.length;i++){
                      let introduce={};
                    introduce.index=i;
                      if(that.papercontents[i].introduce==null || that.papercontents[i].introduce==""){
                        introduce.describe='第'+(parseInt(i)+1)+'版'
                      }else{
                        introduce.describe='第'+(parseInt(i)+1)+'版:'+that.papercontents[i].introduce+''
                      }
                    that.paperintroduce.push(introduce)
                    that.nowpapername = that.paperintroduce[0].describe
                  }
                  this.$nextTick(function(){
                    setTimeout(function(){
                      $(".swiper-slide iframe").contents().find("#page-container").css("background-image","none");
                    /*  $(".swiper-slide iframe").contents().find("#page-container #pf1").css({
                        "overflow": "hidden",
                        "-webkit-transition":" all 0.5s ease-in-out",
                        "-moz-transition":" all 0.5s ease-in-out",
                        "transition":" all 0.5s ease-in-out",
                        "-moz-transform-origin":"top left",
                        "-ms-transform-origin": "top left",
                        "transform-origin":"top left",
                        "-webkit-transform-origin":"top left"
                      });*/
                    },2000)

                  })

                }).catch((response)=>{
                  that.$Notice.error(setNoticConfig(response.data.message,null,null,"error"));
                  that.cancel();
                })
              }
          },
        },
        mounted(){
            var that = this;
          window.onresize = () => {
            return (() => {
              that.swiper.onResize();
            })()
          }
        },
        methods: {
            nextFun(){
            /*  this.$nextTick(function(){
                setTimeout(function(){
                  $(".swiper-slide iframe").contents().find("#page-container").css("background-image","none");
                  $(".swiper-slide iframe").contents().find("#page-container #pf1").css({
                    "overflow": "hidden",
                    "-webkit-transition":" all 0.5s ease-in-out",
                    "-moz-transition":" all 0.5s ease-in-out",
                    "transition":" all 0.5s ease-in-out",
                    "-moz-transform-origin":"top left",
                    "-ms-transform-origin": "top left",
                    "transform-origin":"top left",
                    "-webkit-transform-origin":"top left"
                  });
                },2000)

              })*/
            },
          changePaper(introduce,introduceindex){
              var that= this;
              var paperLen = this.papercontent.length
              this.nowpapername=introduce
              this.nowpaper = introduceindex;
              if(paperLen<this.paperLength+introduceindex){
                  let addLen = this.paperLength+introduceindex-paperLen;
                  for(let i = paperLen;i<paperLen+addLen;i++){
                      if(this.papercontents.length<=i)break;
                      this.papercontent.push(this.papercontents[i])
                  }
                 setTimeout(function(){
                   that.swiper.slideTo(introduceindex, 300, false);
                 },addLen*300)
               /* this.nextFun();*/
                return;
              }
            this.swiper.slideTo(introduceindex, 300, false);
          },
          cancel(){
            this.$emit('close')
          },
          prevSwiper(){
            this.swiper.slidePrev();
            if( this.nowpaper>0){
              this.nowpaper--;
              this.nowpapername = this.paperintroduce[this.nowpaper].describe
            }else{
              this.$Notice.info(setNoticConfig("已经是第一页咯",null,null,"error"));
                return;
            }
          },
          NextSwiper(){
              if(this.papercontents.length >  this.nowpaper+1){
                this.nowpaper++;
                console.log(this.nowpaper)
                this.nowpapername = this.paperintroduce[this.nowpaper].describe
                console.log(this.nowpapername)
              }else{
                this.$Notice.info(setNoticConfig("已经是最后一页咯",null,null,"error"));
                return;
              }
            this.swiper.slideNext();
              if(this.papercontents.length > this.nowpaper+this.paperLength-1){
                this.papercontent.push(this.papercontents[this.nowpaper+this.paperLength-1])
                /*this.nextFun();*/
              }

          },
        }
    }
</script>
