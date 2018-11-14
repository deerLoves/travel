<template>
  <div>
    <p>
      <span>输入起点</span>
      <input type="text">
    </p>
    <p>
      <span>输入终点</span>
      <input type="text">
    </p>
  </div>
</template>


<script>
    export default{}
</script>


<style scoped>
  div{
    margin-top: 60px;
    text-align: center;
  }
  div p span{
    font-size: 36px;
    color: #4A4A4A ;
    font-family: PingFangSC-Regular;
    margin-right: 20px;
  }
  div p input{
    font-size: 36px;
    width: 3rem;
    /*height: 36px;*/
    outline: none;
    border: none;
    border-bottom:1px solid #4D9EE6;
  }
</style>
