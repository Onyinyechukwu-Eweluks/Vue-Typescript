<template>
  <div class="job-list">
    <p>Ordered by {{ order }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h4>{{ job.title }} in {{ job.location }}</h4>
        <div class="salary">
          <img src="../../assets/rupee.svg" alt="rupee icon" />
          <p><b>Salary:</b> {{ job.salary }} rupees</p>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            eveniet laboriosam similique magni nisi maiores nobis. Aperiam
            fugiat nisi doloribus minus tempore, officiis aliquid! Odit
            doloribus quod provident enim quas.
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Job from "@/types/Job";
import OrderTerm from "@/types/OrderTerm";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: "JobList",
  props: {
    jobs: {
      type: Array as PropType<Job[]>,
      required: true,
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true,
    },
  },
  setup(props) {
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a, b) => {
        if (a[props.order] < b[props.order]) {
          return -1;
        }
        if (a[props.order] > b[props.order]) {
          return 1;
        }
        return 0;
      });
    });

    return {
      orderedJobs,
    };
  },
});
</script>

<style scoped>
* {
  text-align: start;
}
.job-list {
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul {
  padding: 0;
}
.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}
.list-move {
  transition: all 1s;
}
</style>
