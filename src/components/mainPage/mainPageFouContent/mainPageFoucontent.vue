<template>
  <div class="main-fou-content">
    <div class="fou-title">
      <span class="straightfou fou-left-straight">━━━━</span>
      <span class="my-collectfou font-size-maintitle">热门推荐</span>
      <span class="straightfou fou-right-straight">━━━━</span>
    </div>
    <newsContentT :newsContent="newsContent"></newsContentT>
  </div>
</template>

<script>
  import './mainPageFouContent.scss'
  import '../mainPageThrContent/newsContent.scss'
  import newsContentT from './newsContentT.vue'
    export default{
        data(){
            return {
              newsContent:[{},{},{},{},{},{}]
            }
        },
        components: {
          "newsContentT":newsContentT,
        },
    }
</script>
