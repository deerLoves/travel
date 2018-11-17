<template>
   <div class="page home">
        <router-link :to="{name:'my'}" class="" v-show="true">
            <h3 class="back">&lt;</h3>
        </router-link>
        <p>个人资料</p>
        <ul class="list">
            <li>
                <a href="#" @click="handleImg()">头像</a>
                <img :src="personInfo.headimg" alt="">
            </li>
            <li>
                <a href="#" @click="handleNick()">昵称</a>
                <span>{{personInfo.nickname}}</span>
            </li>
            <li>
                <a href="#" @click="handleSex()">性别</a>
                <span>{{personInfo.six == 0?'男':'女'}}</span>
            </li>
            <li>
                <a href="#" @click="handleNick()">生日</a>
                <span>{{personInfo.birthday}}</span>
            </li>
            <li>
                <a href="#" @click="handleSex()">所在地</a>
                <span>{{personInfo.address}}</span>
            </li>
            <!-- <li v-for="(item,index) in navs" >
                   <a href="">{{item.title}}<i>{{item.placeholder}}</i></a>               
            </li> -->
        </ul>
        
        <mark-com></mark-com>
        <headPortrait-com></headPortrait-com>
        <sex-com></sex-com>
        <nickName-com></nickName-com>


    
    </div>
</template>
<script>
import "../../../static/icon-liu/iconfont.css";
import mark from "@/components/my/inforMark/mark";
import age from "@/components/my/inforMark/age.vue";
import birthday from "@/components/my/inforMark/birthday.vue";
import headPortrait from "@/components/my/inforMark/headPortrait";
import location from "@/components/my/inforMark/location";
import nickName from "@/components/my/inforMark/nickName";
import sex from "@/components/my/inforMark/sex";
import Vuex from 'vuex';
export default {
    data(){
        return{

        }
    },
    computed:{
        ...Vuex.mapState({
            personInfo:state=>state.login.personInfo
        })
    },
    methods:{
        handleImg(){
			this.observer.$emit("handleImg",true)
       
        },
        handleSex(){
            this.observer.$emit("handleSex",true)
        },
    
        handleNick(){
            this.observer.$emit("handleNick",true)
        }
    },
    
    
    components:{
			"mark-com": mark,
			"headPortrait-com": headPortrait,
            "nickName-com": nickName,
            "sex-com":sex,
            // "location-com":location,
            // "age-com":age,
            // "birthday-com":birthday
            
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
.back {
  line-height: 0.88rem;
  font-size: 0.4rem;
  margin-left: 0.32rem;
  margin-bottom: 0.24rem;
}
p {
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
.list a {
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
.list li span{
    margin-right: 0.2rem;
    height: 0.8rem;
    line-height: 0.8rem;
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
</style>
