// Assurez vous d'appeler `Vue.use(Vuex)` en premier lieu si vous utilisez un système de module
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        todos: [
            {
              id: 1,
              done: false,
              description: 'Ajouter une todo avec Vue',
            },
            {
              id: 2,
              done: true,
              description: 'Design de ma Todo',
            },
          ]
    },
    mutations: {
      
      addTodo(state , todo) {
        if (todo) {
          state.todos.unshift(todo);
        }
      },
      
    },
    getters:{
      percentageDone : (state) => {
        return `${state.todos.length > 0 ? (((state.todos.filter(todo => todo.done)).length /state.todos.length) * 100).toFixed(2) : 0}%`;
      },
      maxTodoId : (state) => {
        return Math.max(...state.todos.map(todo => todo.id));
      }
    }
  })

  export default store;
  