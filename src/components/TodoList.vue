<template>
    <div>
    <div v-for="todo in $store.state.todos" :key="todo.id" class="flex mb-4 items-center" >
        <p class="w-full text-gray-900" :class="{
                        'line-through': todo.done
                      }">{{todo.description}}</p>
        <button @click="toggleDone(todo.id)" v-if="!todo.done" class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">Fait</button>
        <button @click="toggleDone(todo.id)" v-else-if="todo.done" class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500">Pas fait</button>
        <button @click="onDeleteTodo(todo.id)" class="flex p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">Supprimer</button>
        <button class="flex p-2 ml-2 border-2 rounded text-gray-500 border-gray-500 hover:text-black hover:bg-gray-500"><router-link :to="{ name: 'todo', params: { id : todo.id }}">Edit</router-link></button>
    </div>
</div>
</template>

<script>

export default {
    
    //  props:{
    //      onDelete : Function
    //  },
    methods: {
    toggleDone(id) {
      const todoToEdit = this.$store.state.todos.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.done = !todoToEdit.done;
      }
    },
    onDeleteTodo(id){
          this.$store.commit("deleteTodo" , id );
          console.log("card")
      },
    },

}
</script>