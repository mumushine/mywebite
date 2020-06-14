<template>
  <div id="app">
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

  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
