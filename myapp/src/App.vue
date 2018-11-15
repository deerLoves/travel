<template>
  <div id="app">
		<div v-show="show">
       <tab-com></tab-com>
    </div>
		
    <router-view></router-view>
  </div>
</template>

<script>
import tab from "./components/common/tab";
import Vuex from 'vuex';

export default {
  components: {
      "tab-com":tab
  },
  computed:{
    ...Vuex.mapState({
      show:state=>state.show
    })
  }
}
</script>

<style>
#app {
  height: 100%;
}
.page{
  /*公共样式:上面的电池栏、下面的切换栏*/
  padding-top: .4rem;
  padding-bottom: .96rem;
}
</style>
