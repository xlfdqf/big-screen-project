<template>
  <!--当前iv值平均分 折线图-->
 <div class="zhexianEchart2" style="width:100%;height:100%"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "zhexianEchart2",
  data() {
    return {
      option: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          itemHeight: 12,
          itemWidth: 12,
          textStyle: {
            color: "#ffffff" //字体颜色
          },
          data: [
            {
              name: "优质用户",
              icon: "rect" //图例正方形
            },
            {
              name: "劣质用户",
              icon: "rect"
            }
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            splitLine: {
              show: false
            },
            type: "category",
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "#ffffff" //x轴字体颜色
              }
            },
            data: [0.12, 0.34, 0.78, 0.9, 1.1]
          }
        ],
        yAxis: [
          {
            splitLine: {
              lineStyle: {
                color: ["#02688A"],
                width: 1,
                type: "sold"
              }
            },
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#ffffff" //x轴字体颜色
              }
            },
            axisTick: {
              //y轴刻度线
              show: false
            }
          }
        ],
        series: [
          {
            name: "优质用户",
            symbol: "none", //这句就是去掉点的
            smooth: true, //这句就是让曲线变平滑的
            type: "line",
            stack: "总量",
            areaStyle: {
              normal: {
                color: "#00B3DD" //改变区域颜色
              }
            },
            itemStyle: {
              normal: {
                color: "#00B3DD" //改变折线点的颜色
              },
              lineStyle: {
                color: "#00B3DD" //改变折线颜色
              }
            },
            data: [0.11, 0.32, 0.65, 0.97, 0.62]
          },
          {
            name: "劣质用户",
            symbol: "none", //这句就是去掉点的
            smooth: true, //这句就是让曲线变平滑的
            type: "line",
            stack: "总量",
            areaStyle: {
              normal: {
                color: "#FE9C00" //改变区域颜色
              }
            },
            itemStyle: {
              normal: {
                color: "#FE9C00" //改变折线点的颜色
              },
              lineStyle: {
                color: "#FE9C00" //改变折线颜色
              }
            },
            data: [0.11, 0.24, 0.21, 0.91, 0.98]
          }
        ]
      }
    };
  },
  mounted() {
    this.huanEchart();
  },
  methods: {
    //仪表盘
    huanEchart() {
      let zhexianEchart2 = echarts.init(
        document.querySelector(".zhexianEchart2")
      );
      zhexianEchart2.setOption(this.option);
      //echart按比例缩放
      window.addEventListener("resize", () => {
        zhexianEchart2.resize();
      });
    }
  }
};
</script>

