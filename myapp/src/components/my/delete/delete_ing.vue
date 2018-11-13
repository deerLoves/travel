<template>
	<div class="delete_ing">
		<p>是否删除</p>
		<p><a href="##" >是</a><a href="##" >否</a></p>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
.delete_ing{
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
	z-index: 1;
}
.delete_ing p:nth-child(1){
	width: 100%;
	height: .56rem;
	font-size:40px ;
	color: #000000;
	margin-top: .64rem;
	padding:0 2.22rem 0 2.24rem ;
	margin-bottom:.8rem ;
}
.delete_ing p:nth-child(2){
	width: 100%;
	height: .56rem;
   display: flex;
   justify-content: space-around;	
}
.delete_ing p:nth-child(2) a{
	font-size: 40px;
	display: block;
	color: #A0A0A0;
}

</style>

