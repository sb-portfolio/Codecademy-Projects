const express = require('express');
const testRouter = express.Router()


testRouter.get('/:id', (req, res, next) => {

    res.send(`ID Number: ${req.params.id}, Monkey: ${req.query.monkey}`);
  });

  module.exports = testRouter