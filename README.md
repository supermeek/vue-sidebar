# vue-sidebar

> A Vue.js project

## Install Setup

``` bash
# 全局安装 vue-cli
$ npm install --global vue-cli

# 创建一个基于 webpack 模板的新项目
$ vue init webpack my-project-name

# 进入创建的项目目录
$ cd my-project-name

# 安装依赖
$ npm install

# 使用本地8080端口打开服务 localhost:8080/
$ npm run dev

```

## Build Setup

``` bash
# install dependencies
$ npm install

$ npm run dev

# build for production with minification
$ npm run build

# build for production and view the bundle analyzer report
$ npm run build --report

```

## Element Install Setup

``` bash
# 安装 Element-UI 模块
$ npm install element-ui -S

# 安装 loader 模块
$ cnpm install style-loader -D
$ cnpm install css-loader -D
$ cnpm install file-loader -D

# 在 main.js 中引入
$ import ElementUI from ‘element-ui‘
$ import ‘element-ui/lib/theme-default/index.css‘
$ Vue.use(ElementUI)

```

## Jquery Install Setup

>这种方式不会影响原来VUE文件中的$的使用，完全可行；但是需要每个vue文件都引入一遍

``` javascript
<script>
import '../assets/js/jquery-1.10.2.min.js'
export default {
 data() {
  return {
 },
 watch: {
 },
 created: function() {
 },
 methods: {
  list() {
   this.$router.push({
    path: 'list'
   });
  },
 },
}
$(document).ready(function(){
  $('.span123').click(function(){
    alert('123')
  })
})
</script>

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
