<template>
  <div class="home">
    <div class="black"></div>
      <div class="top">
         <div class="top-content">
           <p class="top-title">智慧金融太空舱数据大屏</p>
           <div class="top-img"><div class="top-img-item"></div></div>
           <div class="top-date"><span style="color:#00D2FF;">2019&nbsp;</span>年<span style="color:#00D2FF;">&nbsp;10</span>&nbsp;月</div>
         </div>
      </div>
       <div class="bottom">
         <div class="left fl">
           <div class="left-top">
             <div class="left-top1 fl"><div class="left-top1-tit"><div class="left-top1-title" style="float:right; border-right: 0.3125rem solid #00d2ff;">当前特征IV值</div></div><div class="bingEchart1"><bingEchart1 /></div></div>
             <div class="left-top2 fl"><div class="people"></div></div>
             <div class="left-top3 fl"><div class="left-top1-tit"><div class="left-top1-title" style="float:left; border-left: 0.3125rem solid #00d2ff;">当前特征WOE值</div></div><div class="bingEchart1"><bingEchart2 /></div></div>
           </div>
           <div class="left-bottom">
             <div  class="left-bottom1"><div  class="left-bottom1-tit">特征IV值分布</div></div>
             <div  class="left-bottom2">
               <zhexianEchart3 />
             </div> 
           </div>
         </div>      
			   <div class="right fl">
            <div class="right-item">
              <div class="right-items">
                  <div class="right-item-tit">历史用户统计</div>
                  <div class="yibiaochart"> 
                    <div class="yibiaochart-item"><yibiaoEchart1 /><p>总特征：1200</p></div>
                    <div class="yibiaochart-item"><yibiaoEchart2 /><p>模型特征：250</p></div>
                    <div class="yibiaochart-item"><yibiaoEchart3 /><p>相似度比对：20</p></div>
                  </div>
              </div>
            </div>
            <div class="right-item"> 
              <div class="right-items">
                  <div class="right-item-tit">当前IV值平均分</div>
                   <div class="yibiaochart"> 
                     <zhexianEchart1 />
                  </div>
              </div>
            </div>
            <div class="right-item">
               <div class="right-items">
                  <div class="right-item-tit">历史IV值平均分</div>
                   <div class="yibiaochart"> 
                     <zhexianEchart2 />
                  </div>
              </div>
            </div>
         </div>     
       </div>
	</div>
</template>

<script>
import echarts from "echarts";
import nxCountUp from "@/components/nx-count-up";
import huanEchart from "@/components/Home/huanEchart"; //环形图组件
import yibiaoEchart1 from "@/components/Home/yibiaoEchart1"; //仪表盘1组件
import yibiaoEchart2 from "@/components/Home/yibiaoEchart2"; //仪表盘2组件
import yibiaoEchart3 from "@/components/Home/yibiaoEchart3"; //仪表盘3组件
import zhexianEchart1 from "@/components/Home/zhexianEchart1"; //折线图1组件
import zhexianEchart2 from "@/components/Home/zhexianEchart2"; //折线图2组件
import zhexianEchart3 from "@/components/Home/zhexianEchart3"; //折线图2组件
import bingEchart1 from "@/components/Home/bingEchart1"; //饼图1组件
import bingEchart2 from "@/components/Home/bingEchart2"; //饼图1组件
export default {
  name: "home",
  components: {
    nxCountUp,
    huanEchart,
    yibiaoEchart1,
    yibiaoEchart2,
    yibiaoEchart3,
    zhexianEchart1,
    zhexianEchart2,
    zhexianEchart3,
    bingEchart1,
    bingEchart2
  },
  data() {
    return {};
  },
  mounted() {
    let bingEchart1 = echarts.init(document.querySelector(".bingEchart1"));
    bingEchart1.setOption(this.option);
    //echart按比例缩放
    window.addEventListener("resize", () => {
      bingEchart1.resize();
    });
  },
  methods: {}
};
</script>

