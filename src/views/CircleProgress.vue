
<!--环形进度条页面-->
<template>
<div class="circle">
 <el-row :gutter="20">
    <el-col :span="8"><div class="item"><canvas-circle  :percent="ratio1" :id="1"></canvas-circle> </div></el-col>
    <el-col :span="8"><div class="item"><canvas-circle  :percent="ratio2" :id="2"></canvas-circle> </div></el-col>
    <el-col :span="8"><div class="item"><canvas-circle  :percent="ratio3" :id="3"></canvas-circle> </div></el-col>
  </el-row>
</div>
</template>
<script>
import canvasCircle from "@/components/circle-progress";
export default {
  components: {
    canvasCircle
  },
  data() {
    return {
      ratio1: 10,
      ratio2: 30,
      ratio3: 43
      // cicleList: [
      //   {
      //     ratio: "10"
      //   },
      //   {
      //     ratio: "65"
      //   },
      //   {
      //     ratio: "85"
      //   }
      // ]
    };
  }
};
</script>
<style>
.circle {
}
.item {
  border: 1px solid black;
}
</style>



