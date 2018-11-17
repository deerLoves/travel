<template>
	<div class="publish">
		<div class="publish_top">
			<p><i class="iconfont icon-xiazai6 " @click="handelBack()"></i></p>
			<p><a href="##" @click="handelPublish()">发布</a></p>
		</div>
		<div class="publish_c">
			<p><input type="text"  v-model="title_page"></p>
			<p><input type="text"  v-model="content_page"></p>
		</div>
		<div class="publish_img_list">
			<div class="publish_img">
				<!-- <div class="publish_img_con">
					<img src="../../../static/images_li/t4.png" />
				</div>
				<div class="publish_img_con">
					<img src="../../../static/images_li/t5.png" />
				</div>
				<div class="publish_img_con">
					<img src="../../../static/images_li/t6.png" />
				</div> -->
				<div id="img-wrapper" @click="deleteImg($event)"></div>
				<div class="wrapper">
					<form id="addTextForm" @change="setImg($event)">
					</form>
					<button id="uploadImgBtn" type="button" @click="change_input()">上传照片</button>
				</div>
				
				<!-- <P class="btn-wrapper">
					<mt-button type="primary" @click="submit()">提交</mt-button>
				</P> -->
			</div>
		</div>
		<publish_over-com></publish_over-com>
		<mark-com></mark-com>
	</div>
</template>

<script>
import Vuex from "vuex";
import iconfont from "../../../static/iconfont_li/iconfont.css";
import publish_over from "@/components/story/publish_over";
import mark from "@/components/my/mark";

import jquery from "../../jquery-1.11.3.js";
import jqueryForm from "../../jquery.form.js";

/**
 * 从 file 域获取 本地图片 url
 */

function getFileUrl(obj) {
  let url;
  url = window.URL.createObjectURL(obj.files.item(0));
  return url;
}
export default {
  created() {},
  components: {
    "publish_over-com": publish_over,
    "mark-com": mark
  },
  data() {
    return {
      title_page: "一生一定要去一次巴厘岛",
      content_page:
        '巴厘岛有浪漫至上的婚礼现场，有无垠靓丽的海天一线，有热情活力的各色人群，巴厘岛的玩法千千万，但是你知道真正的巴厘岛"浪"法吗？！',
      imgNum: 3
    };
  },
  computed: {
    ...Vuex.mapState({
      content: state => state.story.content,
      img: state => state.story.img
    })
  },
  methods: {
    handelBack() {
      this.$router.push({ name: "story" });
    },
    handelPublish() {
      this.observer.$emit("handelPublish", true);
    },
    ...Vuex.mapActions({
      handelPublish: "story/handelPublish"
    }),

    //图片上传
    //根据点击上传按钮触发input
    change_input() {
      let inputArr = $("#addTextForm input");
      let add_inputId = ""; //需要被触发的input
      for (let i = 0; i < inputArr.length; i++) {
        // 根据input的value值判断是否已经选择文件
        if (!inputArr[i].value) {
          //如果没有选择,获得这个input的ID
          add_inputId = inputArr[i].id;
          break;
        }
      }
      if (add_inputId) {
        //如果需要被触发的input ID存在,将对应的input触发
        return $("#" + add_inputId).click();
      } else {
        alert("最多选择" + this.imgNum + "张图片");
      }
    },
    //当input选择了图片的时候触发,将获得的src赋值到相对应的img
    setImg(e) {
      let target = e.target;
      $("#img_" + target.id).attr("src", getFileUrl(e.srcElement));
    },
    //点击图片删除该图片并清除相对的input
    deleteImg(e) {
      let target = e.target;
      let inputID = ""; //需要清除value的input
      if (target.nodeName == "IMG") {
        target.src = "";
        inputID = target.id.replace("img_", ""); //获得需要清除value的input
        $("input#" + inputID).val("");
      }
	},
	 //提交信息到后台
    handelPublish(){
		var file_0 = $("#0");
        var file_1 = $("#1");
        var file_2 = $("#2");
        var formdata = new FormData();
        formdata.append("title",this.title_page);
        formdata.append("content",this.content_page);
        formdata.append("files",file_0[0].files[0]);
        formdata.append("files",file_1[0].files[0]);
        formdata.append("files",file_2[0].files[0]);
         $.ajax({
            type:"post",
            url:"/travel/story/publish/",
            data:formdata,
            dataType:"json",
            cache: false,//不适用缓存中的结果
            processData: false,//传输的数据，不被jquery封装
            contentType: false,//数据编码格式不使用jquery的方式
            success:function(data){
                if(data.code==1){
                    console.log('提交成功');
                    $("#addTextForm input").val('');
                    $('div#img-wrapper img').attr('src','');

                }else{
                    alert('提交失败');
                }
            }
        })
    }
  },
  //页面加载后执行
  mounted() {
    for (let i = 0; i < this.imgNum; i++) {
      //生成input框，默认为1
      let my_input = $('<input type="file" name="image" />'); //创建一个input
      my_input.attr("id", i); //为创建的input添加id
      $("#addTextForm").append(my_input); //将生成的input追加到指定的form
      //生成img，默认为1
      let my_img = $('<img src="">');
      my_img.attr("id", "img_" + i);
      my_img.css({ "max-width": "50%", "max-height": "200px" }); //添加样式，由于vue的执行机制，页面加载的时候img标签还没有生成，直接写在style样式会不生效
      $("#img-wrapper").append(my_img);
    }
  }
};
</script>

