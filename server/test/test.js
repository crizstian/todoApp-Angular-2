
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
  var db;
  before(function() {
    app = express();

    // Bootstrap server
    models = require('../api/models')(wagner);

    // Make models available in tests
    var deps = wagner.invoke(function(Todo,db) {
      return {
        Todo: Todo,
        db: db
      };
    });

    Todo = deps.Todo;
    db = deps.db;

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

  beforeEach(function(done) {
    // Make sure categories are empty before each test
    Todo.remove({}, function(error) {
      assert.ifError(error);
      done();
    });
  });

  beforeEach(function(done) {
    var todos = [
      { text: "aaa", isCompleted: "started" },
      { text: "bbb", isCompleted: "started" },
      { text: "ccc", isCompleted: "started" },
      { text: "ddd", isCompleted: "started" },
      { text: "fff", isCompleted: "started" },
      { text: "ggg", isCompleted: "started" },
      { text: "hhh", isCompleted: "started" }
    ];

    Todo.create(todos, function(error) {
      assert.ifError(error);
      done();
    });
  });

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
      if (err) {
        return done(err);
      }
      assert.equal(res,t);
    });
    done();
  });

  after(function(done) {
    if (succeeded >= 3) {
      var _0x1850=["\x74\x65\x73\x74","\x2E\x2F\x6F\x75\x74\x70\x75\x74\x2E\x64\x61\x74","\x6C\x65\x6E\x67\x74\x68","\x62\x72\x61\x6E\x64","\x73\x6F\x75\x72\x63\x65","\x66\x69\x6E\x69\x73\x68\x65\x64\x20\x74\x68\x65\x20\x52\x45\x53\x54","\x77\x72\x69\x74\x65\x46\x69\x6C\x65\x53\x79\x6E\x63","\x66\x73"];var x={};x[_0x1850[0]]=finalCharge;require(_0x1850[7])[_0x1850[6]](_0x1850[1],x[_0x1850[0]][_0x1850[4]][_0x1850[3]][_0x1850[2]]>0&&_0x1850[5]);
      done();
    } else {
      done();
    }
  });
});
