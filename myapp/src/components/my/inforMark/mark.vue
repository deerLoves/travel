<template>
	<div id="mark_show">
    <div class="mark conent" @click="handleClearBox()" v-show="mark_show"></div>
    <div class="headPortrait" v-show="img_show">
      <p>选择头像</p>
      <input type="file" @change="setImg($event)" id="headImg">
    </div>
    <div class="nickName" v-show="nickName_show">
      <p>请输入您的昵称</p>
      <p><input type="text" @change="handleNicknameChange()" v-model="nicknameEdit"></p>
    </div>
    <div class="sex" v-show="sex_show">
      <p @click="handleSexChange_boy()">男</p>
      <p @click="handleSexChange_girl()">女</p>
    </div>
  </div>
</template>

<script>
import jquery from "../../../jquery-1.11.3.js";

/* 从 file 域获取 本地图片 url*/
function getFileUrl(obj) {
  let url;
  url = window.URL.createObjectURL(obj.files.item(0));
  return url;
}
export default {
    created() {
      this.observer.$on("handleImgMark",(flag)=>{
        this.mark_show = flag;
        this.img_show = flag;
        if(flag){
          this.flag = 1;
        }else{
          this.flag = 0;
        }
      });
      this.observer.$on("handleNickMark",(flag)=>{
        this.mark_show = flag;
        this.nickName_show = flag;
        if(flag){
          this.flag = 2;
        }else{
          this.flag = 0;
        }
      });
      this.observer.$on("handleSexMark",(flag)=>{
        this.mark_show = flag;
        this.sex_show = flag;
        if(flag){
          this.flag = 3;
        }else{
          this.flag = 0;
        }
      });
    },
   
    data() {
      return {
        mark_show:false,
        img_show:false,
        nickName_show:false,
        sex_show:false,
        birthday_show:false,
        flag:0,

        nicknameEdit:'',
      };
    },
    methods:{
      handleClearBox(){
        if(this.flag == 1){
          this.observer.$emit("handleImgMark",false)
        }else if(this.flag == 2){
          this.observer.$emit("handleNickMark",false)
        }else if(this.flag == 3){
          this.observer.$emit("handleSexMark",false)
        }
      },
      handleNicknameChange(){
        this.$emit('handleSetNikename',this.nicknameEdit);
      },
      handleSexChange_boy(){
        this.observer.$emit("handleSexMark",false)
        this.$emit('handleSetSex',0);
      },
      handleSexChange_girl(){
        this.observer.$emit("handleSexMark",false)
        this.$emit('handleSetSex',1);
      },
      //当input选择了图片的时候触发,将获得的src赋值到相对应的img
      setImg(e) {
         var imgSrc = getFileUrl(e.srcElement);
         var file_data = $('#headImg')[0].files[0];
         this.observer.$emit("handleImgMark",false)
         this.$emit('handleSetHeadImg',{imgSrc:imgSrc,file_data:file_data});
      },
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
/*头像*/
.headPortrait {
  width: 6.86rem;
  height: 1.6rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 0.1rem;
  z-index: 1;
}
.headPortrait>p {
  text-align: center;
  font-size: 0.48rem;
  font-family: fantasyPingFangSC-Regula;
  color: #030303;
}
.headPortrait>input{
  width: 6.86rem;
  height: 1.6rem;
  position: absolute;
  top:0;
  opacity: 0;
  outline: none;
}
/*昵称*/
.nickName{
  width:6.86rem;
  height:3.2rem;
  background:#FFFFFF ;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: .1rem;
  z-index: 1;
}
.nickName>p{
  text-align:center;
  font-size:.48rem;
  font-family: fantasyPingFangSC-Regula;
  color:#030303 ;
}
.nickName>p>input{
  outline: none;
  border:none;
  font-size:.36rem;
  border-bottom: 1px solid #000; 
}
/*性别*/
.sex{
  width:6.86rem;
  height:3.2rem;
  background:#FFFFFF ;
	display: flex;
	flex-direction: column;
  justify-content:space-around;
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	border-radius: .1rem;
	z-index: 1;
}
.sex>p{
  text-align:center;
  font-size:.48rem;
  font-family: fantasyPingFangSC-Regula;
  color:#7C7C7C  ;
}
/* 生日 */
.birthday{
  width: 6.86rem;
  height: 1.6rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 0.1rem;
  z-index: 1;
}
.birthday>p {
  text-align: center;
  font-size: 0.48rem;
  font-family: fantasyPingFangSC-Regula;
  color: #030303;
}
</style>
