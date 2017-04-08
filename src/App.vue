<template>
  <div id="app">
    <header id="header" class="animateClass">
      <div class="title-left half-title animateClass-child">
        <div class="title-icon "></div>
        <ul class="title-ul font-size-body animateClass-child">
          <li class="title-li" v-for="title in titles">{{title}}</li>
        </ul>
      </div>
      <div class="title-right half-title animateClass-child">
        <i class="iconfont main-icon icon-search font-size-title-icon"></i>
        <i class="iconfont main-icon icon-lingdangline_ font-size-title-icon"></i>
        <i class="iconfont main-icon icon-xiaoren  font-size-title-icon"></i>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
  import  './App.scss'
export default {
  name: 'app',
 data(){
     return{
         titles:title
     }
 },
  created(){

  },
  methods:{
  },


}
</script>

<!--<style lang="scss" rel="stylesheet/scss">

</style>-->
