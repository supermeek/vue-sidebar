import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home.vue'
import page02 from '@/components/Page02.vue'
import page03 from '@/components/Page03.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/page02',
      name: 'page02',
      component: page02
    },
    {
      path: '/page03',
      name: 'page03',
      component: page03
    }
  ]
})
