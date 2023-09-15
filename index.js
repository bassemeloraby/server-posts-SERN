const express = require("express");

const colors = require("colors");
const app = express();
const port = process.env.PORT || "3001";

const db = require("./models");

app.use(express.json());

// db.sequelize.sync().then(() => {
//   app.listen(port, (err) => {
//     if (err) throw err;
//     console.log("Server listening on port".blue, port.yellow);
//   });
// });

db.sequelize.sync().then(() => {
    app.listen(port, () => {
      console.log("Server running on port 3001".blue, port.yellow);
    });
  });