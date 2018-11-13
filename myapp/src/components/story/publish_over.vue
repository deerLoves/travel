<template>
	<div class="publish_over" v-show="show"  @click="handelPublishT()">
		<p>发布成功</p>
		<p><a href="##">ok</a></p>
	</div>
</template>

<script>
	export default {
		created(){
			this.observer.$on("handelPublish",(val)=>{
				this.show=val
			})
		},
		data() {
			return {
				show:false
			}
		},
		methods:{
			handelPublishT(){
				this.show=false;
				this.observer.$emit("handelPublishT",false)
				this.$router.push({name:"home"})
			}
		}
	}
</script>

<style scoped>
.publish_over{
	width: 5.4rem;
	height: 2.08rem;
	background:#fff ;
	display: flex;
	flex-direction: column;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	border-radius: .2rem;
	z-index: 1;
	
	
}
.publish_over p:nth-child(1){
	width: 100%;
	height: 1.2rem;
	font-size:34px ;
	color: #000000;
	padding-top: .42rem;
	/* padding:0 2.22rem 0 2.24rem ; */
	/* margin-bottom:.48rem ; */
	border-bottom:1px solid #4D4D4D ;
	text-align: center;
	
}
.publish_over p:nth-child(2){
	width: 100%;
	height: .87rem;
	text-align: center;
	padding-top: .24rem;
  /*  padding:0  2.52rem .32rem 2.54rem ; */	
}
.publish_over p:nth-child(2) a{
	display: block;
	font-size: 34px;
	color: #0076FF ;
}
</style>

