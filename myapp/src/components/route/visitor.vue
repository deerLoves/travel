<template>
  <div class="visitor">
    <p class="title">游客行程</p>

    <!--单个游客行程信息，接收到信息从此循环创建游客列表-->
    <div class="cont" @click="handleGo" v-for="(item,index) in infos">
      <!--游客行程头像部位-->
      <div class="cont-top">
        <div class="top-l">
          <div class="img-wrap">
            <img src="../../../static/img-chen/touxiang.png" alt="">
          </div>
          <div class="top-l-txt">
            <p>路在四方</p>
            <p><span class="span-time">{{item.year}}</span><span>{{item.time}}</span></p>
          </div>
        </div>
        <div class="top-r">
          <span>{{item.location}}</span>
        </div>
      </div>
      <!--游客行程信息部位-->
      <div class="cont-cen">
        <img src="../../../static/img-chen/visitor.png" alt="">
      </div>
      <div class="cont-bot">
        <p>赏樱赏枫圣地一日游</p>
        <p>漫步在京都蓝山竹林之中，欣赏山间红叶樱花，重返卧虎藏龙取
          景地，度过静谧放松的一天</p>
        <p><span>❤</span>1999</p>
      </div>
    </div>

  </div>
</template>


<script>
  import Vuex from 'vuex'
    export default{
      created(){
          this.handleVisitor("哈哈");
        console.log(this.infos);
      },
        methods:{
          ...Vuex.mapActions({
            handleVisitor : "route/handleVisitor"
          }),
          handleGo(){
              this.$router.push('/visitorDetails')
          }
        },
      computed:{
        ...Vuex.mapState({
          infos : state=>state.route.infos
        })
      }
    }
</script>


<style scoped>
  .visitor{
    padding : 1.4rem .32rem .98rem;
  }
  .visitor .title{
    font-family: PingFangSC-Regular;
    font-size: 48px;
    color: #000;
    margin-bottom: .52rem;
  }
  .cont-top{
    display: flex;
    justify-content: space-between;
    margin-bottom: .4rem;
  }
  .top-l{
    display: flex;
    height: .8rem;
  }
  .top-l .img-wrap{
    width: .8rem;
    height: .8rem;
    margin-right: .2rem;
  }
  .top-l .img-wrap img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  .top-l-txt {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .top-l-txt p:first-child{
    font-size: 24px;
    font-family:PingFangSC-Regular;
  }
  .span-time{
    margin-right: 20px;
  }
  .cont-top .top-r{
    font-size: 28px;
    font-family: PingFangTC-Light;
    padding-top: 35px;
  }
  .cont{
    margin-bottom: .6rem;
  }
  .cont-cen{
    width: 100%;
    height: 3.2rem;
    background: #ccc;
  }
  .cont-cen img{
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0 ;
  }
  .cont-bot{
   height: 2.5rem;
    background:#F0F0F0;
    border-radius: 0 0 20px 20px;
  }
  .cont-bot p:nth-child(1){
    height: .9rem;
    line-height: .9rem;
    font-family:PingFangSC-Medium;
    font-size: 28px;
  }
  .cont-bot p:nth-child(2){
    font-family:PingFangSC-Medium;
    font-size: 24px;
    line-height: .34rem;
  }
  .cont-bot p:nth-child(3){
    margin-top: .3rem;
    text-align: right;
    font-family: PingFangSC-Regular;
    font-size: 28px;
  }
  .cont-bot p:nth-child(3) span{
    margin-right: 20px;
  }
</style>
