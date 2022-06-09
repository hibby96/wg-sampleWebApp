const express = require('express')
const getId = require('docker-container-id');
const app = express()
const port = 3000



const mysql = require('mysql');

const con = mysql.createConnection({
    host: "database-2-instance-1.cy5h1nazzd2h.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "wiprotraining"
});
//port = 3306

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     con.end();
// });


app.get('/', (req, res) => {
    const theID = await myFunction();
    res.send("<h1>This is my cat!  This is being sent from container ID:" + theID + "</h1><img src='https://w2-yahoo-demo.s3.us-west-2.amazonaws.com/cat.jpg' alt='cat image' width='1024' height='427'>")
    //res.send('Hello World!')

})

app.get('/makequery', (req, res) => {
    con.query('CREATE DATABASE IF NOT EXISTS main;');
    con.query('USE main;');
    con.query('CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, username varchar(30), email varchar(255), age int, PRIMARY KEY(id));', function(error, result, fields) {
        console.log(result);
    });
    //do something in db
    res.send("making a query to the DB");

})

app.get('/fetch', (req, res) => {
    con.query('USE main;');
    con.query('CREATE TABLE IF NOT EXISTS users(id int NOT NULL AUTO_INCREMENT, username varchar(30), email varchar(255), age int, PRIMARY KEY(id));', function(error, result, fields) {
        console.log(result);
    });
    //con.query("INSERT INTO users (username, email, age) VALUES ('whib', 'test@gmail', 25)")
    let returnable = "blank"
    con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        returnable = result;
        res.send(returnable);
    });
    //do something in db

})

con.connect(function(err) {
    if (err) {
        throw err
    } else {
        console.log("Connected to the DB");
        app.listen(port, async ()  => {
            const theID = await myFunction();
            console.log("This is the container ID: " + theID)
            console.log(`Example app listening on port ${port}`)
        })
    }
    //con.end();
});




async function myFunction() {
    const theID =  await getId();
    return theID
  }