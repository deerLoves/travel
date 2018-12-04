<template>
  <div class="mypath page">
   <h3 class="back" @click="handleGoBank()">&lt;</h3>
    <div class="cont">
      <div>
        <h2 class="title-txt">我的行程</h2>
      </div>
      <div class="box-img">
        <img src="../../../static/img-chen/mybanner_03.png"/>
      </div>
      

      <mypathcont-com></mypathcont-com>
    </div>
  </div>
</template>


<script>
import mypathcont from "./mypathcont.vue";
export default {
  components: {
    "mypathcont-com": mypathcont
  },
  methods:{
    handleGoBank(){
       this.$router.back();
    }
  }
};
</script>


<style scoped>
.cont {
  padding: 0 0.32rem;
}
.mypath .back {
  line-height: 0.88rem;
  font-size: 0.4rem;
  margin-bottom: 0.24rem;
  padding-left: 0.32rem;
}
.title-txt {
  font-size: 48px;
  font-family: PingFangSC-Semibold;
  margin-bottom: .4rem;
}
</style>
