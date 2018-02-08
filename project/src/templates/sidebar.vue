<template>
  <div class="menuWrapper" ref="menuBox">
    <div class="menuCover"  v-if="menuVisible" @click="hideMenu"></div>
    <div class="sideBar">
      <div class="currentUser">
         <img src="../assets/img/default.jpg">
         <span>wangxingyue</span>
      </div>
      <div class="myMenu">
          <slot></slot>
      </div>
      <!-- <ul>
        <li><router-link to="/home"><i class="icon-calendar-1"></i>首页</router-link></li>
        <li><router-link to="/page02"><i class="icon-user-o"></i>个人中心</router-link></li>
        <li><router-link to="/page03"><i class="icon-note"></i>生活记录</router-link></li>
        <li><router-link to="/page04"><i class="icon-music"></i>菜单菜单</router-link></li>
        <li><router-link to="/page05"><i class="icon-comment"></i>信息</router-link></li>
        <li><router-link to="/page06"><i class="icon-cog"></i>设置</router-link></li>
      </ul> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-menu',
  data () {
    return {
    }
  },
  props: {
    menuVisible: {
      type: Boolean
    }
  },
  watch: {
    menuVisible () {
      this.toggleShow()
    }
  },
  created () {
  },
  methods: {
    hideMenu () {
      this.$emit('update:menuVisible', !this.menuVisible)
    },
    toggleShow () {
      var stage = 0
      var current = 0
      if (this.menuVisible) {
        stage = 20
        current = -200
      } else {
        stage = -20
        current = 0
      }
      this.animation(stage, current)
    },
    animation (index, move) {
      const self = this
      var timer = null
      timer = setInterval(function () {
        move = move + index
        self.$refs.menuBox.style.left = move + 'px'
      }, 20)
      setTimeout(function () {
        clearInterval(timer)
      }, 200)
    }
  }
}
</script>

<style>
.menuWrapper{
  width: 200px;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: -200px;
}
.menuCover{
  background-color: rgba(0,0,0,0.2);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
}
.sideBar{
  position: relative;
  height: 100%;
  width: 200px;
  background-color: rgba(0,0,0,0.9);
  font-size: 0.6rem;
}
.currentUser{
  position: absolute;
  top: 0;
  width: 100%;
  height: 7rem;
}
.currentUser>img{
  width: 3rem;
  margin-top: 2rem;
  border-radius: 50%;
}
.currentUser>span{
  color: #eee;
  display: block;
  margin-top: 0.5rem;
}
.myMenu{
  position: absolute;
  top: 8rem;
  bottom: 0;
  width: 100%;
}
.active_menu{
  border-bottom:1px solid red;
}
/*整体菜单*/
.el-collapse{
  border:none;
  font-size: 0.5rem;
}
/*自定义菜单*/
.el-collapse>a{
  height: 48px;
  line-height: 48px;
  display: block;
  color: #fff;
  text-align: left;
  text-indent: 1rem;
  text-decoration: none;
}
.is-active{
  margin:0 !important;
  line-height: 30px;
}
/*菜单单元*/
.el-collapse-item__wrap{
  background-color: rgba(0,0,0,0);
  border:none;
}
/*小标题*/
.el-collapse-item__header{
  background-color: rgba(0,0,0,0);
  color: #fff;
  border:none;
  line-height: 48px;
  text-align: left;
  text-indent: 1rem;
}
/*小内容*/
.el-collapse-item__content{
  color: #ddd;
  background-color: #555;
  border-top: 1px solid red;
  padding: 0;
}
.el-collapse-item__content>a{
  display: block;
  height: 1.5rem;
  line-height: 1.5rem;
  text-decoration: none;
  color: #fff;
  text-align: left;
  padding-left: 2rem;
  font-size: 0.4rem;
  background-color: red;
}
.el-collapse-item__content>a>i{
  margin-right: 0.5rem;
}
ul{
  margin-top: 2rem;
}
ul li{
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: left;
  /*border-bottom:1px solid #fff;*/
  background-color: rgba(0,0,0,0.2);
  margin-top: 0.5rem;
  /*text-indent: 2rem;*/
  padding-left: 1rem;
  color: #fff;
}
ul li a{
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #fff;
  font-size: 0.4rem;
}
ul li i{
  font-size: 0.5em;
  margin-right: 0.3rem;
}
</style>
