const express = require('express')
const router = express.Router()

const todoCtrl = require('../controllers/todos');

router.get('/',todoCtrl.list);

//inutile de faire une requete base de données 
//pour afficher 1 todo,tout est dans la store global 
// router.get('/:id' , todoCtrl.getOneItem);

router.post('/' , todoCtrl.postItem);
router.patch('/:_id', todoCtrl.patchItem);
router.delete('/:_id', todoCtrl.deleteItem);

module.exports = router;


