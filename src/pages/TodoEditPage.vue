<template>
  <div id="template">
    <h1>Editeur</h1>
    
    <div class="card">
      <header class="entete">
        <h1>To Do</h1>
      </header>

      <div class="container">
        <textarea :placeholder="todo.description" v-model="newText"/>
        <p v-if="todo.done">C'est Fait</p>
        <p v-else-if="!todo.done">C'est à faire</p>
      </div>

      <footer class="footer">
        <button id="valid" @click="onUpdate()">VALIDER</button>
      </footer>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      newText: "",
      todo: this.$store.state.todos.find(
        (todo) => todo._id === this.$route.params._id
      ),
    };
  },
  methods:{
      onUpdate(){
        let todoToUpdate ={
          _id : this.todo._id,
          description : this.newText,
          done: this.todo.done
        } 
        axios
        .patch("http://localhost:3000/api/v1/todos/"+this.$route.params._id, todoToUpdate)
        .then((response) => {
             console.log(response);
             console.log('Mis à jour');
             window.location.replace('http://localhost:8080/todos');
           })
           .catch((error) => {
             console.log(error);
           });
        
      }
  }
};
</script>
<style>
    #template{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }
    h1{
        color: blue;
        font-size: 50px;
    }
    .card{
        display: flex;
        flex-direction:column;
        align-items: center;
        text-align: center;
        background-color:  lightblue;
        border-radius: 25px;
        box-shadow: 2px 2px 2px lightgray;
        width: 50%;
        padding: 50px;
    }
    .entete{
        color: blue;
        font-size: xx-large;
        margin-bottom: 30px;
    }
    .container{
        padding: 20px;
        background-color: bisque;
        border-radius: 25px;
        height: 200px;
    }
    textarea{
        width: 100%; 
        height: 80%;
    }
    #valid{
        margin-top: 10px;
        border-radius: 25px;
        background-color: rgb(20, 98, 124);
        color: white;
        font-weight:600 ;
        width: 90px;
        height: 50px;
    }
</style>
