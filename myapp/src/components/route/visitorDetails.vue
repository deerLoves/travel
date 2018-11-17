<template>
  <div class="details">
    <button class="back" @click="handleBack">返回</button>
    <p class="title">游客行程</p>
    <div class="message">
      <!--每个动态的盒子，数据在此盒子循环-->
      <div class="cont" v-for="(item,index) in arrs">
        <!--//时间轴图片-->
        <img class="time-bg" src="../../../static/img-chen/border-bg.png" alt="">
         <div class="time-box">
            <div class="time1">
              <span>2018-11-13</span>
              <span>7:00</span>
            </div>
            <div class="time2">
              <span>阿尔卑斯</span>
            </div>
         </div>
          <div class="img-box">
            <img src="../../../static/img-chen/yinghua_03.png" alt="">
          </div>
          <div class="txt-box">
            <p>从明天起，我要做一个幸福的人，喂马、劈柴、周游世界。我有一所房子，面朝大海，春暖花开</p>
          </div>
      </div>

    </div>
  </div>
</template>


<script>
    export default{
        methods:{
          handleBack(){
              this.$router.back();
          }
        },
      data(){
            return{
                arrs:[1,2,3,4,5]
            }
      }
    }
</script>


<style scoped>
  .details{
    padding: 1.4rem 0 0.98rem 0;
  }
  .details .title{
    font-family: PingFangSC-Regular;
    font-size: 48px;
    color: #000;
    margin:0 0 .52rem .32rem;
  }
  .message{
    padding:0 .32rem 0 .24rem;
  }
  .message .cont{
    padding-left: .2rem;
    position: relative;
    width:100%;
    height: 4.1rem;
    border-left: 2px solid #ccc;
    z-index: -1;
  }
  .message .cont .time-bg{
    position: absolute;
    left: -9px;
    top: 1px;
  }
  .time-box{
    display: flex;
    justify-content: space-between;
  }
  .time1{
    font-size: 28px;
    color: #666;
    font-family: PingFangTC-Light;
  }
  .time1 span:first-child{
    margin-right: .2rem;
  }
  .time2{
    font-size: 28px;
    color: #666;
    font-family: PingFangTC-Light;
  }
  .img-box{
    margin:.3rem 0 .2rem 0;
  }
  .txt-box{
    font-size: 28px;
    color: #666;
    font-family: PingFangTC-Light;
  }
  .back{
    width: 1rem;
    height: .5rem;
    border: none;
    background: none;
    border: 2px solid deepskyblue;
    border-radius: 10px;
    font-size: .24rem;
    margin-bottom: .5rem;
  }
</style>
