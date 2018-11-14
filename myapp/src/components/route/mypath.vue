<template>
  <div class="mypath page">
    <div class="cont">
      <div class="box-img">
      <img src="../../../static/img-chen/mybanner_03.png"/>
      </div>
      <div>
        <h2 class="title-txt">我的行程</h2>
      </div>

      <mypathcont-com></mypathcont-com>
    </div>
  </div>
</template>


<script>
    import mypathcont from './mypathcont.vue'
    export default{
        components: {
          'mypathcont-com': mypathcont
        }
    }
</script>


<style scoped>
.cont{
  padding: .88rem .32rem 0;
}
  .title-txt{
    font-size: 48px;
    font-family: PingFangSC-Semibold;
    margin-top: 5%;
  }
</style>
