<template>
  <div id="app">
    <tab-com></tab-com>
    <router-view></router-view>
  </div>
</template>

<script>
import tab from "./components/common/tab";
import Vuex from 'vuex';
export default {
  components: {
      "tab-com":tab,
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
