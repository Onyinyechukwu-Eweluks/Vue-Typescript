<template>
  <div id="app">
    <NoVuex />
    <index-vuex />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NoVuex from "../src/components/No-Vuex/IndexVue.vue";
import IndexVuex from "./components/Vuex/IndexVuex.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      title: "Hello Vue!",
      message: "This is a simple Vue.js app." as string,
    };
  },
  components: {
    NoVuex,
    IndexVuex,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
