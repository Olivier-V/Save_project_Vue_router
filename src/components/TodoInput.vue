<template>
    <div class="flex mt-4">
        <input v-model="description" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-700" placeholder="Add Todo">
        <button @click="saveTodo()" class="flex p-2 border-2 rounded text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500">Ajouter</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            description:""
        }
        
    },
    
     methods: {
         saveTodo(){
            this.$store.commit("addTodo" , {id:this.$store.getters.maxTodoId + 1, description: this.description, done: false});
            this.description=""; 
         },

     },

}
</script>
