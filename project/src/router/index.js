import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home.vue'
import message from '@/components/Message.vue'
import memo from '@/components/Memo.vue'
import record from '@/components/Record.vue'
import chat from '@/components/Chat.vue'
import menu from '@/components/Menu.vue'
import password from '@/components/Password.vue'
import skin from '@/components/Skin.vue'
import logout from '@/components/Logout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/memo',
      name: 'memo',
      component: memo
    },
    {
      path: '/record',
      name: 'record',
      component: record
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    },
    {
      path: '/password',
      name: 'password',
      component: password
    },
    {
      path: '/skin',
      name: 'skin',
      component: skin
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout
    }
  ]
})
