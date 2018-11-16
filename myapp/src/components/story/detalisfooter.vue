<template>
    <div class="commentBox">
        <div class="box">
            <input type="text" placeholder="评论">
            <div class="box-r">
                <i class="iconfont icon-pinglun" v-show="!status"></i>
                <i class="iconfont icon-aixin like" v-show="status" @click="changeDislike(status)"></i>
                <i class="iconfont icon-aixin1 like" v-show="!status"  @click="changeLike(status)"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            status:true,
        }
    },
    methods:{
        changeLike(like){
            this.status = true;
        },
        changeDislike(like){
            this.status = false;
        }
    }
}
</script>

<style>
.commentBox{
    width:100%;
    height:.98rem;
    background:pink;
    position:fixed;
    bottom:0;
    left:0;
}
.commentBox>.box{
    width:100%;
    height:100%;
}
.commentBox>.box>.box-r{
    display: flex;
    justify-content: space-between;

}
.commentBox>.box>.box-r>i{
    font-size: .48rem;
}
.commentBox>.box>.box-r>.like{
    margin-left: .5rem;
}
.commentBox>.box>.box-r>i:nth-of-type(3){
    color: #ff3300;
}
</style>
