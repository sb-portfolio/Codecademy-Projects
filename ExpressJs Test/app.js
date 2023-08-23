const express = require('express');
const app = express();


//const PORT = process.env.PORT || 4001;
const PORT = 4001;



app.get('/test/:id', (req, res, next) => {
    res.send(req.params.id);
  });



app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});