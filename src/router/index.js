import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const notFound = resolve => require(['@/components/404'], resolve);
const swiperTimer = resolve => require(['@/common/vue/swiperTimer/swiperTimer'], resolve);
const screenShot = resolve => require(['@/common/vue/screenShot/screenShot.vue'], resolve);

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      component: screenShot
    },
    {
      path: '/swiperTimer',
      component: swiperTimer
    },
    {
      path: '*',
      name: '404',
      component: notFound
    }
  ]
})
