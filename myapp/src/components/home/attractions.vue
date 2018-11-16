<template>
    <div class="attractions">
          <div class="pic">
              <img :src="SpotAttarr.photo">
               <i class="iconfont icon-guanbi btn" @click="handleClose()"></i>
          </div>
          <div class="conent">
              <div class="city">{{SpotAttarr.address}}{{SpotAttarr.name}}</div>
              <div class="con-c">
                {{SpotAttarr.detail}}
              </div>
          </div>
          <div class="bottom">
              <h4>游客评论</h4>
              <div class="tour">
                  <img src="../../../static/img/a.png">
                  <div class="msg">
                     <p>{{SpotAttarr.scenicEvas[0].createtime}}</p>
                     <p>{{SpotAttarr.scenicEvas[0].nickname}}</p>
                 </div>
              </div>
              <div class="discuss">
                {{SpotAttarr.scenicEvas[0].eva}}
              </div>
          </div>
    </div>
</template>
<script>
import Vuex from 'vuex'
export default {
  computed:{
      ...Vuex.mapState({
         SpotAttarr:state=>state.home.SpotAttObj.data,
        //  SpotUser:state=>state.home.SpotAttObj.scenicEvas
      })
    },
  created(){
    this.handlespotAtt(this.$route.query);
    // console.log(this.$route.query);
  },
  methods:{
    ...Vuex.mapActions({
      handlespotAtt:"home/handlespotAtt"
    }),
    handleClose(){
      this.$router.back()
     },
  }
}
</script>
<style scoped>
.attractions {
  overflow: hidden;
}
/* .pic {
  width: 100%;
  height: 7.8rem;
  background: blueviolet;
} */
.pic>img{
     width: 100%;
     height: 7.8rem;
}
.btn {
  font-size: 0.44rem;
  position: fixed;
  left: 0.32rem;
  top: 0.4rem;
  color: #ffffff;
}
.conent {
  width: 100%;
  height: 9.36rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.2rem;
  border-bottom: 1px solid #979797;
}
.conent > .city{
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #010101;
  letter-spacing: 0;
  margin:0.64rem 0 0  0.32rem;
  font-weight: normal;
  width: 100%;
  height: 1rem;
  background: #ffffff;
  line-height: 1rem;
}
.conent > .con-c {
  width:100%;
  height: 5.76rem;
  padding: 0 0.32rem;
  font-family: PingFangSC-Regular;
  font-size:0.36rem;
  color: #010101;
  letter-spacing: 0;
  line-height: 0.48rem;
  margin-top:0.34rem;
  /* border-bottom: 1px solid #979797; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:12;
  overflow: hidden;
}
.bottom {
  width: 100%;
  height: 6.6rem;
  background: #fff;
  margin-left: 0.32rem;
}
.bottom > h4 {
  font-size: 0.48rem;
  color: #000000;
  line-height: 0.48rem;
  padding: 0.48rem 0;
}
.bottom > .tour {
  width: 100%;
  height: 1rem;
  display: flex;
  margin-bottom: 0.34rem;
}
.bottom > .tour > img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.28rem;
}
.msg {
  display: flex;
  flex-direction: column;
  font-family: PingFangSC-Medium;
  font-size: 0.36rem;
  color: #000000;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:6;
  overflow: hidden;
 
}
.discuss {
  width: 6.3rem;
  height: 2.5rem;
  font-size: 0.32rem;
  color: #000000;
}
</style>


