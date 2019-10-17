<template>
  <!--当前iv值平均分 折线图-->
 <div class="zhexianEchart3" style="width:100%;height:100%"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "zhexianEchart3",
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
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
          }
        ],
        yAxis: [
          {
            splitLine: {
              //去掉网格线
              show: false
            },
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#ffffff" //x轴字体颜色
              }
            }
          }
        ],
        series: [
          {
            name: "特征IV值",
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
            data: [0.1, 0.2, 0.3, 0.5, 1.2, 0.5, 0.3, 0.2, 0.1, 0]
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
      let zhexianEchart3 = echarts.init(
        document.querySelector(".zhexianEchart3")
      );
      zhexianEchart3.setOption(this.option);
      //echart按比例缩放
      window.addEventListener("resize", () => {
        zhexianEchart3.resize();
      });
    }
  }
};
</script>

