var mysql = require('mysql');

// create connection.
var conn = mysql.createConnection({
	user: 'nodejs_study',
	password: 'nodejs_study',
	database: 'nodejs_study'
});

// connect
conn.connect();

// create table.
conn.query('CREATE TABLE IF NOT EXISTS users (' +
  'id INT(11) NOT NULL AUTO_INCREMENT,' +
  'name VARCHAR(255),' +
  'PRIMARY KEY (id)' +
')');

// execute query.
conn.query('INSERT INTO users(name) VALUES(?)', ['foo'], function(err, result) {
	console.log(result.insertId);
});	

// streaming query rows.
var query = conn.query('SELECT * FROM users;');
query.on('result', function(row) {
	console.log(row);
});

// end
conn.end();
