<template>
  <div>
    <h5>{{ msg }}</h5>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '这里是首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5{
    display: block;
    height: 10rem;
    width: 10rem;
    margin: auto;
    margin-top: 5rem;
    line-height: 10rem;
    background-color: red;
    color: #fff;
  }
</style>
