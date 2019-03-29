<template>
  <div id="app">
    <div class="box">
      <router-link to="/all">首页</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app .box{
  margin-bottom: 40px;
  background: yellow;
  height: 100px;
}
</style>
