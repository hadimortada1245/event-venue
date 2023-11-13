const mysql = require('mysql2');
const con = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Event_Venue',
});

module.exports = con;