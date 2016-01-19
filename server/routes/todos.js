'use strict';
const express = require('express');
const router  = express.Router();
const mongojs = require('mongojs');
const db      = mongojs('ng2todoapp', ['todos']);

/* GET All Todos */
router.get('/todos',(req, res, next) => {
  db.todos.find((err, todos) => {
    if(err) res.send(err);
    else    res.json(todos);
  });
});

router.route('/todo/:id')
  /* GET One Todo with the provided ID */
  .get((req, res, next) => {
    db.todos.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, (err, todos) => {
          if(err) res.send(err);
          else    res.json(todos);
      });
  })
  /* POST/SAVE a Todo */
  .post((req, res, next) => {
      let todo = req.body;
      if (!todo.text || !(todo.isCompleted + '')) {
          res.status(400);
          res.json({
              "error": "Invalid Data"
          });
      } else {
          db.todos.save(todo, (err, result) => {
            if(err) res.send(err);
            else    res.json(result);
          });
      }
  })
  /* PUT/UPDATE a Todo */
  .put((req, res, next) => {
      let todo = req.body;
      let updObj = {};

      if (todo.isCompleted)
          updObj.isCompleted = todo.isCompleted;

      if (todo.text)
          updObj.text = todo.text;

      if (!updObj) {
          res.status(400);
          res.json({
              "error": "Invalid Data"
          });
      } else {
          db.todos.update({
              _id: mongojs.ObjectId(req.params.id)
          }, updObj, {}, (err, result) => {
              if(err) res.send(err);
              else    res.json(result);
          });
      }
  })
  /* DELETE a Todo */
  .delete((req, res) => {
      db.todos.remove({
          _id: mongojs.ObjectId(req.params.id)
      }, '', (err, result) => {
          if(err) res.send(err);
          else    res.json(result);
      });
  });

// /* GET One Todo with the provided ID */
// router.get('/todo/:id',(req, res, next) => {
//   db.todos.findOne({
//       _id: mongojs.ObjectId(req.params.id)
//   }, (err, todos) => {
//         if(err) res.send(err);
//         else    res.json(todos);
//     });
// });

// /* POST/SAVE a Todo */
// router.post('/todo', function(req, res, next) {
//     var todo = req.body;
//     if (!todo.text || !(todo.isCompleted + '')) {
//         res.status(400);
//         res.json({
//             "error": "Invalid Data"
//         });
//     } else {
//         db.todos.save(todo, function(err, result) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.json(result);
//             }
//         })
//     }
// });

// /* PUT/UPDATE a Todo */
// router.put('/todo/:id', function(req, res, next) {
//     var todo = req.body;
//     var updObj = {};
//
//     if (todo.isCompleted) {
//         updObj.isCompleted = todo.isCompleted;
//     }
//     if (todo.text) {
//         updObj.text = todo.text;
//     }
//
//     if (!updObj) {
//         res.status(400);
//         res.json({
//             "error": "Invalid Data"
//         });
//     } else {
//         db.todos.update({
//             _id: mongojs.ObjectId(req.params.id)
//         }, updObj, {}, function(err, result) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 res.json(result);
//             }
//         });
//     }
// });

// /* DELETE a Todo */
// router.delete('/todo/:id', function(req, res) {
//     db.todos.remove({
//         _id: mongojs.ObjectId(req.params.id)
//     }, '', function(err, result) {
//         if (err) {
//             res.send(err);
//         } else {
//             res.json(result);
//         }
//     });
//
// });

module.exports = router;
