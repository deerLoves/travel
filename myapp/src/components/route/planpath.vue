<template>
  <div class="planpath">
    <div class="cont" v-for="(item,index) in infos">
      <div class="word1">
        {{item.start}}
      </div>
      <div class="word2">
        <img src="../../../static/img-chen/pathbg.png" alt="">
        <p>2018-8</p>
        <p>正在进行</p>
      </div>
      <div class="word3">
        {{item.end}}
      </div>
    </div>
  </div>
</template>


<script>
  export default{
    data(){
      return {
        infos: [{start:"安河桥",end:"积水潭"}],
        name:""
      }
    },
    methods: {
      handleGeter(obj){
        console.log(obj);
        this.infos.push(obj)
      }
    },
    created(){
      this.observer.$on("handlePath",handleGeter);
    }
  }
</script>


<style scoped>
  .planpath {
    height: 1.2rem;
    background: #FFFFFF;
    box-shadow: 0 2px 8px 2px #DDDDDD;
    border-radius: .2rem;
    margin-top: .4rem;
  }

  .cont {
    display: flex;
    width: 5rem;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
  }

  .cont .word1, .word3 {
    line-height: 1.2rem;
    font-size: .48rem;
    font-family: PingFangSC-Regular;
    color: #666;
  }

  .cont .word2 {
    width: 1rem;
    text-align: center;
    padding-top: .2rem;
  }

  .cont .word2 img {
    margin-left: 8px;
  }

  .cont .word2 p:nth-of-type(1) {
    font-size: .24rem;
    color: #666666;
    margin: 5px auto;
  }

  .cont .word2 p:nth-of-type(2) {
    font-size: .2rem;
    color: #FF4C4C;
  }
</style>
