const db = require('../models')

class Todo {
    static findAllData (req,res) {
        db.Todo.findAll()
            .then(todos =>{
                res.status(200).json(todos)
            })
            .catch(err =>{
                res.status(500).json(err)
            })
    }

    static findById (req,res){
        db.Todo.findOne({
                id : req.params.id
        })
        .then(todo=> (res.status(200).json({todo})))
        .catch(err=>(res.status(500).json(err)))
    }

    static addData (req,res) {
        console.log('ini text =>>>>>>',req.body.text)
        db.Todo.create({
            text : req.body.text
        }).then(submittedData => res.status(200).json(submittedData))
        .catch(err => res.status(500).json(err))
    }

    static deleteData (req,res){
        db.Todo.destroy({
            where : {
                id : req.params.id
            }
        })
        .then( () => (res.status(200).json({message:`data has been deleted`})))
        .catch(err=>(res.status(500).json(err)))
    }

    static updateData (req,res){
        db.Todo.update(
        {
            text : req.body.text
        },    
        {
            where : {
                id : req.params.id
            }
        })
        .then( updateTodo => (res.status(200).json({message:`data has been updated`})))
        .catch(err=>(res.status(500).json(err)))
    }
}


module.exports = Todo