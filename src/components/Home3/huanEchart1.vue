<template>
  <!--环形图-->
  <div class="huanEchart1" style="width:100%;height:100%;"> </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "huanEchart1",
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
        color: ["#00FFBF", "#2C6D7C"],
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
            text: "0.28" + "\n" + "ROC曲线",
            textAlign: "center",
            fill: "#00FFBF",
            fontSize: 18
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
            data: [{ value: 10, name: "ROC曲线" }, { value: 90, name: "其他" }]
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
      let huanEchart1 = echarts.init(document.querySelector(".huanEchart1"));
      huanEchart1.setOption(this.option);
      //echart按比例缩放
      window.addEventListener("resize", () => {
        huanEchart1.resize();
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
