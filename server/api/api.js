'use strict';
const bodyparser = require('body-parser');
const express    = require('express');
const status     = require('http-status');
const _          = require('underscore');
const cors       = require('cors');

module.exports = function(wagner) {
  var api = express.Router();

  api.use(bodyparser.json());
  api.use(cors());

  /* GET All Todos */
  api.get('/todos', wagner.invoke((Todo) => {
    console.log("Fetching data from db");
    return (req,res) => {
      Todo.find({}, function(err, todos) {
        if (error) {
          return res.status(status.INTERNAL_SERVER_ERROR)
                    .json({ error: error.toString() });
        }
        return res.json(todos);
      });
    };
  }));

  return api;
};

function handleOne(property, res, error, result) {
  if (error) {
    return res.
      status(status.INTERNAL_SERVER_ERROR).
      json({ error: error.toString() });
  }
  if (!result) {
    return res.
      status(status.NOT_FOUND).
      json({ error: 'Not found' });
  }

  var json = {};
  json[property] = result;
  res.json(json);
}
