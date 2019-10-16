<template>
  <!--仪表2-->
 <div class="myEchart2" style="width:100%;height:100%"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "yibiaoEchart2",
  data() {
    return {
      option: {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 50, name: "完成率" }]
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
      let myEchart2 = echarts.init(document.querySelector(".myEchart2"));
      myEchart2.setOption(this.option);
      //echart按比例缩放
      window.addEventListener("resize", () => {
        myEchart2.resize();
      });
    }
  }
};
</script>

