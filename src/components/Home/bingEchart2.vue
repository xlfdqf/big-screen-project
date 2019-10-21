
<template>
  <!--饼图1-->
 <div class="bingEchart2" style="width:100%;height:100%"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "bingEchart2",
  data() {
    return {
      option: {
        color: ["#E56E6E", "#2853EC", "#FEB763", "#00C0DD"],
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#fff"
          },
          data: [
            "近六个月通话时长TOP3呼出时间",
            "近六个月通话时长TOP3呼出次数",
            "近6个月月均主叫时间",
            "查询过该用户的相关企业数量"
          ]
        },
        calculable: true,
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [30, 110],
            roseType: "area",
            // 修改字体颜色的代码begin
            itemStyle: {
              normal: {
                label: {
                  textStyle: {
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: "bolder"
                  }
                },
                labelLine: {
                  lineStyle: {
                    color: "#ffffff"
                  }
                }
              }
            },
            data: [
              { value: 4.55696357, name: "近六个月通话时长TOP3呼出时间" },
              { value: 3.37451148, name: "近六个月通话时长TOP3呼出次数" },
              { value: 1.26912599, name: "近6个月月均主叫时间" },
              { value: 4.55696357, name: "查询过该用户的相关企业数量" }
            ]
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
      let bingEchart2 = echarts.init(document.querySelector(".bingEchart2"));
      bingEchart2.setOption(this.option);
      //echart按比例缩放
      window.addEventListener("resize", () => {
        bingEchart2.resize();
      });
    }
  }
};
</script>

