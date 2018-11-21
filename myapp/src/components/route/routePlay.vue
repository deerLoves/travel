<template>
  <div>
    <div class="play-btn">
      <span :class="btnindex == 1 ? 'active' : ''"  @click="judgeChildrenRoute()">我的行程</span>
      <span :class="btnindex == 2 ? 'active' : ''"  @click="handleGovisitor()">游客行程</span>
    </div>

    <!-- <component :is="comName" @handleCom="handleChangeCom"></component> -->
    <!-- <router-link :to="{name:'routeAdd'}">1111</router-link> -->
    <!-- 显示路由嵌套的组件 -->
    <router-view></router-view>
  </div>
</template>


<script>
    import Vuex from 'vuex';
    export default{
      created(){
        this.judgeChildrenRoute();
      },
      data(){
          return{
              btnindex:1,
          }
      },
      methods:{
        ...Vuex.mapActions({
          judgeChildrenRoute:"route/judgeChildrenRoute"
        }),
        handleSendIndex(){
          this.$router.push('/planPath')
        },
        handleGovisitor(){
          this.$router.push('/visitor')
        }
      }
    }
</script>


<style scoped>
.play-btn{
  text-align: center;
}
.play-btn span{
  font-family: PingFangSC-Regular;
  font-size: 40px;
  margin:40px 30px 0 0;
}
  .active{
    color: #4E94D0;
  }
</style>
