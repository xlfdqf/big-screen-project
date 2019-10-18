<template>
  <!--当前iv值平均分 折线图-->
 <div class="zhexianEchart1" style="width:100%;height:100%"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "zhexianEchart1",
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
            data: [0.32, 0.33, 0.45, 0.5, 0.8]
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
            data: [0, 5, 34, 22, 23, 45]
          },
          {
            name: "劣质用户",
            symbol: "none", //这句就是去掉点的
            smooth: true, //这句就是让曲线变平滑的
            type: "line",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#FE9C00" //改变折线点的颜色
              },
              lineStyle: {
                color: "#FE9C00" //改变折线颜色
              }
            },
            data: [0.23, 0.4, 0.78, 0.91, 1.2]
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
      let zhexianEchart1 = echarts.init(
        document.querySelector(".zhexianEchart1")
      );
      zhexianEchart1.setOption(this.option);
      //echart按比例缩放
      window.addEventListener("resize", () => {
        zhexianEchart1.resize();
      });
    }
  }
};
</script>

