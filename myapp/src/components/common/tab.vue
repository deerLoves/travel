<template>
    <div class="tab">
        <ul>
            <li v-for="(item,index) in navs" @click="handleClick(index)">
                <router-link :to="{name:item.name}" class="rl" v-show="true">
                    <i></i>{{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navs : [
                {
                    name:"home",
                    title:"首页"
                },
                {
                    name:"story",
                    title:"故事"
                },
                {
                    name:"route",
                    title:"行程"
                },
                {
                    name:"my",
                    title:"我的"
                }
            ]
        }
    },
    methods:{
        handleClick(index){
            
        }
    }
}
</script>

<style scoped>
    .tab{
        width: 100%;
        height: .96rem;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #FFFFFF;
    }
    .tab>ul{
        display: flex;
        width: 100%;
        height: .96rem;
        justify-content: space-around
    }
    .tab>ul>li{
         /* border:1px solid #000; */
         padding-top: 0.1rem;
    }
    .tab>ul>li>.rl>i{
        width: .48rem;
        height: .48rem;
        display: block;
    }
    .tab>ul>li:nth-of-type(1)>.rl>i{
        background:url("../../../static/icons/home-normal.svg") no-repeat;
    }
    .tab>ul>li:nth-of-type(2)>.rl>i{
        background:url("../../../static/icons/story-normal.svg") no-repeat;
    }
    .tab>ul>li:nth-of-type(3)>.rl>i{
        background:url("../../../static/icons/travel-normal.svg") no-repeat;
    }
    .tab>ul>li:nth-of-type(4)>.rl>i{
        background:url("../../../static/icons/my-normal.svg") no-repeat .025rem;
    }
    .tab>ul>li{
        font-size: .2rem;
        text-align: center
    }
</style>
