const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router/userRouter');

app.use(bodyParser.json());
app.use('/api/v1', router);
module.exports = app;

