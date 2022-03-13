require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;
const cluster = process.env.MONGO_URL;
const port = process.env.MONGO_PORT
const db =process.env.MONGO_DB_NAME;

mongoose.connect(
    "mongodb://"+cluster+":"+port+"/"+db,{
        pass,
        user,
        // useNexUrlParser: true,
        useUnifiedTopology:true
    })
    .then(() => console.log("Connexion réussie"))
    .catch((e) => console.log(e, "connexion échouée"));

    const todosRoutes = require("./routes/todos.js");
// const { add } = require('lodash');
    const app = express();
    
const bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended:true}));

    app.use(cors({
        origin : 'http://localhost:8080'
    }));

    app.use("/ping" , (reg,res) =>{
        res.status(200).send("ping ok");
    });
    app.use('/api/v1/todos',todosRoutes);

    module.exports = app;