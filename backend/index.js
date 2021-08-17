// express module
const express = require('express');
require("dotenv").config();
const task = require('./router/task');

// generate express app
const app = express();

app.use("/task", task);

// start server on port 3000
app.listen(process.env.PORT, () => console.log('Listening on port ' + process.env.PORT));