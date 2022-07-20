// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar }
}
</script>

<style scoped>

</style>
