import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import mutations from "./mutations.js";
const store = new Vuex.Store({
  state: {
    todos: [],
  },
  mutations,
  getters: {
    allTodos: state => {
      return state.todos;
    },
    doneTodos: state => {
      return state.todos.filter(v => v.complete == true);
    },
    needDoTodos: state => {
      return state.todos.filter(v => v.complete == false);
    },
  },
});

export default store;

/**
 * txt:
 * complete:
 */
