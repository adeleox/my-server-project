const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234', 
    database: 'my_project_db'
});
connection.connect(err => {
    if (err) console.log('DB Error: ', err);
    else console.log('Connected to DB');
});
module.exports = connection;