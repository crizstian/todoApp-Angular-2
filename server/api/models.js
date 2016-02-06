var mongoose = require('mongoose');
var _        = require('underscore');

module.exports = function(wagner) {
  mongoose.connect('mongodb://localhost:27017/ng2todoapp');

  wagner.factory('db', function() {
    return mongoose;
  });

  var Todo =
    mongoose.model('Todo', require('../models/todoSchema'), 'todos');

  var models = {
    Todo: Todo
  };

  // To ensure DRY-ness, register factories in a loop
  _.each(models, function(value, key) {
    wagner.factory(key, function() {
      return value;
    });
  });

  return models;
};
