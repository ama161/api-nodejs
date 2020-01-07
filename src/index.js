const express = require('express');
const app = express();
const path = require('path');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile); modificar los ficheros por fichero.html
app.set('view engine', 'ejs');

// routes
app.use(require('./routes/index'));

// listen server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});