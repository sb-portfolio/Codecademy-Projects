const express = require('express');
const apiRouter = express.Router();
const minionsRouter = require('./apis/minions')
const meetingsRouter = require('./apis/meetings')
const ideasRouter = require('./apis/ideas')

apiRouter.use('/minions', minionsRouter)
apiRouter.use('/meetings', meetingsRouter)
apiRouter.use('/ideas', ideasRouter)

module.exports = apiRouter;
