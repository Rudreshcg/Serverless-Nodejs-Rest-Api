const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "softsuave",
    database: "node_crud_db"
});

connection.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Database connected");
    }
});


module.exports = connection;