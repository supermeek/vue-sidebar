
<!-- 基于vue框架实现的简单侧边栏模板 -->

# vue-sidebar 基于vue框架实现的简单侧边栏模板

> A Vue project 基本框架安装

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
<!-- Vue 脚手架中使用JQuery的几种方式 -->

# Vue 脚手架中使用JQuery的几种方式

## Jquery Install Setup

>1.这种方式不会影响原来VUE文件中的$的使用，但是需要每个vue文件都引入一遍

``` javascript
<script>
import '../assets/js/jquery-1.10.2.min.js'
export default {
 data() {
 }
}
$(function(){
    alert('可以使用jquery')
})
</script>
```
>2.手动下载jQuery 放在static目录下 => static/js/jquery.min.js

``` javascript
alias: {
  // 1.定义别名和插件位置
  "jquery": path.resolve(__dirname, '../static/js/jquery.min.js')
},
plugins: [
  // 2. 配置全局使用 jquery
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    jquery: "jquery",
    "window.jQuery": "jquery"
  })
 ]
```

>3.通过npm安装依赖引入

``` bash
# 安装依赖
$ npm install jquery -S

```

``` javascript
// 修改webpack配置文件

alias: {
  // 定义别名和插件位置
  "jquery": path.resolve(__dirname, '../static/js/jquery.min.js')
},
plugins: [
  // 配置全局使用 jquery
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    jquery: "jquery",
    "window.jQuery": "jquery"
  })
]

```

<!-- 知识点备注 -->

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
