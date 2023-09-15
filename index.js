const express = require("express");

const colors = require('colors');
const app = express();
const port = process.env.PORT || '3001';
app.use(express.json());




  app.listen(port, (err) => {
    if (err) throw err;
    console.log('Server listening on port'.blue, port.yellow);
  });  