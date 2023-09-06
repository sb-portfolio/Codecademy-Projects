const express = require('express');
const meetingsRouter = express.Router();

const { getAllFromDatabase, addToDatabase, deleteAllFromDatabase, createMeeting } = require('../db')

meetingsRouter.get('/', (req, res, next) => {

    const allMeetingsArray = getAllFromDatabase('meetings')

    res.status(200).send(allMeetingsArray)
})

meetingsRouter.delete('/', (req, res, next) => {

    deleteAllFromDatabase('meetings')

    res.status(204).send()
    
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
