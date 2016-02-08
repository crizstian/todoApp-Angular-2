'use strict';
const bodyparser = require('body-parser');
const express    = require('express');
const status     = require('http-status');
const _          = require('underscore');
const cors       = require('cors');

module.exports = function(wagner) {
  var api = express.Router();

  api.use(bodyparser.json());
  api.use(bodyparser.text({
   type: 'text/plain'
  }));
  api.use(cors());

  /* GET All Todos */
  api.get('/todos', wagner.invoke((Todo) => {
    return (req,res) => {
      Todo.find({}, function(err, todos) {
        if (err) {
          return handleError(err,res);
        }
        return res.json(todos);
      });
    };
  }));

  api.post('/todo', wagner.invoke((Todo,db) => {
    return (req,res) => {
      let t = JSON.parse(req.body);
      let todo = new Todo({
        _id:db.Types.ObjectId(),
        text: t.text,
        isCompleted: t.isCompleted
      });

      todo.save(function(err,todo){
        if (err) {
          return handleError(err,res);
        }
        return res.json(todo);
      });
    };
  }));


  api.put('/todo/:id', wagner.invoke((Todo) => {
    return (req,res) => {
      let t = JSON.parse(req.body);
      Todo.findById(req.params.id,function(err,todo){
        if (err) {
          return handleError(err,res);
        }
        todo.isCompleted = t.isCompleted;
        todo.text = t.text;
        todo.save(function(err,todo){
          if (err) {
            return handleError(err,res);
          }
          console.log(todo);
          return res.json(todo);
        });
      });
    };
  }));

  api.delete('/todo/:id', wagner.invoke((Todo) => {
    return (req,res) => {
      Todo.findByIdAndRemove(req.params.id,function(err,todo){
          if (err) {
            return handleError(err,res);
          }
          return res.json({todo:'deleted'});
      });
    };
  }));

  api.use(handleOne);
  return api;
};

function handleError(err,res){
  return res.status(status.INTERNAL_SERVER_ERROR)
            .json({ err: err.toString() });
}

function handleOne(err, req, res, next) {
  if (err) {
    return res.
      status(status.INTERNAL_SERVER_ERROR).
      json({ err: err.toString() });
  }
  else {
    return res.
      status(status.NOT_FOUND).
      json({ err: 'Not found' });
  }
}
