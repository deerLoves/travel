<template>
   <div class="page home">
        <div class="personheader">
           <router-link :to="{name:'my'}" class="rl_header" v-show="true">
                <h3 class="back">&lt;</h3>
            </router-link>
            <span @click="editPersonInfoBtn()">编辑</span>
        </div>
        <p class="personInfo_p">个人资料</p>
        <ul class="list">
            <li>
                <span @click="handleImg()">头像</span>
                <img :src="headimg" alt="">
            </li>
            <li>
                <span @click="handleNick()">昵称</span>
                <span>{{nickname}}</span>
            </li>
            <li>
                <span @click="handleSex()">性别</span>
                <span>{{six == 0?'男':'女'}}</span>
            </li>
            <li>
                <span id="birthdayShowBtn">生日</span>
                <!-- <span>{{birthday}}</span> -->
                <input type="text" id="dateSelectorOne" v-show="true" v-model="birthday" disabled>
            </li>
            <li>
                <span id="areaShowBtn">所在地</span>
                <!-- <span>{{address}}</span> -->
                <input type="text" id="dateSelectorTwo" v-show="true" v-model="address" disabled>
            </li>
        </ul>
        <button class="savePersonInfo" @click="editPersonInfo(id)" v-show="editShow">保 存</button>
        
        <mark-com 
            @handleSetNikename="handleSetNikename" 
            @handleSetSex='handleSetSex' 
            @handleSetHeadImg="handleSetHeadImg"
        v-show="editShow"></mark-com>
    </div>
</template>
<script>
import "../../../static/icon-liu/iconfont.css";
import mark from "@/components/my/inforMark/mark";
import age from "@/components/my/inforMark/age.vue";
import birthday from "@/components/my/inforMark/birthday.vue";
import Vuex from 'vuex';

import { MessageBox } from "mint-ui";

import jquery from "../../jquery-1.11.3.js";
import jqueryForm from "../../jquery.form.js";
export default {
    created(){
        this.id = this.personInfo.id;
        this.headimg = this.personInfo.headimg;
        this.nickname = this.personInfo.nickname;
        this.six = this.personInfo.six;
        this.birthday = this.personInfo.birthday;
        //this.birthday = '1852.12.01';
        this.address = this.personInfo.address;
    },
    mounted(){
       //日期选择器
      new Mdate("birthdayShowBtn", {
          //"dateShowBtn"为你点击触发Mdate的id，必填项
          acceptId: "dateSelectorOne",
          //此项为你要显示选择后的日期的input，不填写默认为上一行的"dateShowBtn"
          beginYear: "1970",
          //此项为Mdate的初始年份，不填写默认为2000
          beginMonth: "1",
          //此项为Mdate的初始月份，不填写默认为1
          beginDay: "1",
          //此项为Mdate的初始日期，不填写默认为1
          endYear: "2018",
          //此项为Mdate的结束年份，不填写默认为当年
          endMonth: "12",
          //此项为Mdate的结束月份，不填写默认为当月
          endDay: "31",
          //此项为Mdate的结束日期，不填写默认为当天
          format: "-"
          //此项为Mdate需要显示的格式，可填写"/"或"-"或".",不填写默认为年月日
      })
      //省市县三级联动
       new Marea("areaShowBtn", {
            acceptId: "dateSelectorTwo",
        })
    },
    data(){
        return{
            id:0,
            headimg:'',
            nickname:'1',
            six:0,
            birthday:'',
            address:'',
            editShow:false,
            file_change_data:{},
        }
    },
    computed:{
        ...Vuex.mapState({
            personInfo:state=>state.login.personInfo
        })
    },
    methods:{
        ...Vuex.mapActions({
            show_handleGetPersonInfo:"login/show_handleGetPersonInfo"
        }),
        handleImg(){
            this.observer.$emit("handleImgMark",true)
        },
        handleNick(){
            this.observer.$emit("handleNickMark",true)
        },
        handleSex(){
            this.observer.$emit("handleSexMark",true)
        },
        handleSetNikename(val){
            this.nickname = val;
        },
        handleSetSex(val){
            this.six = val;
        },
        handleSetHeadImg(obj){
            this.headimg = obj.imgSrc;
            this.file_change_data = obj.file_data;
        },
        editPersonInfoBtn(){
            this.editShow = true;
        },
        editPersonInfo(id){
            var that = this;
            console.log(id);
            this.birthday = $('#dateSelectorOne').val();
            this.address = $('#dateSelectorTwo').val();
            // console.log(this.nickname);
            var formdata = new FormData();
            formdata.append("file",this.file_change_data);
            formdata.append('nickname',this.nickname);
            formdata.append('sex',this.six);
            //formdata.append('phone',this.personInfo.phone);
            formdata.append('address',this.address);
            console.log(formdata);
            $.ajax({
                type:"post",
                url:"/travel/my/info2",
                data:formdata,
                dataType:"json",
                cache: false,//不适用缓存中的结果
                processData: false,//传输的数据，不被jquery封装
                contentType: false,//数据编码格式不使用jquery的方式
                success:function(data){
                    console.log(data);
                    if(data.code==1){
                        that.show_handleGetPersonInfo({username:'15536512326',password:'123456'});
                        let flag = MessageBox({
                            title: '温馨提示',
                            message: '修改成功！',
                            showCancelButton: true
                        }).then((res)=>{
                            if(res == 'confirm'){
                                that.editShow = false;
                            }
                        });
                    }else{
                        let flag = MessageBox({
                            title: '温馨提示',
                            message: '修改失败！',
                            showCancelButton: true
                        }).then((res)=>{
                            console.log(res)
                        });
                    }
                }
            })
            
        }
    },
    components:{
		"mark-com": mark
	},

}
</script>
<style scoped>
.page {
  padding-top: 0.4rem;
  padding-bottom: 0.96rem;
}
.home {
  height: 100%;
  position: fixed;
  z-index: 1;
  background: #fff;
}
.personheader{
    display:flex;
    justify-content: space-between;
}

