
<!-- 基于vue框架实现的简单侧边栏模板 -->

# vue-sidebar 基于vue框架实现的简单侧边栏导航案例，适用于新手

> A Vue project 基本框架安装

## Install Setup

``` bash
# 全局安装 vue-cli
$ npm install --global vue-cli
$ cnpm install vue-cli -g (或者使用国内镜像安装)

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
# 安装 loader 模块
$ cnpm install style-loader -D
$ cnpm install css-loader -D
$ cnpm install file-loader -D

# 安装 Element-UI 依赖
$ npm install element-ui -S

# 在 main.js 中引入
$ import ElementUI from 'element-ui'
$ import 'element-ui/lib/theme-default/index.css'
$ Vue.use(ElementUI)

```

## Echart Install Setup

``` bash
# 安装 echarts依赖
$ npm install echarts -S
```

> 在 main.js 中引入 (全局引入)

``` javascript
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

//这里echarts初始化应在钩子函数mounted()中，这个钩子函数是在el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用

> 在 Hello.vue 中引入 (按需引入)
// 引入基本模板、柱状图组件、提示框和title组件
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

//这里之所以使用 require 而不是 import，是因为 require 可以直接从 node_modules 中查找，而 import 必须把路径写全
```



<!-- Vue 脚手架中使用JQuery的几种方式 -->

# Vue 脚手架中使用JQuery的几种方式

## Jquery Install Setup

> 1.这种方式不会影响原来VUE文件中的$的使用，但是需要每个vue文件都引入一遍

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
> 2.手动下载jQuery 放在static目录下 => static/js/jquery.min.js

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

> 3.通过npm安装依赖引入

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
# Vue 学习笔记

## Vue 中的 router-link

> 给<router-link>绑定事件，即在它渲染出来的标签上监听click或其他事件

``` html
//在事件后添加修饰符native即可解决(tag可不加 默认为a标签)

<router-link to='/home' @click.native='toggle' >page2</router-link>

```

## Vue中的 ref 和 $refs

> 通过ref获取DOM元素

``` html
<input type="text" ref="box" />

<ul>
  <li v-for="item in list" ref="li">{{item.name}}</li>
</ul>

```
``` javascript
methods:{
  getElement:function(){
    this.$refs.box.value = "name"
    this.$refs.li[6].toggleActive()
  }
}

```

## Vue中的 v-for $index $refs $children

> $index返回循环中的索引 $refs可获取循环中的某元素 $children返回组件集合

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
