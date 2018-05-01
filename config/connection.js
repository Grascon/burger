//requiring mysql
var mysql = require("mysql");

//connecting to mysql
if (process.env.JAWSDB_URL){
  var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rascon1992",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

//exporting connection
module.exports = connection;