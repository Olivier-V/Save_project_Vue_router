// Assurez vous d'appeler `Vue.use(Vuex)` en premier lieu si vous utilisez un système de module
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: {},
  },
  mutations: {
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo);
      axios
        .post("http://localhost:3000/api/v1/todos", newTodo)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteTodo(state, _id) {
      axios
        .delete("http://localhost:3000/api/v1/todos/" + _id)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      state.todos.splice(
        state.todos.findIndex((todo) => todo._id === _id),
        1
      );
    },
  },
  getters: {
    percentageDone: (state) => {
      return `${
        state.todos.length > 0
          ? (
              (state.todos.filter((todo) => todo.done).length /
                state.todos.length) *
              100
            ).toFixed(2)
          : 0
      }%`;
    },
  },
});

export default store;
