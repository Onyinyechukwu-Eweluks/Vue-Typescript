<template>
  <div>
    <h3>Todos</h3>
    <div class="add">
      <form>
        <input type="text" v-model="title" placeholder="Search by title" />
      </form>
    </div>
    
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
    
    
    
    <div class="todos" v-if="title !== ''">
      <div class="todo" v-for="todo in filteredTodos(title)" :key="todo.id" @dblclick="onDblClick(todo)" v-bind:class="{'is-complete':todo.completed}">
        <h4>
          {{ todo.title }}
          <i class="fas fa-trash-alt" @click="deleteTodos(todo.id)"></i>
        </h4>
      </div>
    </div>
    <div class="todos" v-else>
      <div class="todo" v-for="todo in allTodos" :key="todo.id" v-bind:class="{'is-complete':todo.completed}" @dblclick="onDblClick(todo)">
        <h4>
          {{ todo.title }}
          <i class="fas fa-trash-alt" @click="deleteTodos(todo.id)"></i>
        </h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TodosType } from "@/types";
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  name: "TodoS",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["fetchTodos", "deleteTodos", "updateTodo"]),
    onDblClick(todo: TodosType) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },

  computed: {
    ...mapGetters(["allTodos", "filteredTodos"]),
  },
  mounted() {
    this.fetchTodos();
  },
});
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  margin-bottom: 10px;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
