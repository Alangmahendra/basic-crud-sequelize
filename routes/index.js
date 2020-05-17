const router = require('express').Router();
const Todo = require('../controllers/todoController')

//todo route
router.get('/todo/all',Todo.findAllData)
router.get('/todo/:id',Todo.findById)
router.delete('/todo/delete/:id',Todo.deleteData)
router.put('/todo/update/:id',Todo.updateData)
router.post('/todo/add',Todo.addData)

module.exports = router;