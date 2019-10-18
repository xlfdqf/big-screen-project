<template>
  <div class="home">
    <div class="black"></div>
      <div class="top">
         <div class="top-content">
           <p class="top-title">智慧金融太空舱数据大屏</p>
           <div class="top-img"><div class="top-img-item"></div></div>
           <div class="top-date"><span style="color:#00D2FF;">2019&nbsp;</span>年<span style="color:#00D2FF;">&nbsp;11</span>&nbsp;月</div>
         </div>
      </div>
       <div class="bottom">
         <div class="left fl">
           <div class="right-item" style="margin-left:10px;">
              <div class="right-items">
                  <div class="right-item-tit">历史用户统计</div>
                  <div class="yibiaochart"> 
                    <div class="progress">
                        <div class="progress-item">
                          <span style="width:10%;height:10%;padding-left:0" class="fl">优质</span>
                          <el-progress :text-inside="true" :stroke-width="24" :percentage="5" style="width:60%;height:80%;"  class="fl"></el-progress>
                           <span style="width:30%;height:10%;" class="fl"><nx-count-up :start="1" :end="55"/>人</span>
                        </div>
                        <div class="progress-item">
                          <span style="width:10%;height:10%;padding-left:0" class="fl">可疑</span>
                          <el-progress :text-inside="true" :stroke-width="22" :percentage="30" style="width:60%;height:80%;"  class="fl"></el-progress>
                           <span style="width:30%;height:10%;" class="fl"><nx-count-up :start="30" :end="308"/>人</span>
                        </div>
                        <div class="progress-item">
                          <span style="width:10%;height:10%;padding-left:0" class="fl">劣质</span>
                          <el-progress :text-inside="true" :stroke-width="20" :percentage="90" style="width:60%;height:80%;"  class="fl"></el-progress>
                            <span style="width:30%;height:10%;" class="fl"><nx-count-up :start="1" :end="952"/>人</span>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
             <div class="right-item" style="margin-left:10px;">
              <div class="right-items">
                  <div class="right-item-tit">昨日样本分布</div>
                  <div class="yibiaochart"> 
                    <div class="yibiaochart-item"><huanEchart /></div>
                    <div class="yibiaochart-item"><huanEchart1 /></div>
                    <div class="yibiaochart-item"><huanEchart2 /></div>
                  </div>
              </div>
            </div>
             <div class="right-item" style="margin-left:10px;">
              <div class="right-items">
                  <div class="right-item-tit" style="marign-bottom:20px;">当前特征IV值</div>
                  <div class="yibiaochart"> 
                    <bingEchart1/>
                  </div>
              </div>
            </div>
         </div>   
             <!-- 中间 部分-->
          <div class="center fl">
            <div class="center-top">
              <div class="center-top-item">
                <div class="count">
                  <p class="count-tit">浙江借款总人数</p>
                  <div class="center-top-item-img">
                     <p class="count-css"><span>0</span><span>0</span><span>1</span><span>0</span><span>2</span></p>
                  </div>
                </div>
              </div>
               <div class="center-top-item"> 
                 <div class="count">
                  <p  class="count-tit">浙江上月借款人数</p>
                  <div class="center-top-item-img">
                     <!-- <p><nx-count-up :start="1" :end="12541"/></p> -->
                      <p class="count-css"><span>0</span><span>0</span><span>0</span><span>8</span><span>5</span></p>
                  </div>
                  </div>
                </div>
                <div class="center-top-item">
                   <div class="count">
                  <p class="count-tit">浙江昨天借款人数</p>
                  <div class="center-top-item-img">
                     <!-- <p><nx-count-up :start="1" :end="1023"/></p> -->
                      <p class="count-css"><span>0</span><span>0</span><span>0</span><span>3</span><span>6</span></p>
                  </div>
                  </div></div>
            </div>
            <div class="center-bottom">
              <mapEchart />
            </div>
          </div>
            <!-- 中间 -->
			   <div class="right fl">
            <div class="right-item">
              <div class="right-items">
                  <div class="right-item-tit">上月用户统计</div>
                  <div class="yibiaochart"> 
                    <zhuzhuangtuEchart1 />
                  </div>
              </div>
            </div>
            <div class="right-item"> 
              <div class="right-items">
                  <div class="right-item-tit">全年用户统计</div>
                   <div class="yibiaochart"> 
                     <zhuzhuangtuEchart2 />
                  </div>
              </div>
            </div>
            <div class="right-item">
               <div class="right-items">
                  <div class="right-item-tit">历史IV值平均分</div>
                   <div class="yibiaochart"> 
                     <zhexianEchart/>
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
import huanEchart from "@/components/Home2/huanEchart"; //环形图1组件
import huanEchart1 from "@/components/Home2/huanEchart1"; //环形图1组件
import huanEchart2 from "@/components/Home2/huanEchart2"; //环形图1组件
import zhexianEchart from "@/components/Home2/zhexianEchart"; //折线图1组件
import zhuzhuangtuEchart1 from "@/components/Home2/zhuzhuangtuEchart1"; //柱状图1组件
import zhuzhuangtuEchart2 from "@/components/Home2/zhuzhuangtuEchart2"; //柱状图2组件
import bingEchart1 from "@/components/Home/bingEchart1"; //饼图1组件
import mapEchart from "@/components/Home2/mapEchart"; //中国地图组件
export default {
  name: "home2",
  components: {
    nxCountUp,
    huanEchart,
    huanEchart1,
    huanEchart2,
    zhexianEchart,
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
  width: 25%;
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
  width: 25%;
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
  position: relative;
}

/* left css */
.left-top {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
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
.left-bottom {
  width: 90%;
  height: 30%;
  background: url("../assets/image/quxianbg.png");
  background-size: 100% 100%;
  margin: 0 auto;
}
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
  height: 80%;
  margin: 0.625rem auto;
  /* border: 1px solid rebeccapurple; */
  box-sizing: border-box;
}
.count .count-tit {
  color: #00d2ff;
  font-weight: bold;
  font-size: 14px;
  padding-bottom: 0.3125rem;
  box-sizing: border-box;
}
.center-top-item-img {
  width: 100%;
  height: 40%;
  background: url("../assets/image/count.png");
  background-size: 100% 100%;
  position: relative;
  /* display: table; */
}
.center-top-item-img p {
  font-family: "楷体";
  color: #feec00;
  font-size: 28px;
  text-align: center;
  box-sizing: border-box;
  /* display: table-cell;
  vertical-align: middle; */
}
/* 中间css */

/* 数字效果 */
.count-css {
  position: relative;
  top: 10px;
}
.count-css span {
  background-color: #1f304f;
  box-sizing: border-box;
  padding: 2px 5px;
  margin: 2px 5px;
}
.count-css span:last-child {
  margin-right: 0;
}
</style>
