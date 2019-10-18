<template>
  <!--环形图-->
  <div class="myEchart" style="width:100%;height:100%;"> </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "huanEchart",
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
        grid: {
          left: 0,
          top: 0,
          left: 0,
          bottom: 0,
          containLabel: true
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
            text: "78" + "\n" + "阈值",
            // text: "环图中添加颜色" + "\n" + "和series平级",
            textAlign: "center",
            fill: "#4EC4DD",
            fontSize: 20
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
            data: [{ value: 78, name: "阈值" }, { value: 22, name: "其他" }]
          }
        ]
      }
    };
  },
  mounted() {
    this.huanEchart();
  },
  methods: {
    //环形图
    huanEchart() {
      let myEchart = echarts.init(document.querySelector(".myEchart"));
      myEchart.setOption(this.option);
      //echart按比例缩放
      window.addEventListener("resize", () => {
        myEchart.resize();
      });
    }
  }
};
</script>

<style scoped>
.myEchart {
  width: 100%;
  height: 100%;
}
</style>
