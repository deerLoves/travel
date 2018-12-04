<template>
    <div class="attractions">
          <div class="pic">
              <img :src="SpotAttarr.photo">
               <i class="iconfont icon-guanbi btn" @click="handleClose()"></i>
          </div>
          <div class="conent">
              <div class="city">{{SpotAttarr.address}}{{SpotAttarr.name}}</div>
              <div class="con-c">
                <p>{{SpotAttarr.detail}}</p> 
              </div>
          </div>
          <div class="bottom">
              <h4>游客评论</h4>
              <div class="tour">
                  <img src="../../../static/img/a.png">
                  <div class="msg">
                     <p>{{SpotAttarr.scenicEvas?SpotAttarr.scenicEvas[0].createtime.substr(0,10):""}}</p>
                     <p>{{SpotAttarr.scenicEvas?SpotAttarr.scenicEvas[0].nickname:""}}</p>
                 </div>
              </div>
              <div class="discuss">
                {{SpotAttarr.scenicEvas?SpotAttarr.scenicEvas[0].eva:""}}
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
     height: 8.6rem;
     position: relative;
}
.btn {
  font-size: 0.44rem;
  position: absolute;
  left: 0.32rem;
  top: 0.8rem;
  color: #ffffff;
}
.conent {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  top:-0.8rem;
}
.conent > .city{
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #010101;
  letter-spacing: 0;
  padding:0.64rem 0 0  0.32rem;
  width: 100%;
  height: 1.64rem;
  background: #ffffff;
  line-height: 1rem;
  border-radius: 0.2rem 0.2rem 0 0;
}
.conent > .con-c {
  width:100%;
  padding: 0.34rem 0.32rem 1.62rem;
  font-family: PingFangSC-Regular;
  font-size:0.36rem;
  color: #010101;
  letter-spacing: 0;
  line-height: 0.48rem;
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
  padding-left: 0.32rem;
}
.bottom > h4 {
  font-size: 0.48rem;
  color: #000000;
  line-height: 0.48rem;
  padding: 0.48rem 0;
  margin-right: 0.32rem;
  border-top: 0.02rem solid rgba(145, 145, 145,0.1) ;
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


