'use strict';
const restify = require('restify');
// const cors    = require('cors');
// const todos   = require('./routes/todos');
const mongojs = require('mongojs');
const db      = mongojs('ng2todoapp', ['todos']);

// Server
var server = restify.createServer();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

// using the imported routes
// server.use('/api/v1/', todos);

/* GET All Todos */
server.get('/api/v1/todos',(req, res, next) => {
  db.todos.find((err, todos) => {
    if(err)
      res.send(err);
    else
      res.json(todos);
  });
});

/* POST/SAVE a Todo */
server.post('/api/v1/todo',(req, res, next) => {
    let todo = JSON.parse(req.body);

    console.log("getting data: "+ todo);

    if (!todo.text || !(todo.isCompleted + '')) {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        db.todos.save(todo, (err, result) => {
          if(err)
            res.send(err);
          else
            res.json(result);
        });
    }
});

/* GET One Todo with the provided ID */
server.get('/api/v1/todo/:id',(req, res, next) => {
    db.todos.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, (err, todos) => {
          if(err)
            res.send(err);
          else
            res.json(todos);
      });
});

/* PUT/UPDATE a Todo */
server.put('/api/v1/todo/:id',(req, res, next) => {
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
          if(err)
            res.send(err);
          else
            res.json(result);
      });
  }
});

/* DELETE a Todo */
server.del('/api/v1/todo/:id',(req, res) => {
    db.todos.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', (err, result) => {
        if(err)
          res.send(err);
        else
          res.json(result);
    });
});

// catch 404 and forward to error handler
server.use((req, res, next) => {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

server.listen(8000, () => {
    let host = 'localhost';
    let port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = server;
