<template>
    <div>
        <v-header/>
        {{ msg }}
        首页页面！
    </div>
    
</template>
<script>
import Header from '../components/Header.vue';
export default {
    data(){
        return {
            msg : '这里是首页'
            
        }
    },
    components:{
        'v-header' : Header,
    }
    
}
</script>
<style scoped>

</style>