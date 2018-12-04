<template>
    <div class="myRoutePublish">
        <div class="publish_top">
			<p><i class="iconfont icon-xiazai6 " @click="handelBack()"></i></p>
			<p><span @click="handelPublish()">发布</span></p>
		</div>
		<div class="publish_c">
			<p><input type="text"  v-model="location_page" placeholder="地点"></p>
			<p><!-- <input type="text"  v-model="content_page"> -->
			<textarea type="text"  v-model="content_page" placeholder="分享你的喜悦..."></textarea>
			</p>
		</div>
		<div class="publish_img_list">
			<div class="publish_img">
				<div id="img-wrapper" @click="deleteImg($event)"></div>
				<div class="wrapper">
					<form id="addTextForm" @change="setImg($event)" enctype="multipart/form-data">
					</form>
					<button id="uploadImgBtn" type="button" @click="change_input()">上传照片</button>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import Vuex from "vuex";
import iconfont from "../../../static/iconfont_li/iconfont.css";

import jquery from "../../jquery-1.11.3.js";
import jqueryForm from "../../jquery.form.js";
/* 从 file 域获取 本地图片 url*/
function getFileUrl(obj) {
  let url;
  url = window.URL.createObjectURL(obj.files.item(0));
  return url;
}
export default {
    created(){
        console.log(this.$route.params);
    },
    data() {
        return {
            location_page: "",
            content_page:"",
            imgNum: 3
        }
    },
    methods:{
        handelBack() {
            this.$router.back();
        },
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
            var id = target.id;
            
            $("#img_" + id.replace('file_','')).attr("src", getFileUrl(e.srcElement));
        },
        //点击图片删除该图片并清除相对的input
        deleteImg(e) {
            let target = e.target;
            let inputID = ""; //需要清除value的input
            if (target.nodeName == "IMG") {
                target.src = "";
                inputID = target.id.replace("img_", ""); //获得需要清除value的input
                $("input#file_" + inputID).val("");
            }
            
        },
        //提交信息到后台
        handelPublish(){
            var file_0 = $("#file_0");
            var file_1 = $("#file_1");
            var file_2 = $("#file_2");
            var formdata = new FormData();
            formdata.append("location",this.location_page);
            formdata.append("msg",this.content_page);
            formdata.append("file",file_0[0].files[0]);
            formdata.append("file",file_1[0].files[0]);
            formdata.append("file",file_2[0].files[0]);
            $.ajax({
                type:"post",
                url:"/travel/trip/sendtripdetail",
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
            my_input.attr("id", 'file_' + i); //为创建的input添加id
            $("#addTextForm").append(my_input); //将生成的input追加到指定的form
            //生成img，默认为1
            let my_img = $('<img src="">');
            my_img.attr("id", "img_" + i);
            my_img.css({ "max-width": "50%", "max-height": "200px" }); //添加样式，由于vue的执行机制，页面加载的时候img标签还没有生成，直接写在style样式会不生效
            $("#img-wrapper").append(my_img);
        }
    }
}
</script>

<style scoped>
.myRoutePublish {
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
.publish_top p:nth-child(2) span {
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
.publish_c p:nth-child(2) textarea {
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
/*图片上传*/
.wrapper {
  display: flex;
  justify-content: column;
}
#uploadImgBtn {
  width: 6.75rem;
  height: 1rem;
  background-color: #4d9ee6;
  color: #fff;
  border: 0;
  border-radius: 0.1rem;
  font-size: 0.32rem;
  outline: none;
}
#addTextForm {
  display: none;
}
#img-wrapper {
  width: 6.75rem;
  height: 2.5rem;
  /* background: red; */
  display: flex;
  justify-content: space-around;
}
</style>
