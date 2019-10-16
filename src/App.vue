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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50; */
}
/* @media (max-width: 1180px) {
  body {
    min-width: 1180px;
  }
} */
</style>
