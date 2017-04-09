<template>
  <div class="main-page-sec-content">
    <div class="sec-left-content">
      <img class="sec-left-img" id="sec-left-img" src="../../../assets/secBackground.jpg">
    </div>
    <div class="sec-right-content" id="sec-right-content">
      <div class="font-size-title sec-content-top">全新的报纸阅读体验</div>
      <div class="font-size-sup sec-content-below">
        Alienlab为你提供了一个便利的报纸阅读平台，这里报纸种类繁多，热门报纸一应俱全，你可以搜索你喜欢阅读的报纸，将他们添加到收藏夹里，查找更方便。错过昨天的报纸也没关系，可以直接点击报纸查看往期内容。
      </div>
    </div>
  </div>
</template>

<script>
  import './mainPageSecContent.scss'
    export default{
        data(){
            return {}
        },
        mounted(){
          document.getElementById("sec-left-img").height = document.getElementById("sec-right-content").offsetHeight + 0.05 * document.body.offsetWidth
          window.onresize = () => {
            return (() => {
              document.getElementById("sec-left-img").height = document.getElementById("sec-right-content").offsetHeight + 0.05 * document.body.offsetWidth
            })()
          }
        }
    }
</script>

