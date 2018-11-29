<template>
  <div class="planpath">
    <div class="addPath" @click="handleGoNewRouter()">+ 添加新行程</div>
    <div class="cont cont_style" v-for="(item,index) in myRouteHeader" @click="handleGoPersonRouteDetails(item)">
      <div class="word1">
        {{item.start}}
      </div>
      <div class="word2">
        <img src="../../../../static/img-chen/pathbg.png" alt="">
        <p>{{item.createTime}}</p>
        <p>{{item.flag == 1?'已结束':'正在进行'}}</p>
      </div>
      <div class="word3">
        {{item.end}}
      </div>
    </div>
  </div>
</template>


<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...Vuex.mapState({
      myRouteHeader: state => state.route.myRouteHeader
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleGoPersonRouteDetails:"route/handleGoPersonRouteDetails"
    }),
    handleGo() {
      this.$router.push("/mypath");
    },
    handleGoNewRouter(){
        this.$router.push("/routePlay");
    }
  },
  created() {
    this.observer.$on("handlePath");
  }
};
</script>


<style scoped>
.planpath {
  width: 100%;
}
.addPath {
  width: 6.36rem;
  height: 1.2rem;
  background: #4e94d0;
  box-shadow: 0 2px 8px 2px #dddddd;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.32rem;
  color: #fff;
  font-family: PingFangSC-Regular;
  margin:.4rem auto;
}
.cont_style {
  width: 6.36rem;
  height: 1.2rem;
  background: #ffffff;
  box-shadow: 0 2px 8px 2px #dddddd;
  border-radius: 0.2rem;
}

.cont {
  display: flex;
  width: 6.36rem;
  height: 100%;
  margin: .4rem auto;
  justify-content: space-between;
}

.cont .word1,
.word3 {
  width: 2.4rem;
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.48rem;
  font-family: PingFangSC-Regular;
  color: #666;
}
.cont .word2 {
  width: 1rem;
  text-align: center;
  padding-top: 0.2rem;
}
.cont .word2 img {
  margin-left: 8px;
}
.cont .word2 p:nth-of-type(1) {
  font-size: 0.24rem;
  color: #666666;
  margin: 5px auto;
}

.cont .word2 p:nth-of-type(2) {
  font-size: 0.2rem;
  color: #ff4c4c;
}
</style>
