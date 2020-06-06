<template>
  <div id="app">
    <!--<img src="./assets/logo.jpeg">-->

    <router-view/>
  </div>
</template>

<script>
import index from './views/index';//引入首页组件
export default {
  name: 'App',
  components:{
    'v-index' : index, //挂载首页组件
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
