const express = require('express');
const minionsRouter = express.Router();

const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('../db')

minionsRouter.get('/', (req, res, next) => {

    const allMinionsArray = getAllFromDatabase('minions')

    res.status(200).send(allMinionsArray)
})

minionsRouter.param('minionId', (req, res, next, id) => {
    const minionExists = getFromDatabaseById('minions', id)

    if(minionExists){
        req.minionId = id
        req.minionData = minionExists
        next()
    } else{
        res.status(404).send()
    }
    
})

minionsRouter.get('/:minionId', (req, res, next) => {

    const minionData = req.minionData
    res.status(200).send(minionData)
    
})

minionsRouter.put('/:minionId', (req, res, next) => {

    const minionData = req.body

    updateInstanceInDatabase('minions', minionData)

    res.status(200).send(minionData)
    
})

minionsRouter.delete('/:minionId', (req, res, next) => {

    const minionId = req.minionId
    deleteFromDatabasebyId('minions', minionId)

    res.status(200).send()
    
})

minionsRouter.post('/', (req, res, next) => {

    const newMinion = req.body

    if(newMinion.name.length > 0 && 
        newMinion.title.length > 0 && 
        typeof newMinion.salary === 'string' && 
        newMinion.weaknesses.length > 0){
            addToDatabase('minions', req.body)
            res.status(200).send(req.body)
    } else{
        res.status(404).send()
    }  
})




module.exports = minionsRouter;
