<template>
	<div class="publish">
		<div class="publish_top">
			<p><i class="iconfont icon-xiazai6 " @click="handelBack()"></i></p>
			<p><a href="##" @click="handelPublish()">发布</a></p>
		</div>
		<div class="publish_c">
			<p><input type="text"  v-model="title"></p>
			<p><input type="text"  v-model="content"></p>
		</div>
		<div class="publish_img_list">
			<div class="publish_img">
				<div class="publish_img_con">
					<img src="../../../static/images_li/t4.png" />
				</div>
				<div class="publish_img_con">
					<img src="../../../static/images_li/t5.png" />
				</div>
				<div class="publish_img_con">
					<img src="../../../static/images_li/t6.png" />
				</div>
			  </div>
		</div>
		<publish_over-com></publish_over-com>
		<mark-com></mark-com>
	</div>
</template>

<script>
	import Vuex from "vuex"
	import iconfont from '../../../static/iconfont_li/iconfont.css';
	import publish_over from "@/components/story/publish_over";
	import mark from "@/components/my/mark";
	export default {
		created(){
			this.handelPublish();
		},
		components:{
			"publish_over-com":publish_over,
			"mark-com":mark,
		},
		computed:{
			...Vuex.mapState({
				content:state=>state.story.content,
				img:state=>state.story.img
			})
		},
		methods:{
			handelBack(){
				this.$router.push({name:"story"})
			},
			handelPublish(){
				this.observer.$emit("handelPublish",true);			
			},	
		...Vuex.mapActions({
			handelPublish:"story/handelPublish"
		})
		},
		data(){
			return {
				title:"一生一定要去一次巴厘岛",
				content:'巴厘岛有浪漫至上的婚礼现场，有无垠靓丽的海天一线，有热情活力的各色人群，巴厘岛的玩法千千万，但是你知道真正的巴厘岛"浪"法吗？！'
    	}
		}
		
	}
</script>

<style scoped>
	.publish{
		width: 100%;
		height: 100%;
		padding-top: .4rem;
		display: flex;
		position: fixed;
		bottom: 0;
		z-index: 1;
		flex-direction: column;
		background:#fff;
	}
	.publish_top{
		width: 100%;
		height: .56rem;
		 display: flex;
		/* justify-content: space-around; */ 
	}
	.publish_top p:nth-child(1){
		width:.264rem ;
		height:.264rem ;
		margin-right: 5.72rem;
	}
	.publish_top p:nth-child(1) i{
		font-size: 32px;
		color: #9B9B9B;
		padding-left: 0.34rem;		
	}
	.publish_top p:nth-child(2) a{
		font-size: 40px;
		color: #4D9EE6;
	}
	.publish_c{
		margin-top:.936rem ;
		padding: 0 0.4rem ;
	}
	.publish_c p:nth-child(1){
		width: 100%;
		height: 1.1rem;
		border-bottom:0.01rem  solid #000000;
	  
	}
	.publish_c p:nth-child(1) input{
		width: 100%;
		height: .66rem;
		font-size:48px ;
		color: #000000;
		border: none; 
		outline: none;
	}
	.publish_c p:nth-child(2){
		width: 100%; 		 
		height: 2.21rem; 
	}
	.publish_c p:nth-child(2) input{
		font-size: 28px;
		color:  #000000;
	  width: 100%; 		 
	  height: 100%; 
		outline: none;
		border: none; 
		margin-top: .41rem;
		display: block;
		
	}
	.publish_img{
		width: 100%;
		height: 1.78rem;
		padding-left: .4rem;
	}
	.publish_img_con{
		width:1.78rem ;
		height:1.78rem ;
		background:#000000 ;
		/* opacity: 0.1; */
		float: left;
		margin-right:0.2rem ;
	}
	.publish_img_con img{
		width: 100%;
		height: 100%;
	}
	/* .publish_img_con a{
		display: block;
		background: ;
	} */
</style>
