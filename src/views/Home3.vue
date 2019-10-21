<template>
  <div class="home">
    <div class="black"></div>
      <div class="top">
         <div class="top-content">
           <p class="top-title">智慧金融太空舱数据大屏</p>
           <div class="top-img"><div class="top-img-item"></div></div>
           <div class="top-date" style="font-family:'楷体'"><span style="color:#00D2FF;">2019&nbsp;</span>年<span style="color:#00D2FF;">&nbsp;11</span>&nbsp;月</div>
         </div>
      </div>
       <div class="bottom">
         <!-- 左边 -->
         <div class="left fl">
           <div class="left-top">
              <div class="left-top1">
                 <div class="count">
                    <p>浙江借款平均分</p>
                    <div class="center-top-item-img">
                     <!-- <p><nx-count-up :start="1" :end="28747"/></p> -->
                       <p class="count-css"><span>0</span><span>1</span><span>0</span><span>2</span>
                      <ul class="list">
                        <li class="one">0</li>
                        <li class="two">1</li>
                        <li class="three">6</li>
                        <li class="four">4</li>
                        <li class="one">8</li>
                        <li class="two">7</li>
                        <li class="three">5</li>
                        <li class="four">7</li>
                         <li class="four">8</li>
                        <li class="four">9</li>
                        </ul>
                     </p>
                     </div>
                  </div>
                 <div class="count">
                    <p>浙江上月借款人数平均分</p>
                    <div class="center-top-item-img">
                     <!-- <p><nx-count-up :start="1" :end="12541"/></p> -->
                         <p class="count-css"><span>0</span><span>0</span><span>8</span><span>5</span>
                       <ul class="list">
                        <li class="one">0</li>
                        <li class="two">3</li>
                        <li class="three">8</li>
                        <li class="four">6</li>
                        <li class="one">5</li>
                        <li class="two">1</li>
                        <li class="three">4</li>
                        <li class="four">7</li>
                         <li class="four">3</li>
                        <li class="four">4</li>
                        </ul>
                      </p>
                     </div>
                 </div>
                  <div class="count">
                     <p>浙江历史记录借款人平均分</p>
                    <div class="center-top-item-img">
                     <!-- <p><nx-count-up :start="1" :end="1023"/></p> -->
                     <p class="count-css"><span>0</span><span>0</span><span>3</span><span>6</span>
                       <ul class="list">
                        <li class="one">0</li>
                        <li class="two">2</li>
                        <li class="three">7</li>
                        <li class="four">4</li>
                        <li class="one">8</li>
                        <li class="two">5</li>
                        <li class="three">3</li>
                        <li class="four">7</li>
                         <li class="four">5</li>
                        <li class="four">4</li>
                        </ul>
                      </p>
                     </div>
                  </div>
              </div>
              <div class="left-top2">
                <mapEchart />
              </div>
           </div>
            <div class="left-bottom">
              <div class="right-item-tit" >昨日样本分布</div>
                 <div class="yibiaochart" style="width:100%;height:90%;display:flex;align-items: center;"> 
                    <div class="shuiuibochart-item1">
                       <p style="text-align:center">ROC面积<br/>0.802</p> 
                        <!-- <div class="wave" style="background-color:rgba(51,174,201, 0.8);">
                          <p style="text-align:center">ROC面积<br/>0.802</p> 
                        </div> -->
                        <!-- <p class="wave-text">历史阈值平均数</p> -->
                    </div>
                    <div class="shuiuibochart-item2" style="border:3px #1DC5CF solid;">
                        <p style="text-align:center">阈值<br/>1558.14</p> 
                       <!-- <div class="wave2" style="background-color:rgba(53,205,215, 0.8);">
                          <p style="text-align:center">阈值<br/>1558.14</p> 
                       </div> -->
                        <!-- <p class="wave-text">历史ROC面积平均数</p> -->
                    </div>
                    <div class="shuiuibochart-item3" style="border:3px #0182D3 solid;">
                       <p style="text-align:center">历史<br/>31.29</p> 
                       <!-- <div class="wave3" style="background-color:rgba(48,145,205, 0.8);">
                          <p style="text-align:center">历史<br/>31.29</p> 
                       </div> -->
                        <!-- <p class="wave-text">历史平均平均数</p> -->
                    </div>
                  </div>
            </div>
         </div>   
         <!-- 右边 -->
			   <div class="right fl">
            <div class="right-item">
              <div class="right-items">
                  <div class="right-item-tit">当月IV值平均分</div>
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
            <div class="right-item">
               <div class="right-items">
                  <div class="right-item-tit">历史用户统计</div>
                    <div class="yibiaochart"> 
                    <div class="yibiaochart-item"><huanEchart /></div>
                    <div class="yibiaochart-item"><huanEchart1 /></div>
                    <div class="yibiaochart-item"><huanEchart2 /></div>
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
import huanEchart from "@/components/Home3/huanEchart"; //环形图1组件
import huanEchart1 from "@/components/Home3/huanEchart1"; //环形图1组件
import huanEchart2 from "@/components/Home3/huanEchart2"; //环形图1组件
import zhexianEchart1 from "@/components/Home/zhexianEchart1"; //折线图1组件
import zhexianEchart2 from "@/components/Home/zhexianEchart2"; //折线图2组件
import zhuzhuangtuEchart1 from "@/components/Home2/zhuzhuangtuEchart1"; //柱状图1组件
import zhuzhuangtuEchart2 from "@/components/Home2/zhuzhuangtuEchart2"; //柱状图2组件
import bingEchart1 from "@/components/Home/bingEchart1"; //饼图1组件
import mapEchart from "@/components/Home2/mapEchart"; //中国地图组件
export default {
  name: "home3",
  components: {
    nxCountUp,
    huanEchart,
    huanEchart1,
    huanEchart2,
    zhexianEchart1,
    zhexianEchart2,
    zhuzhuangtuEchart1,
    zhuzhuangtuEchart2,
    bingEchart1,
    mapEchart
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
/* 数字效果 */
.count-css {
  width: 80%;
  /* border: 1px solid red; */
  margin: 0 auto;
  position: relative;
  top: 5px;
  box-sizing: border-box;
  padding: 0 10px;
}
.count-css span {
  background-color: #1f304f;
  box-sizing: border-box;
  padding: 2px 6px;
  margin: 2px 5px;
}
.count-css span:last-child {
  margin-right: 0;
}
/* 滚动效果 */
.list {
  list-style: none;
  width: 30px;
  height: 40px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 11px;
  right: 25px;
  background: #1f304f;
}
.list li {
  position: relative;
  animation: myfirst 10s infinite;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 36px;
  color: #feec00;
}
@keyframes myfirst {
  0% {
    top: 0px;
    background: #1f304f;
  }
  25% {
    top: 0px;
  }
  50% {
    top: -60px;
  }
  75% {
    top: -120px;
  }
  100% {
    top: -180px;
  }
}
/* 滚动效果 */
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
  width: 70%;
  height: 100%;
  /* background-color: #3887aa; */
}
.center {
  width: 50%;
  height: 100%;
  background-size: 100% 100%;
  /* background: url("../assets/image/logo.png"); */
}
.right {
  width: 30%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 1.25rem;
  /* background-color: #3887aa; */
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
  height: 100%;
  width: 33%;
  float: left;
}
/* 水波纹css container*/
.shuiuibochart-item1 {
  width: 30%;
  height: 85%;
  border: 3px solid #00d2ff;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  margin-right: 20px;
  transition: all 2s;
}
/* 此处要的效果是只有边框转动而内容不转动 */
.shuiuibochart-item1:before {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
  content: "";
  border: dashed 5px #00d2ff;
  animation: whirl 9s linear infinite;
}
.shuiuibochart-item1 p {
  color: #00d2ff;
  font-weight: bold;
  font-size: 18px;
  /* width: 100%;
  height: 100%; */
  position: absolute;
  text-align: center;
  z-index: 9999;
  top: 50%;
  left: 12%;
}
.shuiuibochart-item2 {
  width: 30%;
  height: 85%;
  border: 3px solid #1dc5cf;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  margin-right: 20px;
  transition: all 2s;
}
/* 此处要的效果是只有边框转动而内容不转动 */
.shuiuibochart-item2:before {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
  content: "";
  border: dashed 5px #1dc5cf;
  animation: whirl 9s linear infinite;
}
.shuiuibochart-item2 p {
  color: #1dc5cf;
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  text-align: center;
  z-index: 9999;
  top: 50%;
  left: 42%;
}
.shuiuibochart-item3 {
  width: 30%;
  height: 85%;
  border: 3px solid #0181d1;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  /* margin-right: 20px; */
  transition: all 2s;
}
/* 此处要的效果是只有边框转动而内容不转动 */
.shuiuibochart-item3:before {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
  content: "";
  border: dashed 5px #0181d1;
  animation: whirl 9s linear infinite;
}
.shuiuibochart-item3 p {
  color: #0181d1;
  font-weight: bold;
  font-size: 18px;
  position: absolute;
  text-align: center;
  z-index: 9999;
  top: 50%;
  left: 75%;
}
/* 动画whirl,从0度旋转到360度 */
@keyframes whirl {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.wave-text {
  color: #00d2ff;
}
.shuiuibochart-item:last-child {
  margin-right: 0;
}
/* 水波纹效果 */
.wave {
  position: relative;
  left: -4px;
  width: 105%;
  height: 100%;
  background-color: #00d2ff;
  border-radius: 50%;
}
.wave2 {
  position: relative;
  left: -4px;
  width: 105%;
  height: 100%;
  border-radius: 50%;
}
.wave3 {
  position: relative;
  left: -4px;
  width: 105%;
  height: 100%;
  border-radius: 50%;
}
.wave::before,
.wave::after {
  content: "";
  position: absolute;
  width: 140%;
  height: 140%;
  top: 50%;
  left: 50%;
  /* 浅色 */
  /* background-color: #026b99; */
  border-radius: 45%;
  transform: translate(-50%, -70%) rotate(0);
  animation: rotate 4s linear infinite;
  z-index: 10;
}
.wave::after {
  border-radius: 47%;
  background-color: #041d43;
  transform: translate(-50%, -70%) rotate(0);
  animation: rotate 10s linear 4s infinite;
  z-index: 999;
}
.wave2::before,
.wave2::after {
  content: "";
  position: absolute;
  width: 140%;
  height: 140%;
  top: 10%;
  left: 50%;
  /* 浅色 */
  /* background-color: #026b99; */
  border-radius: 45%;
  transform: translate(-50%, -70%) rotate(0);
  animation: rotate 4s linear infinite;
  z-index: 10;
}
.wave2::after {
  border-radius: 47%;
  background-color: #041d43;
  transform: translate(-50%, -70%) rotate(0);
  animation: rotate 10s linear 4s infinite;
  z-index: 999;
}
.wave3::before,
.wave3::after {
  content: "";
  position: absolute;
  width: 140%;
  height: 140%;
  top: 35%;
  left: 50%;
  /* 浅色 */
  /* background-color: #026b99; */
  border-radius: 45%;
  transform: translate(-50%, -70%) rotate(0);
  animation: rotate 4s linear infinite;
  z-index: 10;
}
.wave3::after {
  border-radius: 47%;
  background-color: #041d43;
  transform: translate(-50%, -70%) rotate(0);
  animation: rotate 10s linear 4s infinite;
  z-index: 999;
}
@keyframes rotate {
  50% {
    transform: translate(-50%, -73%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}

.wave2 p {
  color: #1dc5cf;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: centerx;
  z-index: 9999;
  top: 20%;
}
.wave3 p {
  color: #0182d3;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  height: 100%;
  position: absolute;
  text-align: centerx;
  z-index: 9999;
  top: 20%;
}
/* 水波纹css end */
/* left css */
.left-top {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* background-color: #3887aa; */
}
.left-top1 {
  width: 22%;
  height: 70%;
  /* background-color: #00d2ff; */
  float: left;
}
.left-top2 {
  width: 78%;
  height: 100%;
  float: left;
  /* background-color: #ffffff; */
}
.left-bottom {
  width: 25%;
  height: 20%;
  position: absolute;
  bottom: 40px;
  box-sizing: border-box;
  padding: 0.625rem 1.25rem;
  background: url("../assets/image/kuang.png");
  background-size: 100% 100%;
  margin-left: 1.25rem;
}
.left-bottom-list {
  /* border: 1px solid #002dff; */
  width: 100%;
  height: 80%;
}
.people {
  width: 100%;
  height: 100%;
  background: url("../assets/image/people.gif");
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

.left-bottom1 {
  color: #00d2ff;
  border-left: 0.3125rem solid #00d2ff;
  font-size: 20px;
  padding-left: 0.625rem;
  box-sizing: border-box;
  margin: 1.25rem 0;
}
/* 曲线 css */

/* 进度条  */
.progress {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 0.625rem;
}
.progress p {
  color: #00d2ff;
  font-size: 18px;
}
.progress-item {
  box-sizing: border-box;
  width: 100%;
  height: 30%;
}
.progress-item span {
  color: #00d2ff;
  font-size: 16px;
  padding-left: 0.3125rem;
  box-sizing: border-box;
}

/* 中间css */
.center-top {
  width: 100%;
  height: 20%;
  /* background-color: #00d2ff; */
}
.center-bottom {
  width: 100%;
  height: 80%;
  /* background-color: #ffffff; */
}
.center-top-item {
  width: 30%;
  height: 100%;
  float: left;
  margin-right: 0.625rem;
}
.center-top-item:last-child {
  margin-right: 0;
}
.count {
  width: 80%;
  height: 30%;
  margin: 0.625rem auto;
  /* border: 1px solid rebeccapurple; */
  box-sizing: border-box;
}
.count p {
  color: #00d2ff;
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 0.3125rem;
  box-sizing: border-box;
}
.center-top-item-img {
  width: 100%;
  height: 40%;
  background: url("../assets/image/count.png");
  background-size: 100% 100%;
  display: table;
}
.center-top-item-img p {
  font-family: "楷体";
  color: #feec00;
  font-size: 36px;
  /* text-align: center; */
  box-sizing: border-box;
  display: table-cell;
  vertical-align: middle;
}
/* 中间css */
</style>
