<template>
	<div class="myStory">
		<p><i class="iconfont icon-xiazai6 ico" @click="handelBack()"></i> </p>
		<p>我的故事</p>
		<div class="myStory_list_con">
			<div class="myStory-img">
				<img src="../../../static/images_li/t1.png" />
			</div>
			<div class="myStory_list">
				<p>
					<span>10月</span>
					<span>29日</span>
					<a href="##" @click="handeldel()">删除</a>
				</p>
				<div class="myStory_list_img">
					<div class="myStory_list_img_con">
						<img src="../../../static/images_li/t2b.png" />
					</div>
				</div>
				<p class="myStory_list_text">打击都是哈的可能看到长时间彻底删除吗独立思考付款但是没空吃饭大劫案发明人啊快乐鸣锣开道玫琳凯发货人V</p>
			</div>
			<div class="myStory_list">
				<p>
					<span>10月</span>
					<span>29日</span>
					<a href="##">删除</a>
				</p>
				<div class="myStory_list_img">
					<div class="myStory_list_img_con">
						<img src="../../../static/images_li/t5.png" />
					</div>

				</div>
				<p class="myStory_list_text">打击都是哈的可能看到长时间彻底删除吗独立思考付款但是没空吃饭大劫案发明人啊快乐鸣锣开道玫琳凯发货人V</p>
			</div>
			<div class="myStory_list">
				<p>
					<span>10月</span>
					<span>29日</span>
					<a href="##" >删除</a>
				</p>
				<div class="myStory_list_img">
					<div class="myStory_list_img_con">
						<img src="../../../static/images_li/t4.png" />
					</div>
					
				</div>
				<p class="myStory_list_text">打击都是哈的可能看到长时间彻底删除吗独立思考付款但是没空吃饭大劫案发明人啊快乐鸣锣开道玫琳凯发货人V</p>
			</div>
		</div>
		<mark-com></mark-com>
		<delete_ing-com></delete_ing-com>
		<delete_over-com></delete_over-com>
	</div>
</template>

<script scoped>
	import iconfont from '../../../static/iconfont_li/iconfont.css';
	import mark from "@/components/my/mark";
	import delete_ing from "@/components/my/delete/delete_ing";
	import delete_over from "@/components/my/delete/delete_over";
	export default {
		components: {
			"mark-com": mark,
			"delete_ing-com": delete_ing,
			"delete_over-com": delete_over
		},
		
		
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
		overflow: auto;
	}

	.myStory_list {
		margin: 1rem 0;
		/* padding-bottom: 1rem; */
	}

	.myStory_list_img {
		display: flex;
		padding-left: .7rem;
		padding-top: .4rem;
	}

	.myStory_list_img_con {
		width: 1.6rem;
		height: 1.6rem;
		margin-right: 3.86rem;
	}

	.myStory_list_img_con img {
		width: 100;
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
		font-size: 32px;
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
		padding: .4rem .9rem 0 .74rem;
		font-size: 32px;
	}
</style>
