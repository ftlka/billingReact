'use strict';
const express = require('express');

const app = express();

app.get('*', (req, res) => {
    res.render('index');
});

app.listen(8080, () => {
    console.info(`Server started on ${8080}`);
    console.info(`Open http://localhost:${8080}/`);
});


module.exports = app;
