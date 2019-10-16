<template>
  <div class="home">
      <div class="top">
         <div class="top-content">
           <p class="top-title">智慧金融太空舱数据大屏</p>
           <div class="top-img"><div class="top-img-item"></div></div>
          <!-- <div class="top-date"><span style="color:#00D2FF">2019</span>年<span style="color:#00D2FF">10</span>月</div> -->
         </div>
      </div>
       <div class="bottom">
         <div class="left fl"></div>      
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
			<!-- <div class="center fl">22</div> 机器人  -->
	</div>
</template>

<script>
import nxCountUp from "@/components/nx-count-up";
import huanEchart from "@/components/Home/huanEchart"; //环形图组件
import yibiaoEchart1 from "@/components/Home/yibiaoEchart1"; //仪表盘1组件
import yibiaoEchart2 from "@/components/Home/yibiaoEchart2"; //仪表盘2组件
import yibiaoEchart3 from "@/components/Home/yibiaoEchart3"; //仪表盘3组件
import zhexianEchart1 from "@/components/Home/zhexianEchart1"; //折线图1组件
import zhexianEchart2 from "@/components/Home/zhexianEchart2"; //折线图2组件
export default {
  name: "home",
  components: {
    nxCountUp,
    huanEchart,
    yibiaoEchart1,
    yibiaoEchart2,
    yibiaoEchart3,
    zhexianEchart1,
    zhexianEchart2
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
.top {
  width: 100%;
  height: 7%;
  color: #ffffff;
  /* border: 1px solid blue; */
  clear: both;
  font-size: 30px;
  margin-top: 3%;
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
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  font-size: 0.875rem;
  max-width: 100%;
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
  height: 31%;
  box-sizing: border-box;
  padding: 0 10px;
  margin: 0.26rem;
  border: 1px solid #02c1d4;
}
.right-item-tit {
  border-left: #01d5e1 0.3125rem solid;
  color: #02a6ce;
  font-size: 0.75rem;
  padding-left: 0.3125rem;
}
.yibiaochart {
  width: 100%;
  height: 90%;
}
.yibiaochart-item {
  height: 90%;
  width: 33%;
  float: left;
  position: relative;
}
.yibiaochart-item p {
  color: #01d5e1;
  text-align: center;
  height: 10%;
  width: 100%;
}
</style>
