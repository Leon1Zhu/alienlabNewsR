/**
 * Created by zhuliang on 2017/4/14.
 */
import Vue from 'vue'
import $ from 'jquery'
Vue.prototype.$cardHover = function(){
  $('.news-card').unbind('hover').hover(function(){
    var bg = $(this).find('.news-hover-bg')
    TweenLite.to(bg, 0.3, {top:0})
    $(this).find('.news-below-content').css({"background":"#434343"}).find(".news-name").css("color","white").next(".news-time").css("color","#959190")
   /* $(this).find('.icon-xingxing01').css("color","#c6b299")*/

  },function(){
    //鼠标移开的时候执行某个动作
    var bg = $(this).find('.news-hover-bg')
    TweenLite.to(bg, 0.3, {top:'-100%'})
    $(this).find('.news-below-content').css("background","#f9f9f8").find(".news-name").css("color","rgba(0,0,0,0.6)").next(".news-time").css("color","#dbdcdb")
    /*$(this).find('.icon-xingxing01').css("color","#e6dacf")*/
  })
}


Vue.prototype.$watchTopNews = function(){
  $('.grids-content').css("transform","translate(-100%,0)")
  setTimeout(function(){
    $('.top-news-content').css("transform","translate(-100%,0)")
  },100)
  $('.top-news-content').show()
  setTimeout(function(){
    $('.grids-content').hide()
  },300)
}

Vue.prototype.$returnTopNewsList = function(){
  $('.top-news-content').css("transform","translate(0,0)")
  setTimeout(function(){
    $('.grids-content').css("transform","translate(0,0)")
  },100)
  $('.grids-content').show()
  setTimeout(function(){
    $('.top-news-content').hide()
  },300)
}



//去掉报纸背景图片并且添加默认的css
Vue.prototype.$displayBackImg = function(){
    console.log(222)
    console.log(11111)
    console.log( $(".swiper-slide iframe").contents().find("#page-container"))
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
}

//设置放大倍率
Vue.prototype.$displayBackImg = function(scale){
  if(scale==null || scale =="") scale = 1
  $(".swiper-slide iframe").contents().find("#page-container #pf1").css({
    "-webkit-transform": "scale("+scale+")",
    "-moz-transform": "scale("+scale+")",
    "-ms-transform":"scale("+scale+")",
    "transform": "scale("+scale+")",
  });
}



