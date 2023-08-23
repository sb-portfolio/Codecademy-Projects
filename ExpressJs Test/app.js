const express = require('express');
const app = express();


const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));


app.get('/test/:id', (req, res, next) => {
    res.send(req.params.id);
  });



app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});