.personheader .back {
  line-height: 0.88rem;
  font-size: 0.4rem;
  margin-left: 0.32rem;
  margin-bottom: 0.24rem;
}
.personheader>span:nth-of-type(1){
    line-height: 0.68rem;
    margin-right: 0.32rem;
    font-family: PingFangSC-Regular;
    font-size: .32rem;
    border:1px solid #4d9ee6;
    padding:0 .2rem;
    height: .68rem;
    border-radius: .2rem;
    background: #4d9ee6;
    color: #fff;
    margin-top: .2rem;
}
.personInfo_p {
  margin-left: 0.32rem;
  font-size: 0.48rem;
  line-height: 0.48rem;
  color: #030303;
  font-family: PingFangSC-Regular;
}
.list {
  width: 6.75rem;
  height: 8.82rem;
  margin-left: 0.32rem;
  margin-right: 0.32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 0.36rem;
  font-family: PingFangSC-Regular;
}
.list li{
    display: flex;
    justify-content: space-between;
}
.list li>span:nth-of-type(1) {
  color: #030303;
  width: 30%;
  display: block;
  height: 0.8rem;
  line-height: 0.8rem;
}
.list li:nth-child(1) img {
  width: 0.8rem;
  height: 0.8rem;
  background: pink;
  border-radius: 0.4rem;
}
.list li>span:nth-of-type(2){
    margin-right: 0.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
}
#dateSelectorOne{
    width: 1.86rem;
    font-size: .36rem;
    border: 0;
    background: #fff;
}
#dateSelectorTwo{
    width: 7.4rem;
    font-size: .36rem;
    border: 0;
    background: #fff;
    text-align: right;
}
.save {
  margin-left: 0.32rem;
  width: 6.86rem;
  height: 1rem;
  border-radius: 0.5rem;
  border: 2px solid #4d9ee6;
  font-size: 0.36rem;
  color: #4d9ee6;
  background: white;
}
.savePersonInfo{
    width: 6.86rem;
    height: 1rem;
    background: #4d9ee6;
    border:0;
    outline: none;
    color: #fff;
    font-size: .32rem;
    border-radius: .5rem;
    margin:0 auto;
    display: block
}
</style>
