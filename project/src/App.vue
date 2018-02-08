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
        <router-link to="/home" class="active_menu">菜单首页</router-link>
        <el-collapse-item title="个人中心" name="1">
          <router-link to="/home"><i class="icon-calendar-1"></i>个人信息</router-link>
          <router-link to="/page02"><i class="icon-user-o"></i>修改密码</router-link>
        </el-collapse-item>
        <el-collapse-item title="功能菜单" name="2">
          <router-link to="/page03"><i class="icon-note"></i>生活记录</router-link>
          <router-link to="/page04"><i class="icon-music"></i>菜单菜单</router-link>
          <router-link to="/page05"><i class="icon-comment"></i>聊天信息</router-link>
        </el-collapse-item>
        <el-collapse-item title="其他菜单" name="3">
          <router-link to="/page03"><i class="icon-note"></i>生活记录</router-link>
          <router-link to="/page04"><i class="icon-music"></i>菜单菜单</router-link>
          <router-link to="/page05"><i class="icon-comment"></i>聊天信息</router-link>
        </el-collapse-item>
        <el-collapse-item title="用户设置" name="4">
          <router-link to="/page03"><i class="icon-note"></i>更换皮肤</router-link>
          <router-link to="/page04"><i class="icon-music"></i>退出登录</router-link>
        </el-collapse-item>
      </el-collapse>
    </my-menu>

    <router-view router="/home"/>

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
</style>
