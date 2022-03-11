<template>
  <div id="app" class="min-h-screen h-full" style="background: #edf2f7;">
    <div class="flex items-center justify-center">
      <div class="w-full flex items-center justify-center font-sans">
        <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg overflow-y-auto">
              <div class="mb-4">
                  <h1 class="text-3xl text-gray-900">Ma Todo</h1>
                  <todo-input />
              </div>
              <todo-progress-bar />
              <todo-list/>
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
  
}
</script>
