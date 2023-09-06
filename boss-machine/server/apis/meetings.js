const express = require('express');
const meetingsRouter = express.Router();

const { getAllFromDatabase, addToDatabase } = require('../db')

meetingsRouter.get('/', (req, res, next) => {

    const allMeetingsArray = getAllFromDatabase('meetings')

    res.status(200).send(allMeetingsArray)
})

meetingsRouter.post('/', (req, res, next) => {

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




module.exports = meetingsRouter;
