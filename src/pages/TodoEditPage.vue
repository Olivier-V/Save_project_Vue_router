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
export default {
  data() {
    return {
      newText: "",
      todo: this.$store.state.todos.find(
        (todo) => todo.id === this.$route.params.id
      ),
    };
  },
  methods:{
      onUpdate(){
        //   this.$store.state.todos.forEach(element => {
        //     if(element.id == this.todo.id){
        //         element.description = this.newText;
        //     }  
        //   });
        console.log('Mis à jour')
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
        width: 400px; 
        height: 150px;
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
