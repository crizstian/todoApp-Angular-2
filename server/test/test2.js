
var assert = require('assert');
var express = require('express');
var fs = require('fs');
var status = require('http-status');
var superagent = require('superagent');
var wagner = require('wagner-core');

var URL_ROOT = 'http://localhost:8000';

describe('Backend Server Test', function() {
  var server;
  var app;
  var succeeded = 0;

  var Todo;
  before(function() {
    app = express();

    // Bootstrap server
    models = require('../api/models')(wagner);

    // Make models available in tests
    var deps = wagner.invoke(function(Todo) {
      return {
        Todo: Todo
      };
    });

    Todo = deps.Todo;

    app.use(function(req, res, next) {
      Todo.find({}, function(error, todo) {
        assert.ifError(error);
        req.todo = todo;
        next();
      });
    });

    app.use(require('../api/api')(wagner));

    server = app.listen(8000);
  });

  after(function() {
    // Shut the server down when we're done
    server.close();
  });

  // beforeEach(function(done) {
  //   // Make sure categories are empty before each test
  //   Todo.remove({}, function(error) {
  //     assert.ifError(error);
  //   });
  // });
  //
  // beforeEach(function(done) {
  //   var todos = [
  //     { text: "aaa", isCompleted: "started" },
  //     { text: "bbb", isCompleted: "started" },
  //     { text: "ccc", isCompleted: "started" },
  //     { text: "ddd", isCompleted: "started" },
  //     { text: "fff", isCompleted: "started" },
  //     { text: "ggg", isCompleted: "started" },
  //     { text: "hhh", isCompleted: "started" }
  //   ];
  //
  //   Todo.create(todos, function(error) {
  //     assert.ifError(error);
  //   });
  // });

  it('can query todos', function(done) {
    var url = URL_ROOT+'/api/v1/todos';
    var t;
    Todo.find({}, function(err, todos) {
      if (err) throw err;
      t = todos;
    });

    // Set up data
    superagent
      .get(url)
      .end(function(err,res){
      if (error) {
        return done(error);
      }
      assert.equal(res,t);
    });
    done();
  });

});
