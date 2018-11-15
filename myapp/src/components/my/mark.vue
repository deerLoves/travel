<template>
	<div class="mark conent" v-show="show"></div>
</template>

<script>
	export default {
		created(){
			this.observer.$on("handeldelete",(val)=>{
				this.show=val
			});
			this.observer.$on("handeldelB",(val)=>{
				this.show=val
			});
			this.observer.$on("handeldelF",(val)=>{
				this.show=val
			});
			this.observer.$on("handelPublish",(val)=>{
				this.show=val
			});
			this.observer.$on("handelPublishT",(val)=>{
				this.show=val
			})
		},
		data(){
			return {
				show:false
			};
		}
	}
</script>

<style scoped>
.mark{
	background: #000000;
	opacity: 0.23;
	width: 100%;
	height: 100%; 
	position: fixed;
	left: 0;
	bottom: 0;
	/* display: none; */
}
</style>
