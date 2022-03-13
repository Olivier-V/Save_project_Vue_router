<template>
  <div>
    <div
      v-for="todo in $store.state.todos"
      :key="todo._id"
      class="flex mb-4 items-center"
    >
      <p
        class="w-full text-gray-900"
        :class="{
          'line-through': todo.done,
        }"
      >
        {{ todo.description }}
      </p>
      <button
        @click="toggleDone(todo._id)"
        v-if="!todo.done"
        class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500"
      >
        Fait
      </button>
      <button
        @click="toggleDone(todo._id)"
        v-else-if="todo.done"
        class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500"
      >
        Pas fait
      </button>
      <button
        @click="onDeleteTodo(todo._id)"
        class="flex p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500"
      >
        Supprimer
      </button>
      <button
        class="flex p-2 ml-2 border-2 rounded text-gray-500 border-gray-500 hover:text-black hover:bg-gray-500"
      >
        <router-link :to="{ name: 'todo', params: { _id: todo._id } }"
          >Edit</router-link
        >
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  
  methods: {
    toggleDone(_id) {
      const todoToEdit = this.$store.state.todos.find((todo) => todo._id === _id);
      if (todoToEdit) {
        todoToEdit.done = !todoToEdit.done;
      }
    },
    onDeleteTodo(_id) {
      this.$store.commit("deleteTodo", _id);
    },
  },
  created() {
    axios
      .get("http://localhost:3000/api/v1/todos")
      .then( ({ data }) => {
        this.$store.state.todos = data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>
