const express = require('express');
const minionsRouter = express.Router();

const { getAllFromDatabase, 
        getFromDatabaseById, 
        addToDatabase, 
        updateInstanceInDatabase, 
        deleteFromDatabasebyId,
        getWorkByMinion
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

minionsRouter.param('workId', (req, res, next, id) => {
    const workExists = getFromDatabaseById('work', id)

    if(workExists){
        req.workId = id
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
    const deleted = deleteFromDatabasebyId('minions', minionId)

    if(deleted){
        res.status(204).send()
    } else{
        res.status(500).send()
    }
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
    const minionWork = getWorkByMinion(minionId)

    res.status(200).send(minionWork)
    
})

minionsRouter.post('/:minionId/work', (req, res, next) => {

    const newMinionWork = req.body

    if(newMinionWork){
        addToDatabase('work', newMinionWork)
        res.status(201).send(newMinionWork)
   } else{
       res.status(404).send()
   }

})

minionsRouter.delete('/:minionId/work/:workId', (req, res, next) => {

    const workId = req.workId

    const deleted = deleteFromDatabasebyId('work', workId)
    if (deleted) {
        res.status(204).send()
    } else {
        res.status(500).send()
    }

})

minionsRouter.put('/:minionId/work/:workId', (req, res, next) => {

    const workId = req.workId
    const minionId = req.minionId
    const workData = req.body

    if(workData.minionId===minionId){
        updateInstanceInDatabase('work', workData)
        res.status(201).send(workData)
    } else{
        res.status(400).send()
    }
})




module.exports = minionsRouter;
