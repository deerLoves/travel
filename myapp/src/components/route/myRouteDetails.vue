<template>
    <div class="mydetails">
      <h3 class="back">
        <span @click="handleBack()">&lt;</span>
        <em>
          <span @click="hanleEndRoute()" v-show="myRouteInfoDetails.flag==1?false:true">结束行程</span>
          <span @click="hanlePublish(myRouteInfoDetails.id)" v-show="myRouteInfoDetails.flag==1?false:true">发布</span>
          
        </em>
      </h3>
    <p class="title">
      <span>我的行程</span>
      <span>
        <em>{{myRouteInfoDetails.start}}</em>
        <i class="iconfont">&#xe6ae;</i>
        <em>{{myRouteInfoDetails.end}}</em>
      </span>
    </p>
    <div class="message">
      <!--每个动态的盒子，数据在此盒子循环   -->
      <div class="cont" v-for="(item,index) in myRouteInfoDetails.details"> 
        <!--//时间轴图片-->
        <img class="time-bg" src="../../../static/img-chen/border-bg.png" alt="">
         <div class="time-box">
            <div class="time1">
              <span>{{item.createYear}}</span>
              <span>{{item.createHouer}}</span>
            </div>
            <div class="time2">
              <span>{{item.location}}</span>
            </div>
         </div>
          <div class="img-box">
            <img :src="item" v-for="(item,index) in item.photo" alt="">
          </div>
          <div class="txt-box">
            <p>{{item.msg}}</p>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...Vuex.mapState({
      myRouteInfoDetails: state => state.route.myRouteInfoDetails
    })
  },
  methods:{
      ...Vuex.mapActions({
        hanleEndRoute:'route/hanleEndRoute'
      }),
      handleBack(){
          this.$router.back();
      },
      hanlePublish(id){
          this.$router.push({name:'myRoutePublish',params:{id:id}})
      },
  }
};
</script>

<style scoped>
.mydetails {
  padding: 0.4rem 0 0.98rem 0;
}
.mydetails .back {
  padding:0 0.32rem;
  line-height: 0.88rem;
  font-size: 0.4rem;
  margin-bottom: 0.24rem;
  display: flex;
  justify-content: space-between;
}
.mydetails .back>em{
  height: .78rem;
  display: block;
  font-style: normal;
  display: flex;
}
.mydetails .back>em>span{
  border: 1px solid #4e94d0;
  height: .68rem;
  width: 1.2rem;
  text-align: center;
  border-radius: .2rem;
  font-family: PingFangSC-Regular;
  font-weight: normal;
  color: #4e94d0;
  font-size: .32rem;
  margin-top: .1rem;
  line-height: .68rem;
  
}
.mydetails .back>em>span:nth-of-type(1){
  width: 1.8rem;
  margin-right: .2rem;
  border-color: rgb(217, 81, 79);
  color: rgb(217, 81, 79);
}
.mydetails .title {
  font-family: PingFangSC-Regular;
  font-size: 0.32rem;
  color: #000;
  margin: 0 0.32rem 0.52rem;
  display: flex;
  justify-content: space-between;
}
.mydetails .title span:nth-of-type(1) {
  font-size: 0.48rem;
  line-height: 0.48rem;
}
.mydetails .title span:nth-of-type(2) i {
  font-size: 0.32rem;
  line-height: 0.32rem;
  color: #4e94d0;
}
.message {
  padding: 0 0.32rem 0 0.24rem;
}
.message .cont {
  padding-left: 0.2rem;
  position: relative;
  width: 100%;
  height: 4.1rem;
  border-left: 2px solid #ccc;
  z-index: -1;
}
.message .cont .time-bg {
  position: absolute;
  left: -9px;
  top: 1px;
}
.time-box {
  display: flex;
  justify-content: space-between;
}
.time1 {
  font-size: 28px;
  color: #666;
  font-family: PingFangTC-Light;
}
.time1 span:first-child {
  margin-right: 0.2rem;
}
.time2 {
  font-size: 28px;
  color: #666;
  font-family: PingFangTC-Light;
}
.img-box {
  margin: 0.3rem 0 0.2rem 0;
  display: flex;
  justify-content: space-around;
}
.img-box img {
  width: 2rem;
  height: 2rem;
}
.txt-box {
  font-size: .28rem;
  color: #666;
  font-family: PingFangTC-Light;
  text-indent: .56rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
