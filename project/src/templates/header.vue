<template>
  <div class="menuBtn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'menu-btn',
  props: {
    menuVisible: {
      type: Boolean
    }
  },
  created () {
    // this.showMenu()
  },
  methods: {
    showMenu () {
      // console.log(this.menuVisible)
    }
  }
}
</script>

<style>
.menuBtn{
    width: 100%;
    height: 1.5rem;
    padding-top: 0.1rem;
    background-color: red;
    position: relative;
}
.menuBtn>span{
    color: #fff;
    font-size: 0.6rem;
}
.menuBtn>i{
    position: absolute;
    height: 1.5rem;
    line-height: 1.6rem;
    font-size: 14px;
    color: #fff;
}
.icon-menu{
    left: 0.5rem;
}
.icon-dot-3{
    right: 0.5rem;
}
</style>
