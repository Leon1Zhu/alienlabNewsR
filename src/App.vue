<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
export default {
  name: 'app',
  mounted(){
    console.log(this.$store.state.login.token)
    console.log(this.token)
  },
  computed: mapGetters({
    token: 'getToken'
  }),

}
</script>

<style>
</style>
