import axios from "axios";
import { TodosType } from "@/types";

const state = {
  todos: [] as TodosType[],
};

type State = typeof state;

const getters = {
  allTodos: (state: State) => {
    return state.todos;
  },
  filteredTodos: (state: State) => (title: string) => {
    return state.todos.filter((todo) => todo.title.includes(title));
  },
};
console.log("getters", getters.allTodos);

const actions = {
  async fetchTodos({ commit }: any) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    //console.log("data", response.data);
    commit("setTodos", response.data.slice(0, 10));
  },

  async addTodos({ commit }: any, title: string) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      { title, completed: false }
    );
    commit("newTodo", response.data);
  },
  
  async filterTodos({ commit }: any, e: any) {
    // Get selected number
    const limit = parseInt(
      e.target.options[e.target.options.selectedIndex].innerText
    );
    //console.log('event', e.target.options);

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit('setTodos', response.data);
  },
  
  async deleteTodos({ commit }: any, id: number) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo", id);
  },
  
  async updateTodo({ commit }: any, updTodo: TodosType) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );

    console.log(response.data);

    commit('updateTodo', response.data);
  }
};


const mutations = {
  setTodos: (state: State, todos: TodosType[]) => {
    state.todos = todos;
  },
  newTodo: (state: State, todo: TodosType) => {
    state.todos.push(todo);
  },
  removeTodo: (state: State, id: number) => {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },
  updateTodo: (state: State, updTodo: TodosType) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
