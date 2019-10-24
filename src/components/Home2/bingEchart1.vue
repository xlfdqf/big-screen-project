
<template>
  <!--饼图1-->
 <div class="bingEchart1" style="width:100%;height:100%"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "bingEchart1",
  data() {
    return {
      option: {
        // grid: {
        //   left: "3%",
        //   top: "3%",
        //   right: "4%",
        //   bottom: "3%",
        //   containLabel: true
        // },
        color: ["#00C6FF", "#00A1FF", "#00E2FE", "#25FCFC"],
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        // legend: {
        //   x: "center",
        //   y: "bottom",
        //   textStyle: {
        //     color: "#fff"
        //   },
        //   data: [
        //     "近六个月通话时长TOP3呼出时间",
        //     "近六个月通话时长TOP3呼出次数",
        //     "近6个月月均主叫时间",
        //     "查询过该用户的相关企业数量"
        //   ]
        // },
        calculable: true,
        series: [
          {
            name: "面积模式",
            type: "pie",
            roseType: "area",
            minAngle: 5, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
            avoidLabelOverlap: true, //是否启用防止标签重叠策略
            radius: ["30%", "60%"],
            center: ["50%", "50%"],
            label: {
              normal: {
                formatter(v) {
                  let text = v.name;
                  return text.length < 8
                    ? text
                    : `${text.slice(0, 8)}\n${text.slice(8)}`;
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
              { value: 1.16670417, name: "近六个月通话时长TOP3呼出时间" },
              { value: 1.10319817, name: "近六个月通话时长TOP3呼出次数" },
              { value: 1.0870232, name: "近6个月月均主叫时间" },
              { value: 1.10703153, name: "查询过该用户的相关企业数量" }
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
      let bingEchart1 = echarts.init(document.querySelector(".bingEchart1"));
      bingEchart1.setOption(this.option);
      //echart按比例缩放
      window.addEventListener("resize", () => {
        bingEchart1.resize();
      });
    }
  }
};
</script>

