<template>
  <div class="visitor">
    <router-link :to="{name:'route'}" class="" v-show="true">
            <h3 class="back">&lt;</h3>
    </router-link>
    <p class="title">游客行程</p>
    <!--单个游客行程信息，接收到信息从此循环创建游客列表-->
    <div class="cont"  v-for="(item,index) in infos">
      <!--游客行程头像部位-->
      <div class="cont-top">
        <div class="top-l">
          <div class="img-wrap">
            <img src="../../../static/img-chen/touxiang.png" alt="">
          </div>
          <div class="top-l-txt">
            <p>路在四方</p>
            <p><span class="span-time">{{item.lastupdateYear}}</span><span>{{item.lastupdateHouer}}</span></p>
          </div>
        </div>
        <div class="top-r">
          <span>{{item.start}}</span>
          <span class="iconfont">&#xe6ae;</span>
          <span>{{item.end}}</span>
        </div>
      </div>
      <!--游客行程信息部位-->
      <div class="cont-cen" @click="handleGo(item.id)" v-show="item.showPhoto?true:false">
        <img :src="item.showPhoto" alt="">
      </div>
      <div class="cont-bot">
        <p @click="handleGo(item.id)">{{item.showMsg}}</p>
        <p>
          <span class="iconfont icon-pinglun" @click="handleShowOrHindCommit()">{{item.comments.length}}</span>
          <span class="iconfont icon-aixin1">{{item.like}}</span>
        </p>
       
      </div>
       <transition name="slide">
          <div class="comment-box" v-show="show">
            <p v-for="(item2,index) in item.comments">
              <span>{{item2.user.nickname}} : </span><span>{{item2.comment}}</span>
            </p>
            <div class="addCommit">
              <input type="text" placeholder="请写下你的评论..." v-model="commitConnect">
              <button @click="handleSendCommit({index:item.id,val:commitConnect})">发送</button>
            </div>
          </div>
        </transition>
      
    </div>
  </div>

  </div>
</template>


<script>
import Vuex from "vuex";
import iconfont from "../../../static/deer/iconfont_deer/iconfont.css";
export default {
  created() {
    this.handleEditTabStatus();
    this.handleVisitor("哈哈");
  },
  data(){
    return {
      show : false,
      commitConnect:''
    }
  },
  methods: {
    ...Vuex.mapActions({
      handleEditTabStatus: "handleEditTabStatus",
      handleVisitor: "route/handleVisitor",
      handleSendCommit:'route/handleSendCommit'
    }),
    handleGo(tripid) {
      this.$router.push({ name: "visitorDetails", params: { id: tripid } });
    },
    handleShowOrHindCommit(){
      this.show = !this.show;
    },
    
  },
  computed: {
    ...Vuex.mapState({
      infos: state => state.route.infos
    })
  },
  beforeRouteLeave(to, from, next) {
    this.handleEditTabStatus();
    next();
  }
};
</script>


<style scoped>
.visitor {
  padding: 0.4rem 0.32rem 0.98rem;
}
.visitor .back {
  line-height: 0.88rem;
  font-size: 0.4rem;
  margin-bottom: 0.24rem;
}
.visitor .title {
  font-family: PingFangSC-Regular;
  font-size: 48px;
  color: #000;
  margin-bottom: 0.52rem;
}
.cont-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}
.top-l {
  display: flex;
  height: 0.8rem;
}
.top-l .img-wrap {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.2rem;
}
.top-l .img-wrap img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.top-l-txt {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.top-l-txt p:first-child {
  font-size: 24px;
  font-family: PingFangSC-Regular;
}
.span-time {
  margin-right: 20px;
}
.cont-top .top-r {
  font-size: 28px;
  font-family: PingFangTC-Light;
  padding-top: 35px;
  height: 0.8rem;
}
.cont-top .top-r span:nth-of-type(2) {
  font-size: 0.32rem;
  color: #4e94d0;
}
.cont {
  margin-bottom: 0.6rem;
}
.cont-cen {
  width: 100%;
  height: 3.2rem;
  background: #ccc;
}
.cont-cen img {
  width: 100%;
  height: 100%;
  box-shadow: .02rem 0px .20rem #333333;
  /* border-radius: 0.2rem 0.2rem 0 0; */
}
.cont-bot {
  min-height: 0.15rem;
  /* background: #f0f0f0; */
  border-radius: 0 0 0.2rem 0.2rem;
  /* box-shadow: 2px 2px 5px #333333; -webkit-box-shadow:2px 2px 5px #333333; box-shadow:2px 2px 5px #333333; */
  /* box-shadow: .02rem .02rem .20rem #333333; */
}
.cont-bot p:nth-child(1) {
  width: 100%;
  min-height: 0.6rem;
  line-height: 0.6rem;
  font-family: PingFangSC-Medium;
  text-indent: 0.56rem;
  font-size: 0.28rem;
  /*多行文本溢出,注意高度*/
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
/* .cont-bot p:nth-child(2) {
  font-family: PingFangSC-Medium;
  font-size: 24px;
  line-height: 0.34rem;
} */
.cont-bot p:nth-child(2) {
  width: 100%;
  margin: 0.3rem 0 0.1rem;
  padding-right: 0.2rem;
  text-align: right;
  font-family: PingFangSC-Regular;
  font-size: 0.28rem;
}
.cont-bot p:nth-child(2)>span:nth-of-type(1){
  font-size: .32rem;
}
.cont-bot p:nth-child(2)>span:nth-of-type(2){
  font-size: .32rem;
}
.cont-bot p:nth-child(3) span {
  margin-right: 20px;
}
.comment-box{
  
}
.comment-box p{
  line-height: 0.38rem;
  padding-left: 0.2rem;
  background: #f0f0f0;
}
.comment-box .addCommit{
  display: flex;
  height: .5rem;
  justify-content:space-between;
  margin-top: 0.2rem;
  /* background: red; */
}
.comment-box .addCommit input{
  height: .5rem;
  width:5.2rem;
  font-size: .32rem;
  padding-left: .2rem;
  outline: none;
  border-radius: .2rem;
  border:1px solid #ccc;
}
.comment-box .addCommit button{
  width: 1.5rem;
  background: #4e94d0;
  font-size: .26rem;
  color:#fff;
  outline: none;
  border:0;
  border-radius: .2rem;
}
.comment-box>p>span:nth-of-type(1){
  color: #4e94d0;
}
/* .comment-box>p:last-of-type{
  border-radius: 0 0 0.2rem 0.2rem;
} */
.slide-enter,.slide-leave-to{
    opacity: 0;
    /* transform: translateY(-100%) */
}
.slide-enter-active,.slide-leave-active{
    transition: all .3s;
} 
</style>
