<style>
/* div {
  width: 500px;
  height: 500px;
} */
</style>
<template>
  <div id="mapEchart" style="width:100%;height:100%;"></div>
</template>

<script>
// 主模块
let echarts = require("echarts/lib/echarts");
// 散点图
require("echarts/lib/chart/scatter");
// 散点图放大
require("echarts/lib/chart/effectScatter");
// 地图
require("echarts/lib/chart/map");
// 图例
require("echarts/lib/component/legend");
// 提示框
require("echarts/lib/component/tooltip");
// 地图geo
require("echarts/lib/component/geo");
// 中国地图
require("echarts/map/js/china");
export default {
  name: "mapEchart",
  mounted() {
    let chinaMap = echarts.init(document.getElementById("mapEchart"));
    //echart按比例缩放
    window.addEventListener("resize", () => {
      chinaMap.resize();
    });
    chinaMap.setOption({
      //   backgroundColor: "#272D3A",
      // 标题
      title: {
        left: "center",
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
            show: true
          }
        },
        itemStyle: {
          // 地图背景色
          normal: {
            areaColor: "#2A5483",
            borderColor: "#2A5483"
          },
          // 悬浮时
          emphasis: {
            areaColor: "#3E6792"
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
    this.$store.dispatch("fetchHeatChinaRealData", chinaMap);
    setInterval(() => {
      this.$store.dispatch("fetchHeatChinaRealData", chinaMap);
    }, 1000);
  }
};
</script>