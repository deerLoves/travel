<template>
    <div class="palce page">
        <div class="top">
            <i class="iconfont icon-guanbi btn"></i>
        </div>
        <div class="search">
            <input type="text" placeholder="请输入你要想搜索的地点" class="inp">
        </div>
        <div class="recommend"> 
            根据你的定位推荐
        </div>
        <div>
            <i class="iconfont icon-dingwei location"></i>
            <p class="dingwei">北京</p>
        </div>
        <div class="hot_city">
            热门城市
        </div>
        <ul>
            <li>北京</li>
            <li>挪威</li>
            <li>首尔</li>
            <li>澳大利亚</li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
  // data() {
  //   return {};
  // },
  // created() {
  //   axios({
  //     methods: "get",
  //     url: "/scenic/getscenicbyname",
  //     data: {
  //            id: 1,
  //           address: "北京",
  //     }.
  //       then((data)=>{
  //           console.log(data)
  //       })
  //   });
  // }
  // methods: {
  //   handlePlace(address) {
  //     this.$router.push({ path: "/home", query: {address:address}});
  //   }
  // }
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 1.46rem;
  background: #ffffff;
  position: relative;
}
.top > .btn {
  /* background:url(../../../static/icons/quxiao.svg) no-repeat; */
  font-size: 0.44rem;
  position: absolute;
  left: 0.32rem;
  top: 0.4rem;
  color: #9b9b9b;
}
.inp {
  width: 6.86rem;
  height: 1rem;
  padding-left: 0.2rem;
  background: #ffffff;
  border: 2px solid #f1efef;
  border-radius: 10px;
  opacity: 0.4;
  font-size: 0.48rem;
  color: #030303;
  letter-spacing: -0.17px;
  margin-left: 0.32rem;
  outline: none;
  margin-bottom: 0.62rem;
}
.recommend {
  font-size: 0.36rem;
  color: #030303;
  letter-spacing: -0.09px;
  margin-left: 0.32rem;
  margin-bottom: 0.4rem;
}
.location {
  font-size: 0.56rem;
  color: #4e94d0;
  margin-left: 0.32rem;
  margin-bottom: 0.4rem;
}
.dingwei {
  font-size: 0.28rem;
  color: #030303;
  letter-spacing: -0.18px;
  margin: 0 0 0.32rem 0.32rem;
}
.hot_city {
  width: 1.44rem;
  height: 0.5rem;
  font-size: 0.36rem;
  color: #030303;
  letter-spacing: -0.18px;
  margin-left: 0.32rem;
  margin-bottom: 0.46rem;
  font-family: PingFangSC-Regular;
}
li {
  /* width: 1.2rem; */
  height: 0.6rem;
  background: #ffffff;
  box-shadow: 0 1px 2px 0 #9b9b9b;
  line-height: 0.6rem;
  text-align: center;
  margin-left: 0.32rem;
  margin-right: 0.42rem;
  float: left;
  margin-bottom: 0.56rem;
  font-family: PingFangSC-Regular;
  font-size: 0.32rem;
  color: #030303;
  letter-spacing: -0.26px;
 text-align: center;
 line-height: 0.6rem;
 padding:0 0.28rem;
}
</style>
