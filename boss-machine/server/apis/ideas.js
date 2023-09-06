const express = require('express');
const ideasRouter = express.Router();
const checkMillionDollarIdea = require('../checkMillionDollarIdea')

const { getAllFromDatabase, 
        getFromDatabaseById, 
        addToDatabase, 
        updateInstanceInDatabase, 
        deleteFromDatabasebyId 
    } = require('../db')


ideasRouter.get('/', (req, res, next) => {

    const allIdeasArray = getAllFromDatabase('ideas')

    res.status(200).send(allIdeasArray)
})

ideasRouter.param('ideaId', (req, res, next, id) => {
    const ideaExists = getFromDatabaseById('ideas', id)

    if(ideaExists){
        req.ideaId = id
        req.ideaData = ideaExists
        next()
    } else{
        res.status(404).send()
    }
    
})

ideasRouter.get('/:ideaId', (req, res, next) => {

    const ideaData = req.ideaData
    res.status(200).send(ideaData)
    
})

ideasRouter.put('/:ideaId', (req, res, next) => {

    const ideaData = req.body

    updateInstanceInDatabase('ideas', ideaData)

    res.status(200).send(ideaData)
    
})

ideasRouter.delete('/:ideaId', (req, res, next) => {

    const ideaId = req.ideaId

    deleteFromDatabasebyId('ideas', ideaId)

    res.status(204).send()
    
})



ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {

    

    const newIdea = req.body
   // console.log(newIdea)

    if(newIdea){
        addToDatabase('ideas', newIdea)
        res.status(201).send(newIdea)
   } else{
       res.status(404).send()
   }

})





module.exports = ideasRouter;
