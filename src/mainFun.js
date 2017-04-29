/**
 * Created by zhuliang on 2017/4/14.
 */
import Vue from 'vue'

Vue.prototype.$cardHover = function(){
  $('.news-card').unbind('hover').hover(function(){
    var bg = $(this).find('.news-hover-bg')
    TweenLite.to(bg, 0.3, {top:0})
    $(this).find('.news-below-content').css({"background":"#434343"}).find(".news-name").css("color","white").next(".news-time").css("color","#959190")
    $(this).find('.icon-xingxing01').css("color","#c6b299")

  },function(){
    //鼠标移开的时候执行某个动作
    var bg = $(this).find('.news-hover-bg')
    console.log(bg)
    TweenLite.to(bg, 0.3, {top:'-100%'})
    $(this).find('.news-below-content').css("background","#f9f9f8").find(".news-name").css("color","rgba(0,0,0,0.6)").next(".news-time").css("color","#dbdcdb")
    $(this).find('.icon-xingxing01').css("color","#e6dacf")
  })
}

