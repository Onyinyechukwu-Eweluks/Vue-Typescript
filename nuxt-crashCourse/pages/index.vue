<template>
  <div>
    <div class="container">
      <HeroComponent />
      <LargeCardDisplay
        v-for="cardInfo in largeCardInfo"
        :key="cardInfo.id"
        :cards-section="cardInfo"
      />
      <SmallCardDisplay
        v-for="cardInfo in smallCardInfo"
        :key="cardInfo.id"
        :cards-section="cardInfo"
      />
    </div>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from '@/assets/data'
import HeroComponent from '~/components/HeroComponent.vue'
import LargeCardDisplay from '~/components/LargeCardDisplay.vue'
import SmallCardDisplay from '~/components/SmallCardDisplay.vue'
export default {
  name: 'IndexPage',
  components: { HeroComponent, LargeCardDisplay, SmallCardDisplay },
  data () {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections,
      hello: ''
    }
  }
}
</script>
