//requiring mysql
var mysql = require("mysql");

var connection;

//connecting to mysql
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rascon1992",
    database: "burgers_db"
  });
};

connection.connect();

//exporting connection
module.exports = connection;