var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '14527854',
  database : 'checkout'
});

connection.connect(()=> console.log('Connected to Database'));

module.exports = connection;

