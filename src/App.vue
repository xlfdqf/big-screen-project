<template>
  <div id="app">
    <router-view/>
  </div>  
  
</template>

<script>
import "@/assets/css/common.css";

export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* @media (max-width: 1180px) {
  body {
    min-width: 1180px;
  }
} */
</style>
