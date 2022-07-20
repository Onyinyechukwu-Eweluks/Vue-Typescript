<template>
  <div class="container">
    <h3 class="header">
      {{ cardsSection.title }}
    </h3>
    <div class="card-container">
      <SmallCard
        v-for="(card, index) in cardsSection.cards"
        :key="index"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
import SmallCard from './SmallCard.vue'
export default {
  name: 'SmallCardDisplay',
  components: { SmallCard },
  props: ['cardsSection']
}
</script>

<style scoped>
.container {
        padding: 2rem 0
    }
    .header {
        font-weight: 700;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    .card-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
