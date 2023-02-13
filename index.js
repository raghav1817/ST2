var express= require("express");
var app= express();
var bodyParser= require("body-parser");
var mysql = require('mysql');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var conn= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "st2"
});
conn.connect( function (err){
    if (err) throw err;
    console.log("Connected");
});

var task= new Array();
// conn.query("SELECT * FROM todo", function(err, result) {
//     if (err) throw err;
//     task = JSON.parse(JSON.stringify(result));
// });

app.post('/addtask', (req, res) => {
    var todo = req.body.newtask;
    task.push(newtask);
    res.redirect("/")
    var sql= "INSERT INTO todo (id, name) VALUES ?";
    var values = [[, newtask]];
    conn.query(sql,[values], function (err, result) {
        if (err) throw err;
        console.log("1 row inserted");
    });
    // conn.query("SELECT * FROM todo", function(err, result) {
    //     if (err) throw err;
    //     task= JSON.parse(JSON.stringify(result));
    //     res.redirect("/");
    // });
});

var ans;
app.listen(3500, function(){
    console.log("App Server Running");
}) ;