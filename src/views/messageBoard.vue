<template>
    <div id="mes">
         <v-header></v-header>
           <div id="head">
               <div id="head_img">
                   <img src="../assets/logo.jpeg" style="width: 100px;height: 100px;">
                </div>
               <div id="head_detail"> 
                   <h1>Breaking.X</h1><br>
                   <p>自闭小吴的空间</p>
                </div>
                <div id="weather">
                    这里以后会是天气
                </div>
           </div>
           <div id="main">
                <div><h3>留言版</h3></div>
                <hr>
                <dir>
                        <h4>主人寄语</h4>
                        <p>你好你好你好，欢迎光临我的空间，这里是我的留言栏<br></p>
                </dir>
                <div id="board_top">
                        <div>
                        <h4>留言板（999)</h4>
                        </div>
                        <div style="margin-top:2.5%;margin-left:76%;padding-left:%1">
                            <span>上一页</span>
                            <span>下一页</span>
                        </div>
                </div>
                <hr>
                    
                
                <div id="bootpage" style="margin-bottom: 100px;border: solid 1px #255117;" >
                <v-bootpage :productList="productList"></v-bootpage>
               </div>
               
           </div>
           <child-com @childFn="parentFn"></child-com>
    </div>
    
</template>
<script>
import Header from '../components/Header.vue';
import Bootpage from '../components/Bootpage';
import axios from 'axios';
export default {
    data(){
        return {
            style: '',
            flag : false,
            productList:[],
            currentPageData:[]
        }
    },
    components:{
         'v-header' : Header,
         'v-bootpage' : Bootpage,
    },
    mounted(){
        this.handcommentInfo();
    },
    methods:{
        comment1(){
            //弹出的是一个提示
            var name=prompt("输入的内容","");
             if (name!=null && name!="") {
            alert("你输入的是" + name);
            }
        },
        comment(){
            this.flag = !this.flag;
            if(this.flag){
                this.style = "display: block";
            }else{
                this.style = "display: none";
            }
            
        },
        parentFn(childData) {
        this.currentPageData = childData;
        },
        handcommentInfo(){
            const url = 'http://localhost:8090/selectallcomment';
            axios.post(url).then(
                res => {
                    if(res.status == '200'){
                       for(let i = 0; i < res.data.length; i++){
                            let item = {};
                            item.id = res.data[i].id + "";
                            item.details = res.data[i].details + "";
                            item.favourable = res.data[i].favourable + "";
                            item.comment_time = res.data[i].comment_time + "";
                            this.productList.push(item);
                       }
                    }
                    console.log(this.productList)
                }
            ).catch(
                res => {
                    
                },
            );
        },
        clickme(){
            
            console.log(this.retuenlist)
        }
        

    }
    
}
</script>
<style scoped>
#mes{
   
}

#head{
 width: 80%;
 margin-left: 10%;
 border: solid 2px #255117;
 display: flex
}

#head_img{
    margin-left: 5%;
    margin-top: 2%;
}

#head_detail{
   margin-left: 2%;
}

#weather{
    margin-left: 50%;
}


#main{
    margin-left: 20%;
    margin-top: 5%;
    width: 60%;
    border: solid 2px #255117;
    text-align: center;
    padding: 20px 20px 20px 20px;
    
}

#main h3,#main h4{
    text-align: left;
}

#board_top{
   display: flex;
  
}

#comment{
    border: solid 1px #255117;
    display: none;
}

#bootpage{
    margin-bottom: 100px;
}
</style>