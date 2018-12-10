<template>
	<div class="myStory">
		<p><i class="iconfont icon-xiazai6 ico" @click="handelBack()"></i> </p>
		<p>我的故事</p>
		<div class="myStory_list_con">
			<div class="myStory-img">
				<img src="../../../static/images_li/t1.png" />
			</div>
			<div class="myStory_list" v-for="(item,index) in myStory_list">
				<p>
					<span>{{item.time[1]}}月</span>
					<span>{{item.time[2]}}日</span>
					<a href="##" @click="handeldel();handeldata(item.id) ">删除</a>
				</p>
				<div class="myStory_list_img" >
					<div class="myStory_list_img_con" v-for="(data,i) in item.img">
						<img :src="data"/>
					</div>
				</div>
				<p class="myStory_list_text">{{item.content}}</p>
				
			</div>
			
		</div>
		<mark-com></mark-com>
		<delete_ing-com></delete_ing-com>
		<delete_over-com></delete_over-com>
	</div>
</template>

<script scoped>
	import Vuex from "vuex"
	import iconfont from '../../../static/iconfont_li/iconfont.css';
	import mark from "@/components/my/mark";
	import delete_ing from "@/components/my/delete/delete_ing";
	import delete_over from "@/components/my/delete/delete_over";
	export default {
		created(){
			this.handelgetP();
		},
		computed:{
			...Vuex.mapState({
				myStory_list:state=>state.my.myStory_list
			})
		},
		components: {
			"mark-com": mark,
			"delete_ing-com": delete_ing,
			"delete_over-com": delete_over
		},
		methods:{
			handelBack(){
				this.$router.push({name:"my"});				
			},
			handeldel(){
				this.observer.$emit("handeldelete",true)				
			},
			...Vuex.mapActions({
				handelgetP:"my/handelgetP",
				handeldata:"my/handeldata"
			})	
		}
		
		
	}
</script>

<style scoped>
	.myStory {
		padding-top: .4rem;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		position: absolute;
		background: #fff;
	}

	.ico {
		font-size: 25px;
		color: #9B9B9B;
		padding-left: 0.34rem;
	}

	.myStory p:nth-child(2) {
		font-size: 24px;
		padding-left: .32rem;
	 	margin-top: .7rem;
		font-family: PingFangSC-Regular;
	}

	.myStory-img {
		width: 7.5rem;
		height: 4rem;
		padding-top: .54rem;
	}

	.myStory_list_con {
		width: ;
		overflow: auto;
	}

	.myStory_list {
		margin: 1rem 0;
	}

	.myStory_list_img {
		display: flex;
		padding-left: .7rem;
		padding-top: .4rem;
	}

	.myStory_list_img_con {
		width: 2rem;
		height: 2rem;
		margin-right: .5rem;
	}

	.myStory_list_img_con img {
		width: 100%;
		height: 100%;
	}

	.myStory_list_img_con p a {
		float: right;
		width: .56rem;
		height: .4rem;
		font-size: 28px;
		text-align: center;
		line-height: .4rem;
	}

	.myStory_list p span:nth-child(1) {
		width: .82rem;
		height: .56rem;
		font-size: 40px;
		color: #000000;
		padding-left: .32rem;
		
		
	}

	.myStory_list p span:nth-child(2) {
		width: .72rem;
		height: .44rem;
		font-size: 22px;
		color: #000000;
	}
   .myStory_list p a{
		float: right;
	   font-size: 24px;
	   color: #000000;
	   margin-right: .78rem;
	   width: .56rem;
	   height: .4rem;
	   text-align: center;
	   line-height: .4rem;
	   
   }
	.myStory_list_text {
		width: 100%;
		/* height: 1rem; */
		padding: .4rem .9rem 0 .74rem;
		font-size: 32px;
	}
</style>
