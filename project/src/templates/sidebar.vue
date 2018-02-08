<template>
  <div class="menuWrapper" ref="menuBox">
    <div class="menuCover" v-if="menuVisible" @click="hideMenu"></div>
    <div class="sideBar">
      <div class="currentUser">
         <img src="../assets/img/default.jpg">
         <span>wangxingyue</span>
      </div>
      <div class="myMenu">
          <slot></slot>
      </div>
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
    // 父页面传过来的值
    menuVisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    // 监听App.vue页面的visible的变化调用函数
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
        stage = 10
        current = -200
      } else {
        stage = -10
        current = 0
      }
      this.animation(stage, current)
    },
    animation (add, move) {
      const self = this
      var timer = null
      var index = 0
      timer = setInterval(function () {
        move = move + add
        index++
        self.$refs.menuBox.style.left = move + 'px'
        if (index === 20) {
          clearInterval(timer)
        }
      }, 20)
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
