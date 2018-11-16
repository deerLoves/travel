<template>
    <div class="commentBox">
        <div class="box">
            <input type="text" placeholder="参与评论">
            <div class="box-r">
                <i class="iconfont icon-pinglun" v-show="message"></i>
                <i class="iconfont icon-aixin like" v-show="status" @click="changeDislike(status)"></i>
                <i class="iconfont icon-aixin1 like" v-show="!status"  @click="changeLike(status)"></i>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "Vuex";
import axios from "axios";
export default {
    data(){
        return {
            status:true,
            message:true,
        }
    },
    computed:{
        // ...Vuex.
    },
    methods:{
        changeLike(like){
            this.status = true;
        },
        changeDislike(like){
            this.status = false;
        },
        
    }
}
</script>

<style>
.commentBox{
    width:100%;
    height:.98rem;
    background:#F1F1F1;
    position:fixed;
    bottom:0;
    left:0;
    
}
.commentBox>.box{
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.commentBox>.box>input{
    width:4rem;
    height:.6rem;
    margin-left:.32rem;
    font-size:.38rem;
    border:0;
    outline: none;
}
.commentBox>.box>.box-r{
    display: flex;
    justify-content: space-between;

}
.commentBox>.box>.box-r>i{
    font-size: .48rem;
}
.commentBox>.box>.box-r>.like{
    margin-left: .4rem;
    margin-right: .8rem;
}
.commentBox>.box>.box-r>i:nth-of-type(3){
    color: #ff3300;
}
</style>
