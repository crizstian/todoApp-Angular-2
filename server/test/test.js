
var assert = require('assert');
var express = require('express');
var fs = require('fs');
var status = require('http-status');
var superagent = require('superagent');
var wagner = require('wagner-core');

var URL_ROOT = 'http://localhost:8000';

describe('Backend Server - Routes and MongoDB Test', function() {
  var server;
  var app;
  var succeeded = 0;

  var Todo;
  var db;
  before(function() {
    app = express();

    // Bootstrap server
    models = require('../api/models')(wagner);

    // Make models available in tests
    var deps = wagner.invoke(function(Todo,db) {
      return {
        Todo: Todo
      };
    });

    Todo = deps.Todo;

    app.use('/api/v1',require('../api/api')(wagner));

    server = app.listen(8000);
  });

  after(function() {
    server.close();
  });

  beforeEach(function(done) {
    Todo.remove({}, function(error) {
      assert.ifError(error);
      done();
    });
  });

  beforeEach(function(done) {
    var todos = [
      { _id:"1",text: "aaa", isCompleted: "started" },
      { _id:"2",text: "bbb", isCompleted: "started" },
      { _id:"3",text: "ccc", isCompleted: "started" },
      { _id:"4",text: "ddd", isCompleted: "started" },
      { _id:"5",text: "fff", isCompleted: "started" },
      { _id:"6",text: "ggg", isCompleted: "started" },
      { _id:"7",text: "hhh", isCompleted: "started" }
    ];

    Todo.create(todos, function(error) {
      assert.ifError(error);
      done();
    });
  });

  it('can query todos', function(done) {
    var url = URL_ROOT+'/api/v1/todos';
    Todo.find({}, function(err, todos) {
      if (err) throw err;

      superagent
        .get(url)
        .end(function(err,res){
        if (err) {
          return done(err);
        }
        assert.equal(JSON.stringify(res.body.todos),JSON.stringify(todos));
        done();
      });
    });
  });
  //
  it('can add a todo', function(done) {
    var url = URL_ROOT+'/api/v1/todo';

    superagent
      .post(url)
      .send({
        _id:"8",
        text:"zzz",
        isCompleted:"started"
      })
      .end(function(err,res){
      if (err) {
        return done(err);
      }
      if(res.body.todo){
        done();}
    });
  });
  //
  it('can update a todo', function(done) {
    var url = URL_ROOT+'/api/v1/todo/6';

    superagent
      .put(url)
      .send({
        _id:"6",
        text:"yyy",
        isCompleted:"completed"
      })
      .end(function(err,res){
      if (err) {
        return done(err);
      }
      if(res.body.todo)
        done();
    });
  });
  //
  it('can delete a todo', function(done) {
    var url = URL_ROOT+'/api/v1/todo/7';

    superagent
      .delete(url)
      .end(function(err,res){
      if (err) {
        return done(err);
      }
      if(res.body.todo)
        done();
    });
  });
});
