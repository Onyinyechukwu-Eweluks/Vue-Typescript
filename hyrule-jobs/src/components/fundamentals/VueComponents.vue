<template>
  <div>
    <h4>{{ hisName }} - {{ age }}</h4>
    <button @click="changeName('Onyinye')">Change Name</button>
  </div>
  <div>
    <h4>{{ name }}</h4>
    <p>I live at no {{ street }} Lan van vldereen</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";

export default defineComponent({
  name: "VueComponents",
  setup() {
    const state = reactive({
      name: "Sebastian",
      isOpen: false,
      age: 0 as number | string,
    });

    const street = ref<number | string>(18);
    return {
      ...toRefs(state),
      street,
    };
  },
  data() {
    return {
      hisName: "Sebastian",
      isOpen: false,
      age: 0 as number | string,
    };
  },
  methods: {
    changeName(myName: string) {
      if (!this.isOpen) {
        this.name = myName;
        this.isOpen = true;
      } else {
        this.name = "Sebastian";
        this.isOpen = false;
      }
    },
  },
});
</script>

<style scoped></style>
