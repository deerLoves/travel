<template>
    <div class="hostStory">
        <div v-for="(item,index) in storyArray.data">
            <div class="hsHeader">
                <div class="hsHeader-l">
                    <img :src="'http://ceshi.qfjava.cn/'+item.user.headimg" alt="">
                    <span>
                        {{item.user.nickname}}
                    </span>
                </div>
                <div class="hsHeader-r">
                    {{item.time}}
                </div>
            </div>
            <div class="hsText">
               {{item.content}}
            </div>
            <div class="hsImg">
                <router-link :to="{name:'storyDetalis'}">
                    <img :src="item.img[0]" alt="" @click="intoDetalis(storyArray.data[index].id)">
                </router-link>
            </div>
            <div class="hsComment">
                <div class="hsComment-l">
                    <p>浏览次数<i>{{item.count}}次</i></p>
                </div>
                <div class="hsComment-r">
                    <i class="iconfont icon-pinglun" @click="changeComment(index)"></i>
                    <i class="iconfont icon-aixin like" v-show="!storyArray.data[index].flag" @click="changeDislike(index),changeNum(storyArray.data[index].id)"></i>
                    <i class="iconfont icon-aixin1 like" v-show="storyArray.data[index].flag"  @click="changeLike(index),changeNum(storyArray.data[index].id)"></i> 
                </div>
            </div>
            <!-- 输入框 -->
            <div class="writeReview" >
                <!-- {{message}} -->
                {{messageText}}
            </div>
            <div class="ICommentBox" v-show="storyArray.data[index].message">
                <input type="text" placeholder="留下宝贵的评价" autofocus ref="aaa">
                <span @click="sendMessage(index,storyArray.data[index].id,messageText)">发送</span>
            </div>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex";
import axios from "axios";
export default {
    data(){
        return {
            status:true,
            messageText:"",

        }
    },
    created(){
        this.handleGetInterest();
        
    },
    computed:{
        ...Vuex.mapState({
            storyArray:state=>state.story.storyArray,
        })
    },
    methods:{
        ...Vuex.mapActions({
            handleGetInterest:"story/handleGetInterest",
            changeNum:"story/changeNum",
            intoDetalis:"story/intoDetalis",
            sendMessage:"story/sendMessage",
        }),
        changeLike(i){
            // this.status = true;
            this.storyArray.data[i].flag = 0;
        },
        changeDislike(i){
            this.storyArray.data[i].flag = 1;
        },
        changeComment(i){
            if(this.storyArray.data[i].message == false){
                this.storyArray.data[i].message = true;
            }else{
                this.storyArray.data[i].message = false;
            }
        },
        sendMessage(i){
            var oDivs = document.getElementsByClassName("writeReview");
            oDivs[i].innerHTML = this.$refs.aaa[i].value;
            // console.log(this.messageText);
        }
    },
}
</script>
<style scoped>
/*
$('#money').click(function(){
      setTimeout(function(){  
          $(this).scrollIntoView(); // 参数可以是true， false, 空参数  
      }, 300);
  })
*/
.hostStory{
    width:100%;
    font-family: PingFangSC-Regular;
    font-size: .32rem;
    color: #000000;
    margin-top:.28rem;
}
.hostStory>div{
    margin-bottom: .4rem;
}
.hostStory>div>.hsHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.hostStory>div>.hsHeader>.hsHeader-l{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.hostStory>div>.hsHeader>.hsHeader-l>img{
    width:1rem;
    height:1rem;
    border-radius: 50%;

}
.hostStory>div>.hsHeader>.hsHeader-l>span{
    margin-left: .16rem;
    line-height:.4rem;
    font-size: .28rem;
    color: #000000;
}
.hostStory>div>.hsHeader>.hsHeader-r{
    line-height:.4rem;
    font-size: .28rem;
    color: #000000;
}
.hostStory>div>.hsText{
    width:100%;
    height: .88rem;
    text-indent: 2em; 
    line-height: .44rem;
    overflow: hidden;
  text-overflow:ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
    margin-bottom: .4rem;
}
.hostStory>div>.hsImg{
    width:100%;
    height:3.2rem;
}
.hostStory>div>.hsImg>a>img{
    width:100%;
    height:100%;
    border-radius: .2rem;
}
.hostStory>div>.hsComment{
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-top:.4rem;
}
.hostStory>div>.hsComment>.hsComment-l{
    font-family: PingFangSC-Regular;
   
}
.hostStory>div>.hsComment>.hsComment-l>p{
    font-size: .32rem;
    color: #000000;

    
}
.hostStory>div>.hsComment>.hsComment-l>p>i{
    margin-left: .12rem;
    color: #080808;
    font-family: PingFangSC-Regular;
}
.hostStory>div>.hsComment>.hsComment-r{
    display: flex;
    justify-content: space-between;

}
.hostStory>div>.hsComment>.hsComment-r>i{
    font-size: .48rem;
}
.hostStory>div>.hsComment>.hsComment-r>.like{
    margin-left: .5rem;
}
.hostStory>div>.hsComment>.hsComment-r>i:nth-of-type(3){
    color: #ff3300;
}
.ICommentBox{
    width:100%;
    height:.5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #ccc;
    margin-top:.2rem;
}
.ICommentBox>input{
    border: 0;
    outline: none;
    width:80%;
    height:100%;
    font-size:.32rem;
    background:#d1d1d1;
    color:#000;
    /* border-radius: 0.1rem; */
}
.ICommentBox>span{
    height:100%;
    width:20%;
    background:#d1d1d1;
    text-align: center;
    line-height: .4rem;
}
</style>
