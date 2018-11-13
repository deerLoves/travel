<template>
<div class=" page home">
        <router-link :to="{name:'my'}"  v-show="true">
        <h3 class="back">&lt;</h3>
        </router-link>
        <p>设置</p>
 
         <ul class="list">
           
            <li v-for="(item,index) in navs">
                <router-link :to="{name:item.name}"  v-show="true">
                   <a href="">{{item.title}}<i class="iconfont">{{item.placeholder}} </i></a>
                 </router-link>               
            </li>
         

        </ul>
             <button class="send">保存</button>

 </div>
    
</template>
    

<script>
import "../../../static/icon-liu/iconfont.css"
export default {
    data(){
         return{
            navs:[
                {
                    title:"当前版本",
                    placeholder:"v1.1.0",
                    name:""

 
                },
                 {
                    title:"清除缓存",
                    placeholder:"",
                    name:""

                },
                 {
                    title:"检查更新",
                    placeholder:"已是最新",
                    name:""


                },
                 {
                    title:"关于我们",
                     placeholder:"",
                     name:"aboutUs"

                },
                 {
                    title:"修改密码",
                      placeholder:"",
                      name:"changePwd"

                },
               
            ]
        }
    }
    
}
</script>
<style scope>
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
    margin-bottom:.48rem;
    font-size:.48rem;
    line-height: .48rem;
    color:#030303;
    font-family: PingFangSC-Regular;
}
.list{
    width:100%;
    height:5.6rem;
    margin-left:.32rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    
}
.list li a{
    font-size:.36rem;
    color:#030303;
    font-family: PingFangSC-Regular;

}
.list li a i{

    font-size: .28rem;
    color:#030303;
    opacity:0.3;
    margin-left:4.5rem;



}
.send{
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
