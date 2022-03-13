const Todo = require("../models/todo");

exports.list = (req, res) => {
  Todo.find()
    .then((todos) => res.status(200).json(todos))
    .catch((error) => res.status(400).json({ error }));
};
exports.getOneItem = (req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => res.status(200).json(todo))
    .catch((error) => res.status(400).json({ error }));
};
exports.postItem = (req,res) =>{
    const newTodo = new Todo(req.body);
    console.log(newTodo)
    
    newTodo.save()
    .then((newTodo) =>{
      res.status(201).send(newTodo);
    })
    .catch((error) =>{
      res.status(400).send(error);
    })
};
exports.patchItem = (req,res) =>{
  Todo.updateOne( { "_id" : req.body._id } , { $set: {"description" : req.body.description}})
  .then((newTodo) =>{
    res.status(201).send(newTodo);
  })
  .catch((error) =>{
    res.status(400).send(error);
  })
 
};
exports.deleteItem = (req , res) => {
  console.log(req.params._id)
  Todo.deleteOne( { _id : req.params._id })
  .then((response) =>{
    res.status(201).send(response);
  })
  .catch((error) =>{
    res.status(400).send(error);
  })
}


