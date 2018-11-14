<template>
   <div class="page home">
        <router-link :to="{name:'my'}" class="" v-show="true">
        <h3 class="back">&lt;</h3>
        </router-link>
        <p>个人资料</p>
        <ul class="list">
            <li>
                <a href="">头像<img src="" alt=""></a>
            </li>
            <li v-for="(item,index) in navs" >
                   <a href="">{{item.title}}<i>{{item.placeholder}}</i></a>               
            </li>
            

        </ul>
        <button class="save">保存</button>
    </div>
</template>
<script>
import "../../../static/icon-liu/iconfont.css"
export default {
    data(){
        return{
            navs:[
                // {
                //     title:"头像",
                //     src:"",
 
                // },
                 {
                    title:"昵称",
                    placeholder:"",
                },
                 {
                    title:"性别",
                    placeholder:""

                },
                 {
                    title:"所在地",
                     placeholder:""

                },
                 {
                    title:"年龄",
                      placeholder:""
                },
                 {
                    title:"生日",
                      placeholder:""
                },
                

            ]
        }
    }
    
}
</script>
<style scoped>
.page{
  padding-top: .4rem;
  padding-bottom: .96rem;
}
.home{
    height:100%;
    position: fixed;
    z-index: 1;
    background: #fff;
}
.back{
    line-height: .88rem;
    font-size:0.4rem;
    margin-left:.32rem;
    margin-bottom:.64rem;
}
p{
    margin-left:.32rem;
    font-size:.48rem;
    line-height: .48rem;
    color:#030303;
    font-family: PingFangSC-Regular;
}
.list{
    width:100%;
    height:8.82rem;
    margin-left:.32rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size:.36rem;
    font-family: PingFangSC-Regular;
}
.list a{
    
    color:#030303 ;

}
.list li:nth-child(1) {
    display: flex;
    position: relative;
    
   

    
}
.list li:nth-child(1) img{
    position:absolute;

    width:.8rem;
    height:.8rem;
    left:5.9rem;
    top:-.2rem;
    background:pink;
    border-radius: .4rem;

}
.save{
    margin-left:.32rem;
    width:6.86rem;
    height:1rem;
    border-radius: .5rem;
    border:2px solid #4D9EE6;
    font-size: .36rem;
    color:#4D9EE6;
     background:white;
}

</style>
