const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
app.set('port', 3000)

//middlewers
app.use(morgan('dev'));
app.use(express.json());

//rutas

//empezando el servidor
app.listen(app.get('port'));
console.log("mi primer servidor");