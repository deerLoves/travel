<template>
  <div class="details">
    <router-link :to="{name:'visitor'}" class v-show="true">
      <h3 class="back">&lt;</h3>
    </router-link>
    <p class="title">
      <span>游客行程</span>
      <span>
        <em>{{infosOne.start}}</em>
        <i class="iconfont">&#xe6ae;</i>
        <em>{{infosOne.end}}</em>
      </span>
    </p>
    <div class="message">
      <!--每个动态的盒子，数据在此盒子循环-->
      <div class="cont" v-for="(item,index) in infosOneDetiles">
        <!--//时间轴图片-->
        <img class="time-bg" src="../../../static/img-chen/border-bg.png" alt>
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
          <!-- <img src="../../../static/img-chen/yinghua_03.png" alt="">
            <img src="../../../static/img-chen/yinghua_03.png" alt="">
          <img src="../../../static/img-chen/yinghua_03.png" alt="">-->
          <img :src="item" v-for="(item,index) in item.photo" alt>
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
  created() {
    this.handlevisitorDetailsShow(this.$route.params);
  },
  data() {
    return {
      arrs: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    ...Vuex.mapState({
      infosOne: state => state.route.infosOne,
      infosOneDetiles: state => state.route.infosOneDetiles
    })
  },
  methods: {
    ...Vuex.mapActions({
      handlevisitorDetailsShow: "route/handlevisitorDetailsShow"
    })
  }
};
</script>


<style scoped>
.details {
  padding: 0.4rem 0 0.98rem 0;
}
.details .back {
  padding-left: 0.32rem;
  line-height: 0.88rem;
  font-size: 0.4rem;
  margin-bottom: 0.24rem;
}
.details .title {
  font-family: PingFangSC-Regular;
  font-size: 0.32rem;
  color: #000;
  margin: 0 0.32rem 0.52rem;
  display: flex;
  justify-content: space-between;
}
.details .title span:nth-of-type(1) {
  font-size: 0.48rem;
  line-height: 0.48rem;
}
.details .title span:nth-of-type(2) i {
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
  font-size: 28px;
  color: #666;
  font-family: PingFangTC-Light;
}
/* .back{
    width: 1rem;
    height: .5rem;
    border: none;
    background: none;
    border: 2px solid deepskyblue;
    border-radius: 10px;
    font-size: .24rem;
    margin-bottom: .5rem;
  } */
</style>
