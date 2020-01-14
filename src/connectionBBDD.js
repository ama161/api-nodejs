// Connect BBDD without express-myconnection
const mysql = require('mysql');

const BDconfig = {
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    port: '3306',
    database: 'apinodejs'
};

const connection = mysql.createConnection(
    BDconfig
);
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected');
});

// connection.query('SELECT * FROM user', (err, res) => {
//     if(err)
//         console.log(err);
//     if(res)
//         console.log(res);
// });

module.exports = () => connection;