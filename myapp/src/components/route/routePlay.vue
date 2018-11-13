<template>
  <div>
    <div class="play-btn">
      <a href="#" :class="btnindex == 1 ? 'active' : ''"  @click="handleSendIndex(1)">我的行程</a>
      <a href="#" :class="btnindex == 2 ? 'active' : ''"  @click="handleSendIndex(2)">游客行程</a>
    </div>

    <component :is="comName" @handleCom="handleChangeCom"></component>
    <!--<routePath-com></routePath-com>-->
    <!--<playBtn-com></playBtn-com>-->
  </div>
</template>


<script>
    import playBtn from './routeAddBtn.vue'
    import routePath from './routePath.vue'
    export default{
        data(){
            return{
                btnindex:1,
                comName : 'playBtn-com'
            }
        },
      components:{
        'playBtn-com' :   playBtn,
        'routePath-com' : routePath
      },
      methods:{
        handleSendIndex(index){
            this.btnindex = index
        },
        handleChangeCom(){
            this.comName = 'routePath-com'
        }
      }
    }
</script>


<style scoped>
.play-btn{
  text-align: center;
}
.play-btn a{
  font-family: PingFangSC-Regular;
  font-size: 40px;
  margin:40px 30px 0 0;
}
  .active{
    color: #4E94D0;
  }
</style>
