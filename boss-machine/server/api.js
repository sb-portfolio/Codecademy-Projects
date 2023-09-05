const express = require('express');
const apiRouter = express.Router();

const { getAllFromDatabase } = require('./db')

apiRouter.get('/minions', (req, res, next) => {

    const allMinionsArray = getAllFromDatabase('minions')

    res.status(200).send(allMinionsArray)
})

apiRouter.post('/minions', (req, res, next) => {

    console.log(req.body)
    
    res.status(200).send(allMinionsArray)
})




module.exports = apiRouter;
