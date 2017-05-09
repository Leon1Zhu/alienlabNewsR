<template>
  <div id="swiper-history">
    <div class="swiper-container">
      <div class="swiper-pagination"></div>
      <div class="swiper-wrapper">

      </div>
      <div class="short-line"></div>
      <div class="long-line"></div>

    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
  import '../../../../static/css/swiper.min.css'
  export default {
    data () {
      return {
        historyList: historyList
      }
    },
    created(){
    },
    mounted(){
      var modifier=2;//每天的px
      var historyList= this.historyList

      var mySwiper = new Swiper('#swiper-history .swiper-container',{
        virtualTranslate : true,
        preventClicks : false,
        prevButton:'#swiper-history .swiper-button-prev',
        nextButton:'#swiper-history .swiper-button-next',
        pagination:'#swiper-history .swiper-pagination',
        paginationClickable:true,
        paginationBulletRender: function (swiper, index, className) {
          if(index>0){
            var day1 = new Date(historyList[index]['date'].replace(/-/g, "/"));
            var day2 = new Date(historyList[index-1]['date'].replace(/-/g, "/"));
            var time=day1-day2
            var marginLeft=parseInt( time/ (1000 * 60 * 60 * 24))*modifier;
          }else{
            marginLeft=0
          }

          return '<span class="' + className + '" style="margin-left:'+marginLeft+'px;"></span>';
        },

        onInit: function(swiper){
          var mySlides='';
          for(var i = 0;i<historyList.length;i++){
            swiper.appendSlide('<div class="swiper-slide slide'+i+'"><span class="detail">'+historyList[i]['detail']+'</span><span class="date">'+historyList[i]['date']+'</span></div>');
            swiper.slides[i].style.transform='translate3d(' + (-i)*swiper.width + 'px, 0px, 0px)';
          }
          swiper.slideTo(3);
        },
        onSlideChangeStart: function(swiper){
          var detailPrev=swiper.slides[swiper.previousIndex].querySelector('.detail');
          var datePrev=swiper.slides[swiper.previousIndex].querySelector('.date');
          detailPrev.offsetHeight;datePrev.offsetHeight;
          swiper.slides[swiper.previousIndex].style.zIndex=1;
          detailPrev.style.opacity=datePrev.style.opacity=0;
          detailPrev.style.transform=datePrev.style.transform='translate3d(0px, 0px, 0px)';

          var detailActive=swiper.slides[swiper.activeIndex].querySelector('.detail');
          var  dateActive=swiper.slides[swiper.activeIndex].querySelector('.date')
          detailActive.offsetHeight;dateActive.offsetHeight;//强制重绘刷新动画
          swiper.slides[swiper.activeIndex].style.zIndex=999;
          detailActive.style.opacity=dateActive.style.opacity=1;
          detailActive.style.transform='translate3d(0px, 10px, 0px)';
          dateActive.style.transform='translate3d(0px, -10px, 0px)';

          var moveDay1 = new Date(historyList[swiper.activeIndex]['date'].replace(/-/g, "/"));
          var  moveDay2 = new Date(historyList[0]['date'].replace(/-/g, "/"));
          var moveTime=moveDay1-moveDay2
          var moveDistance=parseInt( moveTime/ (1000 * 60 * 60 * 24))*modifier+10*swiper.activeIndex;
          var move=swiper.width/2-5-moveDistance;

          swiper.paginationContainer[0].style.left=move+'px';

        },
      });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 12px;
    margin: 0;
    padding: 0;
  }
  #swiper-history{
    width:100%;
    max-width:820px;
    margin:0 auto;
    position:relative;
  }
  #swiper-history  .swiper-container {
    height: 144px;
    margin:0 40px;
  }
  #swiper-history	.short-line{
    height:72px;
    border-bottom:1px dashed #007aff;
    width:30px;
    position:absolute;
    top:0px;
  }
  #swiper-history	.long-line{
    height:72px;
    border-bottom:1px solid #007aff;
    width:100%;
    position:absolute;
    top:0px;
    left:30px;
  }
  #swiper-history   .swiper-slide span{
    display:block;
    width:100%;
    text-align:center;
    position:absolute;
    transition: 700ms;
  }
  #swiper-history .swiper-slide .detail{
    height: 20px;
    line-height:20px;
    top:27px;
    color:#ececec;
    opacity: 0;
  }
  #swiper-history .swiper-slide .date{
    color:#007aff;
    position:absolute;
    bottom:33px;
    opacity: 0;
  }
  #swiper-history .swiper-slide-active span{
    transition: 700ms 700ms;
  }
  #swiper-history	.swiper-pagination-bullets{
    white-space:nowrap;
    width:auto;
    bottom:67px;
    height:10px;
    line-height:10px;
    transition: 700ms;
  }
  #swiper-history .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0;
  }
  #swiper-history .swiper-pagination-bullet{
    background:#fff;
    border: 1px solid #007aff;
    opacity:1;
    line-height:10px;
  }
  #swiper-history .swiper-pagination-bullet-active {
    background: #007aff;
  }
  #swiper-history .swiper-button-next,#swiper-history .swiper-button-prev{
    background-size:20px auto;
  }
</style>
