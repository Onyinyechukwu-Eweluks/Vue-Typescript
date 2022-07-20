<template>
  <div class="container">
    <MyItem
      v-for="item in myRentals"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MyItem from '../components/MyItem.vue'
export default {
  name: 'MyItems',
  components: { MyItem },
  layout: 'no-nav',
  computed: {
    ...mapState(['myRentals'])
  }
}
</script>

<style scoped>

</style>
