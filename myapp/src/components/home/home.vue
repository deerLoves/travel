<template>
    <div class="page home">
        <div id="search">
            <div class="searchspot">
                <i class="iconfont icon-magnifier"></i><p>搜“热门地点”试试</p>
            </div>
            <div class="searchaddress">
                <p @click="handlecity(obj.address)">北京</p><i class="iconfont icon-ico_arrows_unfold"></i>
            </div>
        </div>
        <div id="find">
            <h2>发现行漫</h2>
            <div class="banner">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in find"><img :src="find[index].photo"></div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
        <div id="hotspot">
            <h2>热门景点</h2>
            <div class="banner">
                <dl v-for="(item,index) in hotspot">
                    <dt><img :src="hotspot[index].photo"></dt>
                    <dd><p><span>【{{hotspot[index].name}}】</span>{{hotspot[index].ftitle}}</p></dd>
                    <dd><p>{{hotspot[index].stitle}}</p></dd>
                </dl>
            </div>

            <div class="more"><p>查看更多热门景点</p></div>
        </div>
        <div id="hottrip">
            <h2>热门行程</h2>
            <div class="banner">
                <dl v-for="(item,index) in obj">
                    <dt><img :src="obj[index].photo"></dt>
                    <dd><p><span>【{{obj[index].name}}】</span>{{obj[index].ftitle}}</p></dd>
                    <dd><p>{{obj[index].stitle}}</p></dd>
                </dl>
            </div>
        </div>
        <div id="hotstory">
            <h2>热门故事</h2>
            <h3>一些游客自己的亲身体验</h3>
            <div class="banner">
                <dl v-for="(item,index) in hotstory">
                    <dt><img :src="hotstory[index].photo"></dt>
                    <dd>{{hotstory[index].ftitle}}</dd>
                    <dd>{{hotstory[index].stitle}}</dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
export default {
  created() {
    axios({
      method: "get",
      url: "../../../static/bai/josn.json"
    }).then(data => {
        (this.obj = data.data.data),
        (this.hotspot = data.data.hotspot),
        (this.hotstory = data.data.hotstory),
        (this.find = data.data.find);
    });
  },
  data() {
    return {
      obj: [],
      hotspot: [],
      hotstory: [],
      find: []
    };
  },
  updated() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        loop: true, // 循环模式选项
        autoplay: {
          disableOnInteraction: false
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination"
        }
      });
    });
  },
  methods: {
    handlecity(address) {
      this.$router.push("/place");
    }
  }
};
</script>

<style scoped>
.home {
  overflow: scroll;
}
#search {
  display: flex;
  padding: 0.2rem 0 0.64rem 0.32rem;
}
#search > .searchspot {
  width: 5.72rem;
  height: 0.68rem;
  opacity: 0.5;
  background: rgba(255, 255, 255, 0.09);
  box-shadow: 0 0.02rem 0.02rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.1rem;
  padding-left: 0.16rem;
  font-family: PingFangSC-Regular;
  font-size: 28px;
  color: #030303;
  letter-spacing: -0.003rem;
  line-height: 0.68rem;
  display: flex;
}
#search > .searchspot > i {
  font-size: 28px;
  margin-right: 0.16rem;
}

