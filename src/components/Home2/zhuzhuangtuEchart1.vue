<template>
  <!--柱状图-->
 <div class="zhuzhuangtuEchart1" style="width:100%;height:100%"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "zhuzhuangtuEchart1",
  data() {
    return {
      option: {
        color: ["#00BBFF", "#00FFBF", "#FF9C00"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          textStyle: {
            color: "#ffffff" //字体颜色
          },
          align: "left",
          data: ["优质", "可疑", "劣质"]
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            axisLabel: {
              textStyle: {
                color: "#ffffff" //x轴字体颜色
              }
            },
            data: ["7天", "14天", "21天", "30天"]
          }
        ],
        yAxis: [
          {
            name: "数量：人数",
            nameGap: 30, //与轴线间距
            nameTextStyle: {
              color: "#ffffff" //文字样式
            },
            splitLine: {
              //去掉网格线
              show: false
            },
            axisLabel: {
              textStyle: {
                color: "#ffffff" //x轴字体颜色
              }
            },
            type: "value"
          }
        ],
        series: [
          {
            name: "优质",
            type: "bar",
            barGap: 0,
            // label: labelOption,
            data: [320, 332, 301, 225]
          },
          {
            name: "可疑",
            type: "bar",
            // label: labelOption,
            data: [220, 182, 191, 225]
          },
          {
            name: "劣质",
            type: "bar",
            // label: labelOption,
            data: [150, 232, 201, 225]
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
      let zhuzhuangtuEchart1 = echarts.init(
        document.querySelector(".zhuzhuangtuEchart1")
      );
      zhuzhuangtuEchart1.setOption(this.option);
      //echart按比例缩放
      window.addEventListener("resize", () => {
        zhuzhuangtuEchart1.resize();
      });
    }
  }
};
</script>

