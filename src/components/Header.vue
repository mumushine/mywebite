<template>
    <div>
        <h2 class="header">这是一个头部组件</h2>

    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:'我是一个头部组件'
        }
    }
}
</script>
<style scoped>
.header{
    background:black;
    color: gainsboro;
}
</style>