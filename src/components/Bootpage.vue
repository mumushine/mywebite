<!-->这个组件是前端js实现分页信息<!-->
<template>
 <div class="wrap">
         <div id="board_index" v-for="(item,index) in currentPageData" :key="index"> 
                    
                    <p style="text-align: left">
                        Breaking &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span>{{item}}楼 </span>
                    </p>
                    <p style="text-align: left;height:100px">
                        啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        吴作伟你好帅，我要给你生猴子,啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        吴作伟你好帅，我要给你生猴子
                        啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        吴作伟你好帅，我要给你生猴子
                        啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
                        吴作伟你好帅，我要给你生猴子
                    </p>
                    <p style="text-align: right;margin-top:20px">
                        <span style="margin-right:80%">时间</span>
                        <span>点赞</span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <span v-on:click="comment()">评论</span>
                    </p>
                    
                        <textarea name="" id="comment" cols="30" rows="10" :style="style"></textarea>
                   
                    <hr>
                </div>
        
            <button @click="prevPage()" >
                上一页
            </button>
            
            <span>第{{currentPage}}页/共{{totalPage}}页</span>
            <button @click="nextPage()">
                下一页
            </button>
    </div>

</template>

<script>
export default {
    props:{
        productList:[],
    },
    data() {
        return {
            style: '',
            flag : false,
            totalPage: 1, // 统共页数，默认为1
            currentPage: 1, //当前页数 ，默认为1
            pageSize: 2, // 每页显示数量
            currentPageData: [], //当前页显示内容           
        };
    },
    mounted() {
        // 计算一共有几页
        this.totalPage = Math.ceil(this.productList.length / this.pageSize);
        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
        this.setCurrentPageData();
    },
    methods: {
        // 设置当前页面数据，对数组操作的截取规则为[0~10],[10~20]...,
        setCurrentPageData() {
            let begin = (this.currentPage - 1) * this.pageSize;
            let end = this.currentPage * this.pageSize;
            //slice() 方法可从已有的数组中返回选定的元素。
            this.currentPageData = this.productList.slice(
                begin,
                end
            );
        },
        //上一页
        prevPage() {
            
            console.log(this.currentPage);
            if (this.currentPage == 1) return;
         
             this.currentPage--;
             this.setCurrentPageData();
            
        },
        // 下一页
        nextPage() {
            if (this.currentPage == this.totalPage)return ;
 
             this.currentPage++;
             this.setCurrentPageData();
            
        },
        clickme(){
            this.$emit('childFn', this.currentPageData);
        },
        comment(){
            this.flag = !this.flag;
            if(this.flag){
                this.style = "display: block";
            }else{
                this.style = "display: none";
            }
            
        },     
    }
}
</script>

<style>


</style>