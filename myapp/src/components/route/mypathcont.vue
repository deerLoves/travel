<template>
  <div>

    <div class="cont">
      <div class="cont-top">
        <div class="num">
          1
        </div>
        <div class="local">
          <span>北京</span>
          <span>东京</span>
        </div>
        <p class="p1">赏樱赏枫圣地一日游</p>
        <p class="p2">漫步在京都蓝山竹林之中，欣赏山间红叶樱花，重返卧虎藏龙
          取景地，度过静谧放松的一天</p>
      </div>
      <div class="cont-bot" @click="handleGo()">
        <div class="box-img">
          <img src="../../../static/img-chen/myvisitor.png"/>
        </div>
        <div class="box-txt">
          <p>东京的樱花很美丽，这一直都是我想要去的地方，这一直都是我想要去的地方</p>
          <div class="txt-bot">
            <span>❤</span><span>1999</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cont">
      <div class="cont-top">
        <div class="num">
          1
        </div>
        <div class="local">
          <span>北京</span>
          <span>东京</span>
        </div>
        <p class="p1">赏樱赏枫圣地一日游</p>
        <p class="p2">漫步在京都蓝山竹林之中，欣赏山间红叶樱花，重返卧虎藏龙
          取景地，度过静谧放松的一天</p>
      </div>
      <div class="cont-bot">
        <div class="box-img">
          <img src="../../../static/img-chen/myvisitor.png"/>
        </div>
        <div class="box-txt">
          <p>东京的樱花很美丽，这一直都是我想要去的地方，这一直都是我想要去的地方</p>
          <div class="txt-bot">
            <span>❤</span><span>1999</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
    export default{
        data(){
         return{

         }
        },
        methods:{
          handleGo(){
              this.$router.push('/mypathnow')
          }
        }
    }
</script>


<style scoped>
  .cont{
    margin-bottom: 10%;
  }
.cont-top{
  margin-top: 2%;
  text-align: center;
}
.cont-top .num{
  width: .96rem;
  height: .96rem;
  background: #5699D3;
  text-align: center;
  line-height: .96rem;
  font-size: 48px;
  color: #fff;
  border-radius: 50%;
  margin: 2% auto;
}
.cont-top .local{
  width: 2.2rem;
  margin: 0 auto 5%;
  display: flex;
  justify-content: space-between;
}
.cont-top .local span{
  font-size: 28px;
  color: #666;
  font-family: PingFangTC-Light;
}
  .cont-top .p1{
    font-size: 28px;
    color: #666666;
    font-family: PingFangSC-Medium;
    font-weight: bold;
  }
  .cont-top .p2{
    font-size: 24px;
    font-family: PingFangSC-Regular;
    color: #666;
    margin: 3% auto 5%;
  }
  .box-txt{
    font-family: PingFangSC-Regular;
    box-shadow: 0 16px 32px 8px rgba(0,0,0,0.07);
    border-radius:0 0 10px 10px;
  }
  .box-txt p{
    padding-top: 3%;
    font-size: 28px;
    color: #333;
    margin-bottom:5%;
    font-family: PingFangTC-Light;
  }
  .txt-bot{
    height: .8rem;
    text-align: right;
    color: #ccc;

  }
  .txt-bot span:first-of-type{
    margin-right: 10px;
  }
</style>
