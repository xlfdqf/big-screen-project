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
            min: 0,
            max: 1200, //设置刻度盘内数值区间
            splitNumber: 6, //设置间隔区域的显示数量
            startAngle: 180, //开始角度 左侧角度
            endAngle: 0, //结束角度 右侧
            grid: {
              left: "3%",
              right: "4%",
              bottom: "3%",
              containLabel: true
            },
            axisLine: {
              // 坐标轴线
              lineStyle: {
                shadowBlur: 10, //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                shadowColor: "#fff", //阴影颜色。支持的格式同color。
                width: 15, //表盘宽度
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "#02BADE"
                      },
                      {
                        offset: 0.6,
                        color: "#09A7E0"
                      },
                      {
                        offset: 1,
                        color: "#2853EC"
                      }
                    ])
                  ]
                ]
              }
            },
            detail: {
              show: false
            },
            splitLine: {
              //分割线样式（及10、20等长线样式）
              length: 20,
              lineStyle: {
                // 分隔线样式。
                color: "#08B3DF", //线的颜色,默认 #eee。
                opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                width: 2, //线度,默认 2。
                type: "solid", //线的类型,默认 solid。 此外还有 dashed,dotted
                shadowBlur: 10, //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                shadowColor: "#fff" //阴影颜色。支持的格式同color。
              }
            },
            data: [{ value: 250 }]
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

