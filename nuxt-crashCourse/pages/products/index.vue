<template>
  <div>
    <LargeCardDisplay
      v-for="cards in largeCards.slice(0,1)"
      :key="cards.id"
      :cards-section="cards"
    />
    <SmallCardDisplay
      v-for="cards in smallCards.slice(0,1)"
      :key="cards.id"
      :cards-section="cards"
    />
</div>
</template>

<script>
import LargeCardDisplay from '../../components/LargeCardDisplay.vue'
import SmallCardDisplay from '../../components/SmallCardDisplay.vue'
import { largeCardSections, smallCardSections } from '@/assets/data'
export default {
  name: 'ProductsPage',
  components: { LargeCardDisplay, SmallCardDisplay },
  data () {
    return {
      largeCards: largeCardSections,
      smallCards: smallCardSections
    }
  }
}
</script>

<style scoped>

</style>
