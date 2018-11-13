<template>
    <div class="detalisCenter">
        <div>
            <div class="dcHeader">
                <div class="dcHeader-l">
                    <img src="../../../static/zhang/img_zhang/a731f56490d00cfec3dc83899e76003818cd29c735fd5-81Asb9_fw658.jpg" alt="">
                    <span>安娜</span>
                </div>
                <div class="dcHeader-r">
                    2018-11-11
                </div>
            </div>
            <div class="dcImg">
                <img src="../../../static/zhang/img_zhang/a731f56490d00cfec3dc83899e76003818cd29c735fd5-81Asb9_fw658.jpg" alt="">
            </div>
            <div class="dcText">
                懂得太少，表现太多；才华太少，锋芒太多，很浅薄，一眼就能被看穿. 沉下来，打根基，让别人不会觉得你烦！懂得太少，表现太多；才华太少，锋芒太多，很浅薄，一眼就能被看穿. 沉下来，打根基，让别人不会觉得你烦！
            </div>
            <div class="dcComment">
                <div class="dcComment-l">
                    <p>访友点评</p>
                </div>
                <div class="dcComment-r">
                    <p>全部点评</p>
                </div>
            </div>
        </div>
        <detalisComment></detalisComment>
        <!-- <detalisComment></detalisComment> -->
    </div>
</template>
<script>
import detalisComment from "./detalisComment";
export default {
    components:{
        "detalisComment":detalisComment,
    },
    data(){
        return {
            status:true,
        }
    },

}
</script>
<style scoped>
.detalisCenter{
    width:100%;
    font-family: PingFangSC-Regular;
    font-size: .32rem;
    color: #000000;
}
.detalisCenter>div>.dcHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .2rem;
}
.detalisCenter>div>.dcHeader>.dcHeader-l{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.detalisCenter>div>.dcHeader>.dcHeader-l>img{
    width:1rem;
    height:1rem;
    border-radius: 50%;

}
.detalisCenter>div>.dcHeader>.dcHeader-l>span{
    margin-left: .16rem;
    line-height:.4rem;
    font-size: .28rem;
    color: #000000;
}
.detalisCenter>div>.dcHeader>.dcHeader-r{
    line-height:.4rem;
    font-size: .28rem;
    color: #000000;
}
.detalisCenter>div>.dcImg{
    width:100%;
    height:2.4rem;
    margin:0 .4rem .38rem 0;
}
.detalisCenter>div>.dcImg>img{
    width:3.6rem;
    height:2.4;
    border-radius: .2rem;
}
.detalisCenter>div>.dcText{
    width:100%;
    min-height: .88rem;
    text-indent: 2em; 
    line-height: .44rem; 
    margin-bottom: .82rem;  
}

.detalisCenter>div>.dcComment{
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-family: PingFangSC-Regular;
    
}
.detalisCenter>div>.dcComment>.dcComment-l>p{
    font-size: .36rem;
    color: #000000;

    
}
.detalisCenter>div>.dcComment>.dcComment-r>p{
    font-size: .28rem;
    color: #000000;

}
</style>
