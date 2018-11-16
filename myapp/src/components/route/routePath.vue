<template>
  <div>
    <p>
      <span>输入起点</span>
      <input type="text" v-model="start">
    </p>
    <p>
      <span>输入终点</span>
      <input type="text" v-model="end">
    </p>
    <button @click="handleSend()">确定</button>
  </div>
</template>


<script>
    export default{
        data(){
            return{
                start:'',
                end:''
            }
        },
      methods:{
        handleSend(){
            this.observer.$emit("handlePath",{start:this.start,end:this.end});
            this.$emit("handleCom",1)

        }
      }
    }
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
  div button{
    width: 3rem;
    height: .5rem;
    border: none;
    background: none;
    border: 2px solid deepskyblue;
    margin-top: .4rem;
    font-size: 24px;
    border-radius: 20px;
    color:deepskyblue ;
  }
</style>
