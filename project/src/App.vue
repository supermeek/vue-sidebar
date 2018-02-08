<template>
  <div id="app">

<!-- 头部信息 -->
    <app-header>
        <i class="icon-menu" @click="showSideMenu"></i>
        <span>首页</span>
        <i class="icon-dot-3"></i>
    </app-header>

    <!-- 侧边栏 -->
    <my-menu :menu-visible.sync="visible">
      <el-collapse v-model="activeName" accordion>
        <router-link to="/home" @click.native="closeSideMenu" class="active_menu">菜单首页</router-link>
        <el-collapse-item title="个人中心" name="1">
          <router-link to="/message" @click.native="closeSideMenu"><i class="icon-user-o"></i>个人信息</router-link>
          <router-link to="/memo" @click.native="closeSideMenu"><i class="icon-calendar-1"></i>我的备忘</router-link>
        </el-collapse-item>
        <el-collapse-item title="功能菜单" name="2">
          <router-link to="/record" @click.native="closeSideMenu"><i class="icon-note"></i>生活记录</router-link>
          <router-link to="/chat" @click.native="closeSideMenu"><i class="icon-comment"></i>聊天信息</router-link>
          <router-link to="/menu" @click.native="closeSideMenu"><i class="icon-music"></i>菜单菜单</router-link>
        </el-collapse-item>
        <el-collapse-item title="其他菜单" name="3">
          <router-link to="/menu" @click.native="closeSideMenu"><i class="icon-note"></i>生活记录</router-link>
          <router-link to="/menu" @click.native="closeSideMenu"><i class="icon-comment"></i>聊天信息</router-link>
          <router-link to="/menu" @click.native="closeSideMenu"><i class="icon-music"></i>菜单菜单</router-link>
        </el-collapse-item>
        <el-collapse-item title="用户设置" name="4">
          <router-link to="/password" @click.native="closeSideMenu"><i class="icon-note"></i>修改密码</router-link>
          <router-link to="/skin" @click.native="closeSideMenu"><i class="icon-note"></i>更换皮肤</router-link>
          <router-link to="/logout" @click.native="closeSideMenu"><i class="icon-music"></i>退出登录</router-link>
        </el-collapse-item>
      </el-collapse>
    </my-menu>

    <router-view class="pageView" router="/home"/>

  </div>

</template>
<script>
import myMenu from '@/templates/sidebar.vue'
import appHeader from '@/templates/header.vue'
export default {
  name: 'App',
  data () {
    return {
      visible: false, // 侧边栏是否显示
      activeName: '1' // 默认展开第几个菜单
    }
  },
  components: {
    'appHeader': appHeader,
    'myMenu': myMenu
  },
  methods: {
    showSideMenu () {
      this.visible = true
    },
    closeSideMenu () {
      this.visible = false
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.pageView{
  height: 94%;
  overflow-y: auto;
}
</style>
