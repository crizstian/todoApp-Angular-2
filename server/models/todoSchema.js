'use strict';
const mongoose = require('mongoose');

const todoSchema = {
  text: {
    type: String,
    required: true
  },
  isCompleted: {
    type: String,
    required: true
  }
};

module.exports = new mongoose.Schema(todoSchema);
module.exports.todoSchema = todoSchema;
