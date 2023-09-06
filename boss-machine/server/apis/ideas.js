const express = require('express');
const ideasRouter = express.Router();

const { getAllFromDatabase, addToDatabase } = require('../db')

ideasRouter.get('/', (req, res, next) => {

    const allIdeasArray = getAllFromDatabase('ideas')

    res.status(200).send(allIdeasArray)
})

ideasRouter.post('/', (req, res, next) => {

    const newMinion = req.body

    // if(newMinion.name.length > 0 && 
    //     newMinion.title.length > 0 && 
    //     typeof newMinion.salary === 'string' && 
    //     newMinion.weaknesses.length > 0){
    //         addToDatabase('minions', req.body)
    //         res.status(200).send(req.body)
    // } else{
    //     res.status(404).send()
    // }  
})




module.exports = ideasRouter;
