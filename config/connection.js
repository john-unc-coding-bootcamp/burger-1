var mysql = require ("mysql");

var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
	console.log(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'passw0rd',
		database: 'burgers_db'
	});
};

connection.connect(function(err) {
	if (err) {
		console.log("error connection: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
})

module.exports = connection;