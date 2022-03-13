<template>
     <div>
         <ul id="navbar">
            <li> <router-link to="/">Home</router-link></li>
            <li><router-link to="/todos">ToDoList</router-link></li>  
        </ul> 
     </div>
</template>

<style>
#navbar{
    display:flex;
    background-color:lightcoral;
    justify-content: space-around;
    height: 50px;
    color: white;
    font-size: xx-large;
}
li{
    padding: 5px;
}
li:hover{
    color: lightblue;
    text-shadow: 2px 2px 2px blue;
    border: 2px dotted blue;
    border-radius: 30px;
}
</style>


 