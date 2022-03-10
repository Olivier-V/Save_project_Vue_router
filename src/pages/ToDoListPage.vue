<template>
  <div id="app" class="min-h-screen h-full" style="background: #edf2f7;">
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto">
              <div class="mb-4">
                  <h1 class="text-3xl text-gray-900">Ma Todo</h1>
                  <todo-input @onSaveTodo="addTodo"  />
              </div>
              <todo-progress-bar />
              <todo-list @onDelete="deleteTodo"/>
          </div>
      </div>
    </div> 
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput.vue';
import TodoProgressBar from '@/components/TodoProgressBar.vue';
import TodoList from '@/components/TodoList.vue';
export default {
  components:{
    TodoInput,
    TodoProgressBar,
    TodoList
  },
  name: 'App',
  data() {
    return {
      description: "",
    }
  },
  computed: {
      percentageDone () {
        return this.$store.getters.percentageDone;
      },
     maxTodoId () {
       return Math.max(...this.$store.state.todos.map(todo => todo.id));
     }
  },
  methods: {
    deleteTodo(id) {
      this.$store.state.todos.splice(this.$store.state.todos.findIndex(todo => todo.id === id), 1);
    },
    addTodo(description) {
      if (description) {
        this.$store.state.todos.unshift({id: this.maxTodoId + 1, description: description, done: false});
        description = "";
      }
    },
  }
}
</script>
