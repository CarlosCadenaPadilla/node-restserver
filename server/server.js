require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());


//habilitar la carpeta public para que sea accdedida

app.use( express.static(path.resolve(__dirname, '../public')));

console.log(path.resolve(__dirname, '../public'));

//configuracion global de rutas
app.use(require('./routes/index'));


 
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {

    if ( err ) throw err;

    console.log('Base de datos ONLINE');

});


app.listen(process.env.PORT, () => {
    console.log('escuchando puerto: ',process.env.PORT);
});

