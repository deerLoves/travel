<template>
	<div class="mark conent" v-show="show"></div>
</template>

<script>
export default {
  created() {
    this.observer.$on("handleImg",(val)=>{
      this.show = val;
	});
	this.observer.$on("handleSex",(val)=>{
      this.show = val;
	});
	this.observer.$on("handleNick",(val)=>{
      this.show = val;
    });
  },
  data() {
    return {
      show: false
    };
  }
};
</script>

<style scoped>
.mark {
  background: #000000;
  opacity: 0.23;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
