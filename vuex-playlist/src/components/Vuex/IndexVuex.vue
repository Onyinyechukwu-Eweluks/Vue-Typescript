<template>
  <div>
    <add-todos />
    <filter-todo />
    <todo-s />
  </div>
</template>

<script lang="ts">
import AddTodos from "./AddTodos.vue";
import FilterTodo from './FilterTodo.vue';
import TodoS from "./TodoS.vue";
export default {
  name: "IndexVuex",
  components: { TodoS, AddTodos, FilterTodo },
};
</script>

<style scoped></style>
