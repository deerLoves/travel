<template>
    <div class="attractions">
          <div class="pic">
              <img src="../../../static/img/c.png">
               <i class="iconfont icon-guanbi btn"></i>
          </div>
          <div class="conent">
              <div class="city">格丹斯克</div>
              <div class="con-c">
                         这行最多20个字 这行最多20个字这行最多
                        TO 11,000 TONS 波兰商港。位于该国北部
                        海里，距哥本哈根270海里，距基尔343海
                        池码头，又分北部和南部。北部有西岸的（
                        港池沿岸码头线总长1190米，允许最大吃水
                        于杂货装卸；东岸的威斯特尔普拉特港池沿
                        1442米，最大吃水10.3米，用于木材。南部
                        年纪念码头，总长1076米，最大吃水10米，
                        约8500多米。海港即北港，位于维斯杜拉河
                        东沿海，为原油、煤炭港区，建于60－70年
                        10万吨级油轮；煤炭突堤在其南，为直臂式，       
              </div>
          </div>
          <div class="bottom">
              <h4>游客评论</h4>
              <div class="tour">
                  <img src="../../../static/img/a.png">
                 <div class="msg">
                     <p>小姐姐</p>
                     <p>2018-11-7</p>
                 </div>
              </div>
              <div class="discuss">
                          这行最多20个字 这行最多20个字这行最多
                            TO 11,000 TONS 波兰商港。位于该国北部
                            海里，距哥本哈根270海里，距基尔343海
                            池码头，又分北部和南部。北部有西岸的（
                            港池沿岸码头线总长1190米，允许最大吃水
                            于杂货装卸；东岸的威斯特尔普拉特港池沿
                       
                     </div>
          </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.attractions {
  overflow: hidden;
}
/* .pic {
  width: 100%;
  height: 7.8rem;
  background: blueviolet;
} */
.pic>img{
     width: 100%;
     height: 7.8rem;
}
.btn {
  font-size: 0.44rem;
  position: fixed;
  left: 0.32rem;
  top: 0.4rem;
  color: #ffffff;
}
.conent {
  width: 100%;
  height: 9.36rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.2rem;
  border-bottom: 1px solid #979797;
}
.conent > .city{
  font-family: PingFangSC-Regular;
  font-size: 0.72rem;
  color: #010101;
  letter-spacing: 0;
  margin:0.64rem 0 0  0.32rem;
  font-weight: normal;
  width: 100%;
  height: 1rem;
  background: #ffffff;
  line-height: 1rem;
}
.conent > .con-c {
  width:100%;
  height: 5.76rem;
  padding: 0 0.32rem;
  font-family: PingFangSC-Regular;
  font-size: 0.36rem;
  color: #010101;
  letter-spacing: 0;
  line-height: 0.48rem;
  margin-top:0.34rem;
  /* border-bottom: 1px solid #979797; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:12;
  overflow: hidden;
}
.bottom {
  width: 100%;
  height: 6.6rem;
  background: #fff;
  margin-left: 0.32rem;
}
.bottom > h4 {
  font-size: 0.48rem;
  color: #000000;
  line-height: 0.48rem;
  padding: 0.48rem 0;
}
.bottom > .tour {
  width: 100%;
  height: 1rem;
  display: flex;
  margin-bottom: 0.34rem;
}
.bottom > .tour > img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin-right: 0.28rem;
}
.msg {
  display: flex;
  flex-direction: column;
  font-family: PingFangSC-Medium;
  font-size: 0.36rem;
  color: #000000;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp:6;
  overflow: hidden;
 
}
.discuss {
  width: 6.3rem;
  height: 2.5rem;
  font-size: 0.32rem;
  color: #000000;
}
</style>


