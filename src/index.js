// nodemon -> reiniciar el server al guardar (nodemon src)
const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile); modificar los ficheros por fichero.html
app.set('view engine', 'ejs'); // motor de plantilla (ej. handlebars)

// middlewares
app.use(morgan('dev')); // para mostrar las rutas por console
app.use(express.urlencoded({extended: false})); // IMP (Express Body Empty)

const BDconfig = {
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    port: '3306',
    database: 'apinodejs'
};

app.use(myConnection(mysql, BDconfig, 'single'));

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public'))); // config folder public

// listen server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});