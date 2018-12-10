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
    <button @click="handleAddNewRoute({start,end})">确定</button>
  </div>
</template>


<script>
    import Vuex from 'vuex';
    export default{
      data(){
          return{
              start:'',
              end:''
          }
      },
      methods:{
        ...Vuex.mapActions({
          handleAddNewRoute:"route/handleAddNewRoute"
        }),
      }
    }
</script>


<style scoped>
  div{
    margin-top: 60px;
    text-align: center;
  }
  div p{
    margin-bottom: .2rem;
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
    width: 4rem;
    height: .8rem;
    border: none;
    background: none;
    border: 2px solid deepskyblue;
    margin-top: .4rem;
    font-size: .32rem;
    border-radius: .8rem;
    color:deepskyblue ;
    outline: none; 
  }
</style>
