<template>
  <div>
    <a href="#" @click="handleChange"><img src="../../../static/img-chen/fff_03.png" alt=""></a>
    <p>快来添加您的行程吧</p>
  </div>
</template>


<script>
    export default{
        methods:{
          handleChange(){
              this.$emit("handleCom")
          }
        }
    }
</script>


<style scoped>
  div a{
    display: block;
    width: .96rem;
    height: .96rem;
    margin: 50px auto;

  }
  div p{
    text-align: center;
    color:#4E94D0;
    font-size: 24px;
    font-family:PingFangSC-Regular;
  }
</style>
