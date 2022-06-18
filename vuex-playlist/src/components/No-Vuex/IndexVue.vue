<template>
  <div>
    <ProductListOne :products="products" />
    <ProductListTwo :products="products" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Product } from "../.././types";
import ProductListOne from "./ProductListOne.vue";
import ProductListTwo from "./ProductListTwo.vue";

export default defineComponent({
  name: "NoVuex",
  setup() {
    const products = ref<Product[]>([
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ]);
    return {
      products,
    };
  },
  components: {
    ProductListOne,
    ProductListTwo,
  },
});
</script>

<style scoped>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
