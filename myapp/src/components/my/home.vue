<template>
    <div class="page home">
        <h3>我的</h3>
        <div class="via"><a href=""><img src="" alt=""></a></div>
         <p class="userNam">用户名</p>
         <!-- <div class="infor">
             <div class="personInfor">
                 <a>个人资料<i class="iconfont">&#xe639;</i>
                 <router-link :to="{name:item.name}" class="rl" v-show="true">
                    <i></i>{{item.title}}
                </router-link></a>
             </div>
             <div class="myFriends">
                 <a>我的朋友<i class="iconfont">&#xe639;</i></a>

             </div>
             <div class="myRoute">
                 <a>我的行程<i class="iconfont">&#xe639;</i></a>

             </div>
             <div class="myStory">
                 <a>我的故事<i class="iconfont">&#xe639;</i></a>

             </div>
             <div class="message">
                  <a>消息通知<i class="iconfont">&#xe639;</i></a>

             </div>
             <div class="feedBack">
                 <a>信息反馈<i class="iconfont">&#xe639;</i></a>

             </div>
             <div class="setting">
                  <a>设置<i class="iconfont">&#xe639;</i></a>

             </div>
             
            
         </div> -->
         <ul class="infor">
            <li v-for="(item,index) in navs" @click="handleClick(index)">
                <router-link :to="{name:item.name}" class="" v-show="true">
                    <a href="">{{item.title}}<i class="iconfont">&#xe639;</i></a>
                </router-link>
            </li>
        </ul>


    

    </div>
</template>

<script>
import "../../../static/icon-liu/iconfont.css"
export default {
    data(){
        return {
            navs : [
                {
                    name:"personInfor",
                    title:"个人资料",
                   

                },
                {
                    name:"myFrends",
                    title:"我的好友"
                },
                {
                    name:"myRoute",
                    title:"我的行程"
                },
                {
                    name:"myStory",
                    title:"我的故事"
                },
                
                 {
                    name:"message",
                    title:"消息通知"
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

        }
    }
    


</script>

<style scoped>
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
    margin-bottom:.4rem;
}
.userNam{
    padding-left:3.2rem;
    margin-bottom:1.26rem;
    font-size:.36rem;
    font-family: PingFangSC-Regular;

}
.infor{
    flex:1;
    width:100%;
    overflow: hidden;
    
}
.infor>ul{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    background: red;
}
.infor>li{
    width:100%;
    height:.96rem;
}
.infor>li>a{
     display:block;
    font-size:.32rem;
    font-family: PingFangSC-Regular;
    margin-left:1.1rem;
    line-height:.96rem;

}
.infor>li>a>i{
    border: 600;
    font-size:0.28rem;
    color:black;
    margin-left:4.5rem;

}
/* .infor>.setting>a>i{
    margin-left:5.1rem;

} */

/* .personInfor{
    background:url(../../../static/icons/data.svg) no-repeat 0.05rem;
}
.myFriends{
    background:url(../../../static/icons/my-friends.svg) no-repeat 0.05rem;
}
.myRoute{
    background:url(../../../static/icons/my-travel.svg) no-repeat 0.05rem;
}
.myStory{
    background:url(../../../static/icons/my-storys.svg) no-repeat 0.05rem;
}
.message{
    background:url(../../../static/icons/news.svg) no-repeat 0.05rem;
}
.feedBack{
    background:url(../../../static/icons/feedback.svg) no-repeat 0.05rem;
}
.setting{
    background:url(../../../static/icons/setting.svg) no-repeat 0.05rem;
} */
.infor>ul>li:nth-of-type(1){
     background:url(../../../static/icons/data.svg) no-repeat 0.05rem;
}
.infor>ul>li:nth-of-type(2){
     background:url(../../../static/icons/my-friends.svg) no-repeat 0.05rem;
}

.infor>ul>li:nth-of-type(3){
     background:url(../../../static/icons/my-travel.svg) no-repeat 0.05rem;
}
.infor>ul>li:nth-of-type(4){
     background:url(../../../static/icons/my-storys.svg) no-repeat 0.05rem;
}
.infor>ul>li:nth-of-type(5){
     background:url(../../../static/icons/news.svg) no-repeat 0.05rem;
}
.infor>ul>li:nth-of-type(6){
     background:url(../../../static/icons/feedback.svg) no-repeat 0.05rem;
}
.infor>ul>li:nth-of-type(7){
     background:url(../../../static/icons/setting.svg) no-repeat 0.05rem;

}
.infor:nth-child(7)>a>i{
    margin-left:5.1rem;


}


</style>
