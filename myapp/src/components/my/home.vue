<template>
    <div class="page home">
        <h3>我的</h3>
        <div class="via"><a href=""><img :src="personInfo.headimg" alt=""></a></div>
        <p class="userNam">{{personInfo.nickname}}</p>
         
         <ul class="infor">
            <li v-for="(item,index) in navs">
                <router-link :to="{name:item.name}" class="" v-show="true">
                    <a href="">{{item.title}}<i class="iconfont">&#xe639;</i></a>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import "../../../static/icon-liu/iconfont.css";
import Vuex from 'vuex';
export default {
    data(){
        return {
            navs : [
                {
                    name:"personInfor",
                    title:"个人资料",
                },
                {
                    name:"myStory",
                    title:"我的故事"
                },
                 {
                    name:"feedBack",
                    title:"信息反馈"
                },
                 {
                    name:"setting",
                    title:"设置"
                },
            ]
        }
    },
    computed:{
        ...Vuex.mapState({
            personInfo:state=>state.login.personInfo
        })
    }
}
</script>

<style scoped>
.page{
  /*公共样式:上面的电池栏、下面的切换栏*/
  padding-top: .4rem;
  padding-bottom: .96rem;
}
.home{
    overflow: hidden;

}
h3{
    font-size:.48rem;
    line-height:.88rem;
    margin-bottom:.5rem;
    color:#2E2E2E;
    padding-left:.32rem;
}
.via{
    width:2rem;
    height:2rem;
    border-radius: 1rem;
    background:pink;
    margin-left:36.7%;
    margin-bottom:.3.5rem;
}
.via img{
    width:2rem;
    height:2rem;
    border-radius: 1rem;
}
.userNam{
    width:100%;
    text-align:center;
    margin-bottom:1.26rem;
    font-size:.36rem;
    font-family: PingFangSC-Regular;
}
.infor{
    flex:1;
    width:100%;
    overflow: hidden;
    
}
.infor{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    
}
.infor>li{
    width:100%;
    height:.96rem;
}
.infor>li a{
     display:block;
    font-size:.32rem;
    color:#000000;
    font-family: PingFangSC-Regular;
    margin-left:0.65rem;
    line-height:.96rem;

}
.infor>li a>i{
font-weight: 600;
    font-size:0.28rem;
    color:black;
    margin-left:4.5rem;

}

.infor>li:nth-of-type(1){
     background:url(../../../static/icons/data.svg) no-repeat 0.05rem;
}
.infor>li:nth-of-type(2){
     background:url(../../../static/icons/my-storys.svg) no-repeat 0.05rem;
}
.infor>li:nth-of-type(3){
     background:url(../../../static/icons/news.svg) no-repeat 0.05rem;
}
.infor>li:nth-of-type(4){
      background:url(../../../static/icons/setting.svg) no-repeat 0.05rem;
}
.infor>li:nth-child(4) a>i{
    margin-left:5.1rem;
}
</style>
