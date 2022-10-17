<template>
  <div class="container-fluid m-0 p-0 text-center">
    <APIdata />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import APIdata from "./components/APIdata.vue";

export default {
  name: "App",
  components: {
    APIdata,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
