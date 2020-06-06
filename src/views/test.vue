<template>
    <div>
          <v-header :test="data"></v-header>
         
          <child-com @childFn = 'parentFn'></child-com>
           <v-slider style="margin-top: 100px;" :imgArray="imgArray"></v-slider>
    </div>
    
</template>
<script>
import Header from '../components/Header.vue';
import Slider from '../components/slidertest.vue'
export default {
    data(){
        message:''
        return {
            imgArray:[
              {imgsrc:require("../assets/pan1.jpeg")},
              {imgsrc:require("../assets/shuaige.jpeg")},
              {imgsrc:require("../assets/fengjing.jpg")},
              {imgsrc:require("../assets/family.jpg")},
            ],
            data: '我是父组件信息',
        }
    },
    components:{
       'v-header' : Header,
       'v-slider' : Slider
    },
    methods:{
        parentFn(childData){
            this.message = childData;
        }
    }
    
}
</script>
<style scoped>
  v-slider{
      margin-top: 100px;
  }
</style>