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
    $(this).find('.icon-xingxing01').css("color","#c6b299")

  },function(){
    //鼠标移开的时候执行某个动作
    var bg = $(this).find('.news-hover-bg')
    TweenLite.to(bg, 0.3, {top:'-100%'})
    $(this).find('.news-below-content').css("background","#f9f9f8").find(".news-name").css("color","rgba(0,0,0,0.6)").next(".news-time").css("color","#dbdcdb")
    $(this).find('.icon-xingxing01').css("color","#e6dacf")
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
