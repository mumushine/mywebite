<template>
  <div id="main">
      <a href="/index"><img src="../assets/long1.jpeg" alt=""></a>
      <v-bottom></v-bottom>
  </div>
</template>

<script>
import Bottom from '../components/Bottom'
export default {
    components:{
       'v-bottom' : Bottom
    }
}
</script>

<style>
#main{
    background-image: '../assets/long1.jpeg';
}

#main img{
    height: 100%;
    width: 100%;
}
</style>