<style scoped>
.publish {
  width: 100%;
  height: 100%;
  padding-top: 0.4rem;
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 1;
  flex-direction: column;
  background: #fff;
}
.publish_top {
  width: 100%;
  height: 0.56rem;
  display: flex;
  /* justify-content: space-around; */
}
.publish_top p:nth-child(1) {
  width: 0.264rem;
  height: 0.264rem;
  margin-right: 5.72rem;
}
.publish_top p:nth-child(1) i {
  font-size: 32px;
  color: #9b9b9b;
  padding-left: 0.34rem;
}
.publish_top p:nth-child(2) a {
  font-size: 40px;
  color: #4d9ee6;
}
.publish_c {
  margin-top: 0.936rem;
  padding: 0 0.4rem;
}
.publish_c p:nth-child(1) {
  width: 100%;
  height: 1.1rem;
  border-bottom: 0.01rem solid #000000;
}
.publish_c p:nth-child(1) input {
  width: 100%;
  height: 0.66rem;
  font-size: 48px;
  color: #000000;
  border: none;
  outline: none;
}
.publish_c p:nth-child(2) {
  width: 100%;
  height: 2.21rem;
}
.publish_c p:nth-child(2) input {
  font-size: 28px;
  color: #000000;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  margin-top: 0.41rem;
  display: block;
}
.publish_img {
  width: 100%;
  height: 1.78rem;
  padding-left: 0.4rem;
}
.publish_img_con {
  width: 1.78rem;
  height: 1.78rem;
  background: #000000;
  /* opacity: 0.1; */
  float: left;
  margin-right: 0.2rem;
}
.publish_img_con img {
  width: 100%;
  height: 100%;
}
/* .publish_img_con a{
		display: block;
		background: ;
	} */
/*图片上传*/
.wrapper{
	display: flex;
	justify-content: column;
}
#uploadImgBtn{
	width: 6.75rem;
	height: 1rem;
	background-color: #4d9ee6;
	color: #fff;
	border: 0;
	border-radius: .1rem;
	font-size: .32rem;
	outline: none;
}
#addTextForm{
	display: none;
}
#img-wrapper{
	width: 6.75rem;
	height: 2.5rem;
	/* background: red; */
	display:flex;
	justify-content: space-around;
}
</style>
