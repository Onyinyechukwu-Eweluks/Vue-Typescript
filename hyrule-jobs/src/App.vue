<template>
  <div>Hello Hyrule</div>
  <div>
    <!-- <VueComponents /> -->
    <CompositionApi />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import VueComponents from "./components/fundamentals/VueComponents.vue";
import CompositionApi from "./components/composition-api/index.vue";

export default defineComponent({
  name: "App",
  components: {
    // VueComponents,
    CompositionApi,
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