<style scoped>
.fl {
  float: left;
}
.home {
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
}
.black {
  width: 100%;
  height: 3%;
}
.top {
  width: 100%;
  height: 7%;
  color: #ffffff;
  /* border: 1px solid blue; */
  clear: both;
  font-size: 30px;
  position: relative;
}
.top-content {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
}
.top-title {
  width: 100%;
  height: 30%;
  text-align: center;
  color: #00d2ff;
  box-sizing: border-box;
  font-size: 35px;
}
.top-img {
  width: 100%;
  height: 70%;
  float: left;
}
.top-img-item {
  width: 100%;
  height: 100%;
  background: url("../assets/image/logo.png");
  background-size: 100% 100%;
}
.top-date {
  color: #ffffff;
  font-size: 0.875rem;
  float: right;
  right: -6.25rem;
  position: absolute;

  /* font-family: "LESLIE-Regular" !important; */
}
.bottom {
  width: 100%;
  height: 90%;
  max-width: 100%;
  /* border: 1px solid red; */
}
.left {
  width: 60%;
  height: 100%;
  /* background-color: #3887aa; */
}
/* .center {
  width: 33%;
  height: 80%;
  background: url("https://ow.speedbi.cn:7272/uploads/img/08:57:00:f6:b9:fe/7c8ba7d0-ebc6-11e9-8599-fd5d72c7833f.png");
  background-size: 100% 100%;
} */
.right {
  width: 40%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 1.25rem;
}
.right-items {
  width: 95%;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0.625rem 0;
}
.right-item {
  width: 95%;
  height: 29%;
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 1.25rem;
  background: url("../assets/image/kuang.png");
  background-size: 100% 100%;
  /* border: 1px solid #02c1d4; */
}
.right-item:last-child {
  margin-bottom: 0;
}
.right-item-tit {
  border-left: #00d2ff 0.3125rem solid;
  color: #00d2ff;
  padding-left: 0.3125rem;
  font-size: 20px;
}
.yibiaochart {
  width: 100%;
  height: 90%;
}
.yibiaochart-item {
  height: 80%;
  width: 33%;
  float: left;
  position: relative;
}
.yibiaochart-item p {
  color: #00ffff;
  text-align: center;
  font-size: 16px;
  height: 10%;
  width: 100%;
}

/* left css */
.left-top {
  width: 100%;
  height: 70%;
  /* background: #ffffff; */
  box-sizing: border-box;
  /* padding: 1.25rem; */
}
.left-top1 {
  width: 33%;
  height: 100%;
  /* background-color: #01d5e1; */
}
.left-top2 {
  width: 33%;
  height: 100%;
  /* background-color: red; */
}
.left-top3 {
  width: 33%;
  height: 100%;
  /* background-color: #fff; */
}
.people {
  width: 100%;
  height: 100%;
  /* background: url("https://ow.speedbi.cn:7272/uploads/img/08:57:00:f6:b9:fe/7c8ba7d0-ebc6-11e9-8599-fd5d72c7833f.png"); */
  background: url("../assets/image/people.gif");
  /* background: url("../assets/image/people2.png"); */
  background-size: 100% 100%;
}
/* left css end */

/* 饼图 css */
.left-top1-tit {
  width: 100%;
  height: 20%;
}
.left-top1-title {
  color: #00d2ff;
  font-size: 20px;
  padding-right: 0.3125rem;
  padding-left: 0.3125rem;
  box-sizing: border-box;
  margin-top: 2.5rem;
}
.bingEchart1 {
  width: 100%;
  height: 80%;
}
/* 饼图 css */

/* 曲线 css */
.left-bottom {
  width: 90%;
  height: 30%;
  background: url("../assets/image/quxianbg.png");
  background-size: 100% 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 1.25rem;
}
.left-bottom1 {
  width: 100%;
  height: 10%;
  color: #00d2ff;
  font-size: 20px;
  box-sizing: border-box;
}
.left-bottom1-tit {
  border-left: 0.3125rem solid #00d2ff;
  padding-left: 0.3125rem;
}
.left-bottom2 {
  width: 100%;
  height: 88%;
}
/* 曲线 css */
</style>
