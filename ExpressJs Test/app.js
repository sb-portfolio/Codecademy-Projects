const express = require('express');
const app = express();
const testRouter = require('./test')

//const PORT = process.env.PORT || 4001;
const PORT = 4001;
app.use('/test', testRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});