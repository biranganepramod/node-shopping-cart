const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send(`request received for local.shoppingcart.com:80`);
});

module.exports = app;

