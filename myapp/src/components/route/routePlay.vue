<template>
  <div>
    <div class="play-btn">
      <a href="#" :class="btnindex == 1 ? 'active' : ''"  @click="handleSendIndex()">我的行程</a>
      <a href="#/visitor" :class="btnindex == 2 ? 'active' : ''">游客行程</a>
    </div>

    <component :is="comName" @handleCom="handleChangeCom"></component>
  </div>
</template>


<script>
    import playBtn from './routeAddBtn.vue'
    import routePath from './routePath.vue'
    import planpath from './planpath.vue'
    export default{
        data(){
            return{
                btnindex:1,
                comName : 'playBtn-com'
            }
        },
      components:{
        'playBtn-com' :   playBtn,
        'routePath-com' : routePath,
        'planpath-com' : planpath
      },
      methods:{
        handleSendIndex(){
          this.$router.push('/mypath')
        },
        handleChangeCom(val){
            if(!val){
              this.comName = 'routePath-com'
            }else{
              this.comName = 'planpath-com'
            }
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
