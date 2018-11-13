<template>
	<div class="delete_over">
		<p>删除成功</p>
		<p><img src="../../../../static/images_li/t3.png"></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
.delete_over{
	width: 6.06rem;
	height: 3rem;
	background:#FFFFFF ;
	display: flex;
	flex-direction: column;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	display: none;
	border-radius: .2rem;
}
.delete_over p:nth-child(1){
	width: 100%;
	height: .56rem;
	font-size:40px ;
	color: #000000;
	margin-top: .64rem;
	padding:0 2.22rem 0 2.24rem ;
	margin-bottom:.48rem ;
}
.delete_over p:nth-child(2){
	width: 100%;
	height: 1rem;
    padding:0  2.52rem .32rem 2.54rem ; 
	
}

</style>
