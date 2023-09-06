const express = require('express');
const minionsRouter = express.Router();

const { getAllFromDatabase, 
        getFromDatabaseById, 
        addToDatabase, 
        updateInstanceInDatabase, 
        deleteFromDatabasebyId,
        createWork
    } = require('../db')

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

    res.status(204).send()
    
})

minionsRouter.post('/', (req, res, next) => {

    const newMinion = req.body

    if(newMinion){
        addToDatabase('minions', newMinion)
        res.status(201).send(newMinion)
   } else{
       res.status(404).send()
   }

})

minionsRouter.get('/:minionId/work', (req, res, next) => {

    const minionId = req.minionId
    const minionWork = getFromDatabaseById('work', minionId)
    console.log(minionWork)

    res.status(200).send(minionWork)
    
})

minionsRouter.post('/:minionId/work', (req, res, next) => {

    const minionId = req.minionId
    const newMinionWork = createWork(minionId)

    if(newMinionWork){
        addToDatabase('work', newMinionWork)
        res.status(201).send([])
   } else{
       res.status(404).send()
   }

})




module.exports = minionsRouter;
