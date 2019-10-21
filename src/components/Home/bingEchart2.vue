
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
            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
            avoidLabelOverlap: true, //是否启用防止标签重叠策略
            radius: ["30%", "60%"],
            center: ["50%", "50%"],
            name: "面积模式",
            type: "pie",
            radius: [30, 110],
            roseType: "area",
            label: {
              normal: {
                formatter(v) {
                  let text = v.name;
                  return text.length < 3
                    ? text
                    : `${text.slice(0, 3)}\n${text.slice(3, 6)}\n${text.slice(
                        6,
                        9
                      )}\n${text.slice(9, 12)}\n${text.slice(
                        12,
                        15
                      )}\n${text.slice(15, 18)}`;
                }
              }
            },
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

