<template>
  <!--仪表3-->
 <div class="myEchart3" style="width:100%;height:100%"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "yibiaoEchart3",
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
      let myEchart3 = echarts.init(document.querySelector(".myEchart3"));
      myEchart3.setOption(this.option);
      //echart按比例缩放
      window.addEventListener("resize", () => {
        myEchart3.resize();
      });
    }
  }
};
</script>

