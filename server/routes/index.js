const express = require('express');

const app = express();

app.use(require('./usuario'));
app.use(require('./login'));
app.use(require('./presupuesto'));
app.use(require('./categoria'));
app.use(require('./cuenta'));
app.use(require('./transaccion'));


module.exports = app;