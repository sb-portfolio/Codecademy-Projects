const express = require('express');
const meetingsRouter = express.Router();

const { getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting } = require('../db')

meetingsRouter.get('/', (req, res, next) => {

    const allMeetingsArray = getAllFromDatabase('meetings')

    res.status(200).send(allMeetingsArray)
})

meetingsRouter.delete('/', (req, res, next) => {

    const deleted = deleteAllFromDatabase('meetings')

    if(deleted){
        res.status(204).send()
    } else{
        res.status(500).send()
    }
    
})

meetingsRouter.post('/', (req, res, next) => {

    const newMeeting = createMeeting()
   
    if(newMeeting){
        addToDatabase('meetings', newMeeting)
        res.status(201).send(newMeeting)
   } else{
       res.status(404).send()
   }

})




module.exports = meetingsRouter;
