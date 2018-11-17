<template>
    <div class="spot">
        <div id="return">
            <i class="iconfont icon-guanbi" @click="handleSpotReturn"></i>
        </div>
        <div id="search">
            <input type="text" placeholder="请输入你要想搜索的景点" class="inp" v-model="spot">
            <input type="button" class="find" value="搜索" @click="handlegospot(spot),handlegotoSpot()">
        </div>
        <div id="histroy">
            <div class="nearby">
                <p>近期搜索历史</p>
            </div>
            <div class="address" v-for="(item,index) in spotarr" v-if="index<=2">
                <p>{{item}}</p>
                <hr>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
import Vuex from 'vuex';
export default {
    created(){
        this.handlespot();
        // axios({
        //     method:"get",
        //     url:"../../../static/bai/josn.json"
        // }).then((data)=>{
        //     this.search=data.data.searchaddress
        // })
    },
    computed:{
      ...Vuex.mapState({
         spotarr:state=>state.home.SpotObj,
         SpotName:state=>state.home.SpotName,
         SpotStatus:state=>state.home.SpotStatus
      })
    },
    data(){
        return{
           spot:"",
           id:""
        }
    },
    methods:{
        ...Vuex.mapActions({
            handlespot:'home/handlespot',
            handlegospot:'home/handlegospot'
        }),
        handleSpotReturn(){
            this.$router.back()
        },
        handlegotoSpot(){
            console.log(this.SpotStatus)
            if(this.SpotStatus){
                //this.$router.push({name:"attractions",query:{"id":this.id}})
            }
        }
        
    },
    // updated(){
    //     // console.log(this.SpotStatus)
    // }
}
</script>
<style scoped>
#return{
    padding:0.8rem 0 0.78rem;
}
#return>i{
    opacity: 0.5;
    font-size: 44px;
    padding-left: 0.32rem;
}
#search{
    padding-left: 0.32rem;
}
#histroy{
    padding: 0.74rem 0.3rem 0;
}
#histroy>.nearby>p{
    font-family: PingFangSC-Regular;
    font-size: 36px;
    color: #030303;
    letter-spacing: -0.002rem;
    line-height: 0.5rem;
}
#histroy>.address{
    font-family: PingFangSC-Regular;
    font-size: 28px;
    color: #030303;
    letter-spacing: -0.0018rem;
}
#histroy>.address>p{
    padding: 0.58rem 0 0.24rem;
}

#histroy>.address>hr{
    opacity: 0.2;
    border: 0.02rem solid #979797;
    margin: 0;
}
.inp {
  width: 5.46rem;
  height: 1rem;
  padding-left: 0.2rem;
  background: #ffffff;
  border: 0.02rem solid #f1efef;
  border-radius: 0.1rem 0 0  0.1rem;
  opacity: 0.4;
  font-size: 0.36rem;
  margin-left: 0.22rem;
  outline: none;
  margin-bottom: 0.62rem;
  border-right:none;
}
.find{
  width:1rem;
  height:1rem;
  font-size: 0.36rem;
  border:0.02rem solid #f1efef;
  opacity: 0.4;
   color: #030303;
  margin-left:-0.02rem;
  border-left:none;
  position:absolute;
  border-radius:0 0.2rem 0.2rem 0;
  background:#fff;
  
}
</style>