#search > .searchaddress {
  font-size: 28px;
  line-height: 0.68rem;
  padding-left: 0.14rem;
  display: flex;
}
#search > .searchaddress > i {
  font-size: 0.28rem;
  margin-left: 0.02rem;
}
#find > h2,
#hotspot > h2,
#hottrip > h2,
#hotstory > h2 {
  font-family: PingFangSC-Regular;
  font-size: 52px;
  color: #030303;
  letter-spacing: -0.003rem;
  line-height: 0.54rem;
  padding-left: 0.32rem;
}
#find > .banner {
  height: 4.72rem;
  padding: 0.54rem 0 0.78rem;
  display: flex;
  align-items: center;
  overflow: hidden;
}
#find > .banner > .swiper-container > .swiper-wrapper > .swiper-slide > img {
  border-radius: 0.2rem;
  width: 100%;
  height: 3.4rem;
}
#hotspot > .banner,
#hottrip > .banner {
  display: flex;
  overflow: scroll;
  padding: 0.48rem 0 0.36rem;
}
#hotspot > .banner > dl,
#hottrip > .banner > dl {
  padding: 0 0 0.1rem 0.32rem;
}
#hotspot > .banner > dl > dt > img,
#hottrip > .banner > dl > dt > img {
  width: 4.02rem;
  height: 2.04rem;
  border-radius: 0.2rem 0.2rem 0 0;
}
#hotspot > .banner > dl > dd:nth-of-type(1) > p,
#hottrip > .banner > dl > dd:nth-of-type(1) > p {
  width: 3.78rem;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #030303;
  line-height: 0.4rem;
  letter-spacing: -0.0036rem;
}
#hotspot > .banner > dl > dd:nth-of-type(1),
#hottrip > .banner > dl > dd:nth-of-type(1) {
  height: 0.8rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
#hotspot > .banner > dl > dd:nth-of-type(1) > p > span,
#hottrip > .banner > dl > dd:nth-of-type(1) > p > span {
  color: #c90000;
}
#hotspot > .banner > dl > dd:nth-of-type(2) > p,
#hottrip > .banner > dl > dd:nth-of-type(2) > p {
  font-family: PingFangSC-Regular;
  font-size: 36px;
  color: #d94a4a;
  letter-spacing: -0.0038rem;
  line-height: 0.5rem;
  padding-top: 0.32rem;
}
#hotspot > .more {
  padding-left: 0.32rem;
}
#hotspot > .more > p {
  width: 2.8rem;
  height: 0.88rem;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #4d9ee6;
  letter-spacing: -0.003rem;
  border: 0.02rem solid #4d9ee6;
  line-height: 0.88rem;
  text-align: center;
}
#hottrip {
  padding: 0.74rem 0 0.64rem;
}
#hotstory > h3 {
  opacity: 0.5;
  font-family: PingFangSC-Regular;
  font-size: 32px;
  color: #030303;
  letter-spacing: -0.003rem;
  line-height: 0.38rem;
  padding: 0.12rem 0 0.24rem 0.32rem;
}
#hotstory > .banner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.22rem 0.32rem 0;
}
#hotstory > .banner > dl {
  width: 3rem;
  height: 3.4rem;
  background: #ffffff;
  box-shadow: 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.2rem;
  margin-bottom: 0.28rem;
}
#hotstory > .banner > dl > dt > img {
  width: 3rem;
  height: 1.92rem;
  border-radius: 0.2rem 0.2rem 0 0;
}
#hotstory > .banner > dl > dd:nth-of-type(1) {
  width: 2.5rem;
  line-height: 0.4rem;
  font-family: PingFangSC-Medium;
  font-size: 28px;
  color: #d94a4a;
  letter-spacing: -0.0036rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#hotstory > .banner > dl > dd:nth-of-type(2) {
  width: 2.8rem;
  font-family: PingFangSC-Regular;
  font-size: 24px;
  color: #030303;
  letter-spacing: -0.003rem;
}
.swiper-container {
  width: 5rem;
  height: 3.4rem;
  overflow: visible;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 5rem;
}
.swiper-container .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 320px;
  border-radius: 20px;
}
.swiper-container .swiper-wrapper .swiper-slide-prev {
  height: 3.4rem;
}
.swiper-container .swiper-wrapper .swiper-slide-prev img {
  height: 3.4rem;
}
.swiper-container .swiper-wrapper .swiper-slide-next {
  height: 3.4rem;
}
.swiper-container .swiper-wrapper .swiper-slide-next img {
  height: 3.4rem;
}
.swiper-container .swiper-wrapper .swiper-slide-active {
  width: 5rem;
}
</style>
