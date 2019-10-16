<template>
  <div class="home">
      <div class="top"><nx-count-up :start="1" :end="10000"/></div>
			 <div class="left fl" id="china-map"></div>      <!-- 地图 -->
			<div class="center fl">22</div>   <!--机器人-->
			<div class="right fl">33</div>     <!--环形图-->
	</div>
</template>

<script>
import echarts from "echarts";
import nxCountUp from "@/components/nx-count-up";
export default {
  name: "home",
  components: { nxCountUp },
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
          position: ["50%", "50%"],
          formatter: "{b}:{d}%"
          // formatter: this.echartFormatter
        },
        legend: {
          show: false //隐藏图例
        },
        //设置饼状图每个颜色块的颜色
        color: ["#4EC4DD", "#2C6D7C"],
        emphasis: {
          show: false
        },
        graphic: {
          //图形中间文字
          type: "text",
          left: "center",
          top: "center",
          z: 10,
          zlevel: 1000,
          show: false,
          style: {
            text: "66%",
            textAlign: "center",
            fill: "#4EC4DD",
            fontSize: 40
          }
        },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 100, name: "直接访问" },
              { value: 310, name: "邮件营销" }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.huanEchart();
    this.chainaMap();
  },
  methods: {
    //环形图
    huanEchart() {
      let chartBar = echarts.init(document.querySelector(".right"));
      chartBar.setOption(this.option);
      //echart按比例缩放
      window.onresize = function() {
        chartBar.resize();
      };
    },
    //中国地图
    chainaMap() {
      let chinaMap = echarts.init(document.getElementById("china-map"));
      chinaMap.setOption({
        backgroundColor: "#272D3A",
        // 标题
        title: {
          text: "中国地图闪闪发光",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        // 地图上圆点的提示
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            return params.name + " : " + params.value[2];
          }
        },
        // 图例按钮 点击可选择哪些不显示
        legend: {
          orient: "vertical",
          left: "left",
          top: "bottom",
          data: ["地区热度", "top5"],
          textStyle: {
            color: "#fff"
          }
        },
        // 地理坐标系组件
        geo: {
          map: "china",
          label: {
            // true会显示城市名
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            // 地图背景色
            normal: {
              areaColor: "#465471",

              borderColor: "#282F3C"
            },
            // 悬浮时
            emphasis: {
              areaColor: "#8796B4"
            }
          }
        },
        // 系列列表
        series: [
          {
            name: "地区热度",
            // 表的类型 这里是散点
            type: "scatter",
            // 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组件
            coordinateSystem: "geo",
            data: [],
            // 标记的大小
            symbolSize: 12,
            // 鼠标悬浮的时候在圆点上显示数值
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: "#ddb926"
              },
              // 鼠标悬浮的时候圆点样式变化
              emphasis: {
                borderColor: "#fff",
                borderWidth: 1
              }
            }
          },
          {
            name: "top5",
            // 表的类型 这里是散点
            type: "effectScatter",
            // 使用地理坐标系，通过 geoIndex 指定相应的地理坐标系组件
            coordinateSystem: "geo",
            data: [],
            // 标记的大小
            symbolSize: 12,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: "#f4e925",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.top {
  width: 100%;
  height: 10%;
  color: #ffffff;
  border: 1px solid blue;
  clear: both;
  font-size: 30px;
}
.home {
  width: 100%;
  height: 100%;
  border: 1px solid red;
  position: absolute;
  /* display: flex; */
}
.left {
  width: 33%;
  height: 100%;
}
.center {
  width: 33%;
  height: 100%;
  background: url("https://ow.speedbi.cn:7272/uploads/img/08:57:00:f6:b9:fe/7c8ba7d0-ebc6-11e9-8599-fd5d72c7833f.png");
  background-size: 100% 100%;
}
.right {
  width: 33%;
  height: 100%;
}
.fl {
  float: left;
  border: 1px solid black;
}
</style>
